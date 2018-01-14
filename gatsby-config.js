module.exports = {
  siteMetadata: {
    title: 'Year of the Challenge Gatsby Blog',
    description: 'Travel blog',
    siteUrl: 'http://www.yearofthechallenge.com/'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
  ],
};
