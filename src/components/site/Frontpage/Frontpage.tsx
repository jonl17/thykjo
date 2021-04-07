import React from 'react'
import Icon from '@cmp/site/Icon'
import ContactInformation from '@cmp/site/ContactInformation'

const Frontpage = () => {
  return (
    <div className='frontpage h-full lg:h-screen'>
      <div className='grid place-items-center grid-cols-1 grid-rows-3 lg:h-screen'>
        <Icon type='eyes' />
        <Icon className='lg:mb-16' type='logo' />
        <ContactInformation />
      </div>
    </div>
  )
}

export default Frontpage
