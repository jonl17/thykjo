import React from 'react'
import Program from './Program'

type SliceProps = {
  slice_type: string
  primary: any
  items: any[]
}

const SliceMapping = ({ slice }: { slice: SliceProps }) => {
  const sliceTypes: { [key: string]: React.ElementType } = {
    program: Program,
  }

  const Cmp = sliceTypes[slice.slice_type]

  if (!Cmp) return null

  return <Cmp {...slice} />
}

export default SliceMapping
