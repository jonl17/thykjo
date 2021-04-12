import React from 'react'
import Program from './Program'
import RichText from './RichText'
import Members from './Members'
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
      }
    case 'members':
      return {
        title: slice.primary.title,
        members: slice.items.map((item: any) =>
          memberResolver(item.member.document)
        ),
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
  }

  const Cmp = sliceTypes[slice.slice_type]

  console.log(slice.slice_type)

  const props = findProps(slice)

  if (!Cmp) return null

  return <Cmp {...props} />
}

export default SliceMapping
