module.exports = {
  siteMetadata: {
    title: "testwebsite",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-source-google-reviews`,
        options: {
      placeId: `ChIJaXfhmpr3t4kRKLQS0fY6Bgk`,
      apiKey: ``
    }
  }
  
]
};
