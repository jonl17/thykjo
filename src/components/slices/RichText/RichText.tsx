import React from 'react'

type Props = {
  html: string
}

const RichText = ({ html }: Props) => {
  return (
    <div
      className='rich-text flex flex-wrap lg:mx-32 lg:mb-16'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText
