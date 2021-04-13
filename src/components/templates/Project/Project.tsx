import React from 'react'
import { graphql } from 'gatsby'
import '@src/prismic/fragments/project'
import { projectResolver } from '@src/utils/resolvers'
import Head from '@cmp/site/Head'
import cn from 'classnames'
import SliceMapping from '@cmp/slices/sliceMapping'
import FeaturedImage from '@src/components/site/FeaturedImage'

const Project = ({ data }: { data: any }) => {
  const project = projectResolver(data.prismicProject)

  return (
    <div
      className={cn('page h-full lg:min-h-screen max-w-6xl m-auto relative')}
    >
      <Head title={project.title.text} description={project.type} />
      <FeaturedImage {...project.featuredImage} />
      {project.body.map((slice, i) => (
        <SliceMapping key={i} slice={slice} />
      ))}
    </div>
  )
}

export default Project

export const query = graphql`
  query($id: String) {
    prismicProject(id: { eq: $id }) {
      ...projectFragmentFull
    }
  }
`
