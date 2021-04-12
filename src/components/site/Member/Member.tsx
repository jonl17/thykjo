import { MemberInterface } from '@src/utils/resolvers'
import React from 'react'
import Img from 'gatsby-image'
import cn from 'classnames'

const Member = ({
  bio,
  name,
  portrait,
  role,
  website,
  idx,
}: MemberInterface & { idx: number }) => {
  const odd = idx % 2 !== 0

  return (
    <div className={cn('flex mb-10', odd ? 'flex-row-reverse' : 'flex-row')}>
      <div className='lg:w-7/12 lg:pr-5 grid place-content-center'>
        <h3>{name.text}</h3>
        <h4>{role}</h4>
        <div dangerouslySetInnerHTML={{ __html: bio.html }} />
        <p>{website.label}</p>
      </div>
      <div className='member__image py-5'>
        <img
          className={cn('h-full', odd ? 'float-right pr-10' : 'lg:-mr-14')}
          src={portrait.url}
        />
      </div>
    </div>
  )
}

export default Member
