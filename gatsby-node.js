const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/components/templates/Page/Page.tsx')
  const result = await graphql(`
    {
      allPrismicPage {
        nodes {
          uid
          tags
          lang
          id
          url
        }
      }
    }
  `)
  result.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        ...node,
      },
    })
  })
}
