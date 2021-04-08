import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import Menu from '@cmp/site/Menu'
import FeaturedImage from '@cmp/site/FeaturedImage'

type MetaProps = {
  title: string
  description: string
}

export type PageProps = {
  id: string
  uid: string
  url: string
  tags: string[]
}

const SEO = ({ title, description }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}

const MainLayout: React.FC<{ pageContext: PageProps }> = ({
  children,
  pageContext,
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const meta: MetaProps = data.site.siteMetadata

  console.log(pageContext)

  return (
    <>
      <SEO {...meta} />
      <div className='main-layout'>
        <Menu>{children}</Menu>
      </div>
    </>
  )
}

export default MainLayout
