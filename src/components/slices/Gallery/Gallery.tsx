import React, { useEffect, useState } from 'react'
import { Image } from '@src/utils/resolvers'

interface GalleryProps {
  images: {
    smaller: Image
    bigger: Image
    caption: {
      text: string
      html: string
    }
  }[]
}

const ImageModal: React.FC = ({ children }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  return <>{children}</>
}

const Gallery = ({ images }: GalleryProps) => {
  const [modal, setModal] = useState<{
    bigger: Image
    smaller: Image
    caption: { html: string; text: string }
  } | null>(null)

  return (
    <>
      {modal && (
        <ImageModal>
          <button
            onClick={() => setModal(null)}
            className='fixed top-0 left-0 h-screen w-full grid place-content-center bg-black m-auto'
          >
            <div className='modal-width'>
              <img
                className='mb-5'
                src={modal.bigger.url}
                alt={modal.bigger.alt}
              />
              <div dangerouslySetInnerHTML={{ __html: modal.caption.html }} />
            </div>
          </button>
        </ImageModal>
      )}
      <div className='grid gallery place-content-center gap-5 mb-32'>
        {images.map(image => (
          <button
            onClick={() => setModal(image)}
            className='focus:outline-none'
            key={image.smaller.url}
          >
            <img src={image.smaller.url} alt={image.smaller.alt} />
          </button>
        ))}
      </div>
    </>
  )
}

export default Gallery
