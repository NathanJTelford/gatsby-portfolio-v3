module.exports = {
  siteMetadata: {
    title: "Portfolio v3",
    description: "Personal WebSite",
    // author: "@amanhimself",
    // siteUrl: `http://www.amanhimself.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Nathan's Portfolio",
        short_name: "Nathan telford",
        start_url: "/",
        background_color: "#497494",
        theme_color: "#497494",
        display: "minimal-ui",
        icons: [
          {
            src: `/src/assets/favicon.ico`,
            sizes: `32x32`,
            type: `image/ico`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
