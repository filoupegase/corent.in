import { SitemapStream, SitemapItemLoose, EnumChangefreq } from "sitemap";
import { GetServerSideProps } from 'next';
import { RELEASE_DATE, NOTES_DIR } from "../lib/config/constants";
import { baseUrl } from "../lib/config";


export const getServerSideProps: GetServerSideProps<Record<string, never>> = async (context) => {
  const { res } = context;
  const stream = new SitemapStream({ hostname: baseUrl });

  // cache on edge for 12 hours
  res.setHeader("cache-control", "public, max-age=0, s-maxage=43200, stale-while-revalidate");
  res.setHeader("content-type", "application/xml; charset=utf-8");

  // related: https://github.com/vercel/next.js/discussions/15453
  stream.pipe(res);

  const pages: SitemapItemLoose[] = [
    {
      url: "/",
      priority: 1.0,
      changefreq: EnumChangefreq.WEEKLY,
      lastmod: RELEASE_DATE, // timestamp frozen when a new build is deployed
    },
    { url: "/contact/" },
    { url: "/projects/", changefreq: EnumChangefreq.DAILY },
  ];

  /*// push notes separately and use their metadata
  const notes = await getAllNotes();
  notes.forEach((note) => {
    pages.push({
      url: `/${ NOTES_DIR }/${ note.slug }/`,
      // pull lastMod from front matter date
      lastmod: note.date,
    });
  });*/

  /*// set lastmod of /notes/ page to most recent post's date
  pages.push({
    url: `/${ NOTES_DIR }/`,
    lastmod: notes[0].date,
  });
*/

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

export default () => null;
