module.exports = {
  pathPrefix: "/zeyadetmanBlog",
  siteMetadata: {
    title: `Zeyad Etman`,
    description: `Zeyad Etman's Space on the internet.`,
    author: `@zeyadetman`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeyadetman`,
        short_name: `zeyadetman`,
        start_url: `/`,
        background_color: `#fdbd12`,
        theme_color: `#fdbd12`,
        display: `minimal-ui`,
        icon: `static/images/logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
