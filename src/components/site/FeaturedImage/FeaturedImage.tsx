import React, { useState } from 'react'
import Icon from '@cmp/site/Icon'
import cn from 'classnames'

type Props = {
  url: string
  alt: string | null
}

const FeaturedImage = ({ url, alt }: Props) => {
  const [visible, setVisible] = useState(true)

  return (
    <div
      className={cn(
        'featured-image grid place-items-center py-10 absolute top-0 left-0 h-screen w-full',
        {
          'featured-image--hide': !visible,
        }
      )}
    >
      <button
        onClick={() => setVisible(false)}
        className='transform hover:rotate-3 transition relative focus:outline-none'
      >
        <Icon className='absolute right-5 top-5 z-10' type='close' />
        <img src={url} alt={alt ?? ''} />
      </button>
    </div>
  )
}

export default FeaturedImage
