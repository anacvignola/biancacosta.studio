module.exports = {
  siteMetadata: {
    title: `Bianca de Oliveira da Costa`,
    description: `Photographer`,
    author: `Bianca de Oliveira da Costa`,
    siteUrl: 'https://anacvignola.dev/',
    socialLinks: {
      instagram: 'https://www.instagram.com/b8fotografias/',
    },
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E5E9F0`,
        theme_color: `#E5E9F0`,
        display: `minimal-ui`,
        icon: `/src/assets/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
