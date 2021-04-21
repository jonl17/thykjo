import React from 'react'
import cn from 'classnames'

type Props = {
  html: string
  paragraphStyle: 'wide' | 'slim' | 'center'
}

const RichText = ({ html, paragraphStyle }: Props) => {
  console.log(paragraphStyle)
  return (
    <div
      className={cn('rich-text lg:mb-16 max-w-4xl', paragraphStyle)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText
