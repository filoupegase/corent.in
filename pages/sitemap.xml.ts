import { SitemapStream, SitemapItemLoose, EnumChangefreq } from "sitemap";
import { getAllNotes } from "../lib/helpers/parse-notes";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<Record<string, never>> = async (context) => {
  const { res } = context;
  const stream = new SitemapStream({ hostname: process.env.BASE_URL });

  // cache on edge for 12 hours
  res.setHeader("cache-control", "public, max-age=0, s-maxage=43200, stale-while-revalidate");
  res.setHeader("content-type", "application/xml; charset=utf-8");

  // related: https://github.com/vercel/next.js/discussions/15453
  stream.pipe(res);

  // TODO: make this not manual (serverless functions can't see filesystem at runtime)
  const pages: SitemapItemLoose[] = [
    {
      // homepage
      url: "/",
      priority: 1.0,
      changefreq: EnumChangefreq.WEEKLY,
      lastmod: process.env.RELEASE_DATE, // timestamp frozen when a new build is deployed
    },
    { url: "/contact/" },
    { url: "/projects/", changefreq: EnumChangefreq.DAILY },
  ];

  // push notes separately and use their metadata
  const notes = await getAllNotes();
  notes.forEach((note) => {
    pages.push({
      url: `/notes/${note.slug}/`,
      // pull lastMod from front matter date
      lastmod: note.date,
    });
  });

  // set lastmod of /notes/ page to most recent post's date
  pages.push({
    url: `/notes/`,
    lastmod: notes[0].date,
  });

  // sort alphabetically by URL
  pages.sort((a, b) => (a.url < b.url ? -1 : 1));

  // translate array of all pages to sitemap's stream
  pages.forEach((page) => {
    stream.write(page);
  });

  stream.end();

  return {
    props: {},
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => null;
