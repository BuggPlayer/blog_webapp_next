module.exports = {
  siteUrl: "https://www.techblogging.in",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml", "/blog/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/admin",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://www.techblogging.in/server-sitemap.xml"],
  },
};
