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
      featured_image {
        alt
        url
      }
      body {
        ... on PrismicPageBodyProgram {
          ...programSliceFragment
        }
        ... on PrismicPageBodyRichText {
          ...richTextSliceFragment
        }
      }
    }
  }

  fragment richTextSliceFragment on PrismicPageBodyRichText {
    slice_type
    primary {
      text {
        html
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
