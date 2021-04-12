const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { accessToken, repositoryName } = require('./prismic.config')
const linkResolver = require('./src/prismic/linkResolver')
const htmlSerializer = require('./src/prismic/htmlSerializer')

const prismicPluginConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName,
    accessToken,
    linkResolver: () => doc => linkResolver(doc),
    htmlSerializer: ({ node, key, value }) => (
      type,
      element,
      content,
      children
    ) => htmlSerializer(element, content),
    schemas: {
      page: require('./src/prismic/schemas/page.json'),
      menu: require('./src/prismic/schemas/menu.json'),
      contact_information: require('./src/prismic/schemas/contact_information.json'),
      member: require('./src/prismic/schemas/member.json'),
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
