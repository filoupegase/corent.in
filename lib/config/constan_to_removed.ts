const constants = {
  // Site info
  siteName: "Corentin",
  siteDomain: "corent-in.vercel.app",
  siteLocale: "en-US",
  baseUrl:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" && process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`,
  timeZone: "America/New_York", // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
  onionDomain: "",
  shortDescription: "Front-End Web Developer in Paris",
  longDescription: "Hi there! I'm a frontend web developer based in Paris",
  license: "Creative Commons Attribution 4.0 International",
  licenseAbbr: "CC-BY-4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  copyrightYearStart: 2001,
  githubRepo: "filoupegase/corent.in",

  // Me info
  authorName: "Corentin",
  authorEmail: "corentindevjs@gmail.com",
  authorSocial: {
    github: "filoupegase",
    twitter: "",
    facebook: "",
    keybase: "",
    medium: "",
    linkedin: "",
    instagram: "",
    mastodon: "",
    bluesky: "",
  },
};

export default constants;
