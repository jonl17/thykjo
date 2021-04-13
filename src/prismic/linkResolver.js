const { defaultLanguage, defaultFrontpageTag } = require('../../prismic.config')

const linkResolver = doc => {
  const properties = doc._meta || doc

  const isFrontpage = doc.tags && doc.tags.indexOf(defaultFrontpageTag) !== -1

  if (isFrontpage) {
    return '/'
  } else if (doc.type === 'project') {
    return `/verkefni/${doc.uid}`
  } else return `/${doc.uid}`
}

module.exports = linkResolver
