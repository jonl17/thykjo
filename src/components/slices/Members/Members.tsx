import { MemberInterface } from '@src/utils/resolvers'
import React from 'react'
import Member from '@cmp/site/Member'

interface Props {
  title: {
    text: string
    html: string
  }
  members: MemberInterface[]
}

const Members = ({ title, members }: Props) => {
  return (
    <div>
      <h2 className='text-center'>{title.text}</h2>
      <div className='my-16 lg:pl-16'>
        {members.map((member, idx) => (
          <Member key={idx} {...member} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export default Members
