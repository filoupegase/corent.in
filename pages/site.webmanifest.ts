import { GetServerSideProps } from 'next';
import * as config from "../lib/config";


export const getServerSideProps: GetServerSideProps<Record<string, never>> = async (context) => {
  const { res } = context;

  // https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest
  res.setHeader("content-type", "application/manifest+json; charset=utf-8");
  // cache on edge for one week
  res.setHeader("cache-control", "public, max-age=0, s-maxage=604800, stale-while-revalidate");

  const manifest = {
    name: config.siteName
  };
  res.write(JSON.stringify(manifest));
  res.end();
  return {
    props: {}
  };
};

export default () => null;
