import React from 'react'
import { graphql } from 'gatsby'
import '@src/prismic/fragments/page'
import { pageResolver } from '@src/utils/resolvers'
import Head from '@cmp/site/Head'
import SliceMapping from '@cmp/slices/sliceMapping'

const Page = ({ data }: { data: any }) => {
  const page = pageResolver(data.prismicPage)
  return (
    <>
      <div className='text-yellow-2'>
        <Head title={page.title} description={page.subtitle} />
        {page.body.map((slice, i) => (
          <SliceMapping key={i} slice={slice} />
        ))}
      </div>
    </>
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
