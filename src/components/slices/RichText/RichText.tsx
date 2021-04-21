import React from 'react'
import cn from 'classnames'
import { Fade } from 'react-reveal'

type Props = {
  html: string
  paragraphStyle: 'wide' | 'slim' | 'center'
  fontSize: 'normal' | 'large' | 'small'
}

const RichText = ({ html, paragraphStyle, fontSize }: Props) => {
  return (
    <Fade up distance='25px' duration={500}>
      <div
        className={cn(
          'rich-text lg:mb-8 max-w-4xl lg:pr-8',
          paragraphStyle,
          `rich-text--${fontSize}`
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Fade>
  )
}

export default RichText
