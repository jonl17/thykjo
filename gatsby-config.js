const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { accessToken, repositoryName } = require('./prismic.config')
const linkResolver = require('./src/prismic/linkResolver')

const prismicPluginConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName,
    accessToken,
    linkResolver: () => doc => linkResolver(doc),
    schemas: {
      page: require('./src/prismic/schemas/page.json'),
    },
    lang: '*',
  },
}

module.exports = {
  siteMetadata: {
    title: 'Þykjó',
    description: 'Þverfaglegt hönnunarteymi',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, '.'),
          '@src': path.resolve(__dirname, 'src'),
          '@cmp': path.resolve(__dirname, 'src/components'),
        },
        extensions: [`ts`, `tsx`],
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(
          './src/components/layouts/Main/MainLayout.tsx'
        ),
      },
    },
    'gatsby-plugin-postcss',
    prismicPluginConfig,
  ],
}
