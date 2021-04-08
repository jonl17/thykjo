import React from 'react'

type Props = {
  url: string
  alt: string | null
}

const FeaturedImage = ({ url, alt }: Props) => {
  return (
    <div className='featured-image w-full grid place-items-center py-10'>
      <img src={url} alt={alt ?? ''} />
    </div>
  )
}

export default FeaturedImage
