import React from 'react'
import cn from 'classnames'

type Props = {
  html: string
  paragraphStyle: 'wide' | 'slim' | 'center'
  fontSize: 'normal' | 'large' | 'small'
}

const RichText = ({ html, paragraphStyle, fontSize }: Props) => {
  return (
    <div
      className={cn(
        'rich-text lg:mb-8 max-w-4xl lg:pr-8',
        paragraphStyle,
        `rich-text--${fontSize}`
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText
