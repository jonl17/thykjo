const { PRISMIC_REPO_NAME, PRISMIC_ACCESS_TOKEN } = process.env

module.exports = {
  repositoryName: PRISMIC_REPO_NAME,
  accessToken: PRISMIC_ACCESS_TOKEN,
  defaultLanguage: 'is',
  langs: ['is'],
  defaultFrontpageTag: 'FRONTPAGE',
}
