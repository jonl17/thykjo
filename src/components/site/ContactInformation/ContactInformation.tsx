import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '@src/prismic/fragments/contactInformation'
import { contactInformationResolver } from '@src/utils/resolvers'
import Icon from '@cmp/site/Icon'

const ContactInformation = () => {
  const data = useStaticQuery(graphql`
    {
      prismicContactInformation {
        ...contactInformationFragment
      }
    }
  `)

  const information = contactInformationResolver(data.prismicContactInformation)

  return (
    <div className='contact-information'>
      <div className='grid grid-cols-2 place-items-center mb-2'>
        {information.socialMedia.map(item => (
          <a key={item.url} href={item.url} target='_blank'>
            <Icon type={item.platform} />
          </a>
        ))}
      </div>
      <p>{information.email}</p>
    </div>
  )
}

export default ContactInformation
