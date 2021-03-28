const path = require('path')

module.exports = {
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
  ],
}
