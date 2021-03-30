import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import cn from 'classnames'

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

  const bg = pageContext.tags.find(tag => tag.includes('bg-'))

  return (
    <>
      <SEO {...meta} />
      <div className={cn('main-layout min-h-screen noise text-yellow_2', bg)}>
        {children}
      </div>
    </>
  )
}

export default MainLayout
