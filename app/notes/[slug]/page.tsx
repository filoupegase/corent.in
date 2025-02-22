import { getPostSlugs, getPostData } from "../../../lib/helpers/posts";
import { metadata as defaultMetadata } from "../../layout";
import config from "../../../lib/config";
import type { Metadata } from "next";

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#disable-rendering-for-unspecified-paths
export const dynamicParams = false;

// https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering#using-partial-prerendering
export const experimental_ppr = true;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();

  // map slugs into a static paths object required by next.js
  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { frontMatter } = await getPostData(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: frontMatter.title,
      url: `/notes/${slug}`,
      type: "article",
      authors: [config.authorName],
      tags: frontMatter.tags,
      publishedTime: frontMatter.date,
      modifiedTime: frontMatter.date,
      images: frontMatter.image
        ? [{ url: frontMatter.image, alt: frontMatter.title }]
        : defaultMetadata.openGraph?.images,
    },
    alternates: {
      ...defaultMetadata.alternates,
      canonical: `/notes/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontMatter, markdown } = await getPostData(slug);
  return <></>;
}
