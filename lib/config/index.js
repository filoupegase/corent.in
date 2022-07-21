// @ts-check
// do not convert to ESM and/or TS -- this needs to be imported in CJS files like next.config.js too
module.exports = {
  siteName: 'Corentin Loison',
  siteDomain: 'coco',
  siteLocale: 'fre-FR',
  timeZone: 'FR, FRA',
  baseUrl:
    process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && process.env.NEXT_PUBLIC_VERCEL_URL !== undefined
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.IS_DEV_SERVER === 'true'
        ? `http://localhost:${process.env.NEXT_DEV_PORT}`
        : '', // fallback to production URL
  onionDomain: '',
  shortDescription: 'Front-End Web Developer in Paris',
  longDescription:
    'Hi there! I\'m a frontend web developer based in Paris',
  license: 'Creative Commons Attribution 4.0 International',
  licenseAbbr: 'CC-BY-4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  copyrightYearStart: 2001,
  githubRepo: 'filoupegase/coco.io',
  verifyGoogle: '',
  verifyBing: '',
  fathomSiteId: '',
  webmentionId: '',
  giscusConfig: {
    // https://github.com/giscus/giscus-component/tree/main/packages/react#readme
    repo: '',
    repoId: '',
    category: '',
    categoryId: ''
  },
  // Me info
  authorName: 'Coco',
  authorEmail: '',
  authorSocial: {
    github: 'filoupegase',
    twitter: '',
    facebook: '',
    keybase: '',
    medium: '',
    linkedin: '',
    instagram: ''
  }
};
