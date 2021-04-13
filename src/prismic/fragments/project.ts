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
        thumbnails {
          bigger {
            url
            alt
          }
        }
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
        ... on PrismicProjectBodyGallery {
          ...projectGallerySlice
        }
      }
    }
  }

  fragment projectGallerySlice on PrismicProjectBodyGallery {
    slice_type
    items {
      image {
        alt
        url
        thumbnails {
          bigger {
            alt
            url
          }
        }
      }
      caption {
        text
        html
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
