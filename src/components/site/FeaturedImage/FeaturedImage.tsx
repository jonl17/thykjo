import React from 'react'

type Props = {
  url: string
  alt: string | null
}

const FeaturedImage = ({ url, alt }: Props) => {
  return (
    <div className='featured-image w-full'>
      <img src={url} alt={alt ?? ''} />
    </div>
  )
}

export default FeaturedImage
