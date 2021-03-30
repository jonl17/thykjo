import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    id
    uid
    url
    lang
    tags
    data {
      page_title {
        text
      }
      subtitle
      body {
        ... on PrismicPageBodyProgram {
          ...programSliceFragment
        }
      }
    }
  }

  fragment programSliceFragment on PrismicPageBodyProgram {
    slice_type
    primary {
      program_name
    }
  }
`
