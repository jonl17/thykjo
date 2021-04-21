import React from 'react'
import { graphql } from 'gatsby'
import '@src/prismic/fragments/page'
import { pageResolver } from '@src/utils/resolvers'
import Head from '@cmp/site/Head'
import SliceMapping from '@cmp/slices/sliceMapping'
import cn from 'classnames'
import FeaturedImage from '@src/components/site/FeaturedImage'

const Page = ({ data }: { data: any }) => {
  const page = pageResolver(data.prismicPage)

  return (
    <div
      className={cn(
        'page h-full lg:min-h-screen max-w-6xl m-auto relative',
        page.uid === 'frontpage' ? 'text-black' : 'text-yellow-2 mb-16'
      )}
    >
      {page.title && <Head title={page.title} description={page.subtitle} />}
      {page.featuredImage.url && <FeaturedImage {...page.featuredImage} />}
      <div className='flex flex-wrap lg:pl-16'>
        {page.body.map((slice, i) => (
          <SliceMapping key={i} slice={slice} />
        ))}
      </div>
    </div>
  )
}

export default Page

export const query = graphql`
  query($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragmentFull
    }
  }
`
