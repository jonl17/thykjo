import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment projectFragmentFull on PrismicProject {
    id
    uid
    url
    tags
    lang
    data {
      title {
        text
        html
      }
      featured_image {
        alt
        url
      }
      short_description {
        text
        html
      }
      type
      body {
        ... on PrismicProjectBodyRichText {
          ...projectRichTextSlice
        }
      }
    }
  }

  fragment projectRichTextSlice on PrismicProjectBodyRichText {
    slice_type
    primary {
      text {
        html
        text
      }
    }
  }
`
