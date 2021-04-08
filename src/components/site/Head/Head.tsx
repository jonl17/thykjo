import React from 'react'

type Props = {
  title: string
  description: string
}

const Head = ({ title, description }: Props) => {
  return (
    <div className='container mx-auto text-center flex flex-col justify-end h-32 lg:h-32'>
      <h2 className='mb-2'>{title}</h2>
      <h4>{description}</h4>
    </div>
  )
}

export default Head
