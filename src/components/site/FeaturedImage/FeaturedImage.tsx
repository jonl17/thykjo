import React, { useState } from 'react'
import Icon from '@cmp/site/Icon'

type Props = {
  url: string
  alt: string | null
}

const FeaturedImage = ({ url, alt }: Props) => {
  const [visible, setVisible] = useState(true)

  return visible ? (
    <button
      onClick={() => setVisible(false)}
      className='absolute top-0 left-0 h-screen w-full focus:outline-none'
    >
      <div className='featured-image w-full grid place-items-center py-10 relative'>
        <Icon className='absolute right-64 top-12' type='close' />
        <img src={url} alt={alt ?? ''} />
      </div>
    </button>
  ) : null
}

export default FeaturedImage
