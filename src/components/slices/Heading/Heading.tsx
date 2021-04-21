import React from 'react'

type Props = {
  heading: string
}

const Heading = ({ heading }: Props) => (
  <h1 className='mb-8 lg:mb-16 lg:-ml-16'>{heading}</h1>
)

export default Heading
