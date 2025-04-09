/* eslint-disable @typescript-eslint/no-require-imports, import/no-anonymous-default-export */

import path from "path";
import { visit } from "unist-util-visit";
import * as mdxPlugins from "./lib/helpers/remark-rehype-plugins";
import type { NextConfig } from "next";

// check environment variables at build time
// https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)
import "./lib/env";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  env: {
    // freeze timestamp at build time for when server-side pages need a "last updated" date. calling Date.now() from
    // pages using getServerSideProps will return the current(ish) time instead, which is usually not what we want.
    RELEASE_DATE: new Date().toISOString(),
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "bcm6wnmyyzj1p5ls.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
    ],
  },
  outputFileTracingIncludes: {
    "/notes/[slug]/opengraph-image": [
      "./notes/**/*",
      "./app/opengraph-image.jpg",
      "./node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf",
    ],
  },
  experimental: {
    reactCompiler: true, // https://react.dev/learn/react-compiler
    ppr: "incremental", // https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering#using-partial-prerendering
    serverSourceMaps: true,
  },
  eslint: {
    // https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
    dirs: ["app", "components", "contexts", "hooks", "lib", "notes"],
  },
  headers: async () => [
    {
      source: "/pubkey.asc",
      headers: [
        {
          key: "Content-Type",
          value: "text/plain; charset=utf-8",
        },
      ],
    },
  ],
  redirects: async () => [
    { source: "/y2k", destination: "https://y2k.pages.dev", permanent: false },
    // TODO :
    // {
    //   source: "/stats",
    //   destination: "",
    //   permanent: false,
    // },

    // NOTE: don't remove this, it ensures de-AMPing the site hasn't offended our google overlords too badly!
    // https://developers.google.com/search/docs/advanced/experience/remove-amp#remove-only-amp
    { source: "/notes/:slug/amp.html", destination: "/notes/:slug", permanent: true },

    // remnants of previous sites/CMSes:
    { source: "/index.xml", destination: "/feed.xml", permanent: true },
    { source: "/feed", destination: "/feed.xml", permanent: true },
    { source: "/rss", destination: "/feed.xml", permanent: true },
    { source: "/blog/(.*)", destination: "/notes", permanent: true },
    { source: "/archives/(.*)", destination: "/notes", permanent: true },
    { source: "/resume", destination: "/static/resume.pdf", permanent: false },
    { source: "/resume.pdf", destination: "/static/resume.pdf", permanent: false },
  ],
};

// my own macgyvered version of next-compose-plugins (RIP)
const nextPlugins: Array<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: NextConfig) => NextConfig | [(config: NextConfig) => NextConfig, any]
> = [
  require("@next/bundle-analyzer")({
    enabled: !!process.env.ANALYZE,
  }),
  require("@next/mdx")({
    options: {
      remarkPlugins: [
        mdxPlugins.remarkFrontmatter,
        mdxPlugins.remarkMdxFrontmatter,
        mdxPlugins.remarkGfm,
        mdxPlugins.remarkSmartypants,
        // workaround for rehype-mdx-import-media not applying to `<video>` tags:
        // https://github.com/Chailotl/remark-videos/blob/851c332993210e6f091453f7ed887be24492bcee/index.js
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        () => (tree: any) => {
          visit(tree, "image", (node) => {
            if (node.url.match(/\.(mp4|webm)$/i)) {
              node.type = "element";
              node.data = {
                hName: "video",
                hProperties: {
                  src: node.url,
                  // TODO: make this even hackier and pass an autoplay option in the alt text or something
                },
              };
            }
          });
        },
      ],
      rehypePlugins: [
        mdxPlugins.rehypeUnwrapImages,
        mdxPlugins.rehypeSlug,
        [
          mdxPlugins.rehypePrettyCode,
          {
            theme: {
              light: "material-theme-lighter",
              dark: "material-theme-darker",
            },
            bypassInlineCode: true,
            defaultLang: "plaintext",
            grid: false,
            keepBackground: false,
          },
        ],
        mdxPlugins.rehypeMdxImportMedia,
      ],
    },
  }),
];

export default (): NextConfig =>
  nextPlugins.reduce((acc, plugin) => (Array.isArray(plugin) ? plugin[0](acc, plugin[1]) : plugin(acc)), nextConfig);
