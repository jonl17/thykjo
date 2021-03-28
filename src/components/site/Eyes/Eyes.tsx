import React, { useEffect } from 'react'
import { min, max } from './config'
import { EyeBalls } from './assets/EyeBalls'

const Eyes = () => {
  useEffect(() => {
    document.addEventListener('mousemove', e => {
      const mouseX = e.x
      const mouseY = e.y
    })
  }, [])

  return (
    <div className='container pt-20 mx-auto w-8/12 lg:w-4/12'>
      <EyeBalls />
    </div>
  )
}

export default Eyes
