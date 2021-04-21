import React from 'react'
import Program from './Program'
import RichText from './RichText'
import Members from './Members'
import Gallery from './Gallery'
import Heading from './Heading'
import { memberResolver } from '@src/utils/resolvers'

type SliceProps = {
  slice_type: string
  primary: any
  items: any[]
}

const findProps = (slice: any) => {
  switch (slice.slice_type) {
    case 'program':
      return {
        programName: slice.primary.program_name,
      }
    case 'rich_text':
      return {
        html: slice.primary.text.html,
        paragraphStyle: slice.primary.paragraph_style,
        fontSize: slice.primary.font_size,
      }
    case 'members':
      return {
        title: slice.primary.title,
        members: slice.items.map((item: any) =>
          memberResolver(item.member.document)
        ),
      }
    case 'gallery':
      return {
        images: slice.items.map((item: any) => ({
          smaller: item.image,
          bigger: item.image.thumbnails.bigger,
          caption: item.caption,
        })),
      }
    case 'heading':
      return {
        heading: slice.primary.heading.text,
      }
    default:
      return slice
  }
}

const SliceMapping = ({ slice }: { slice: SliceProps }) => {
  const sliceTypes: { [key: string]: React.ElementType } = {
    program: Program,
    rich_text: RichText,
    members: Members,
    gallery: Gallery,
    heading: Heading,
  }

  const Cmp = sliceTypes[slice.slice_type]

  const props = findProps(slice)

  if (!Cmp) return null

  return <Cmp {...props} />
}

export default SliceMapping
