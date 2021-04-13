import { ProjectInterface, projectResolver } from '@src/utils/resolvers'
import { graphql, useStaticQuery } from 'gatsby'
import '@src/prismic/fragments/project'

// all project related hooks

const useGetAllProjects = (): ProjectInterface[] => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProject {
        nodes {
          ...projectFragmentFull
        }
      }
    }
  `)

  return data.allPrismicProject.nodes.map((node: unknown) =>
    projectResolver(node)
  )
}

export { useGetAllProjects }
