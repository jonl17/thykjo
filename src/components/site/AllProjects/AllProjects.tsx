import React, { useState } from 'react'
import { useGetAllProjects } from '@hooks/project'
import { Link } from 'gatsby'
import { ProjectInterface } from '@src/utils/resolvers'
import cn from 'classnames'

const SingleProject = ({
  url,
  featuredImage,
  title,
  type,
  shortDescription,
}: ProjectInterface) => {
  const [tilt, setTilt] = useState(false)

  return (
    <Link
      className='project-grid-width'
      to={url}
      onMouseEnter={() => setTilt(true)}
      onMouseLeave={() => setTilt(false)}
    >
      <img
        alt={featuredImage.alt}
        src={featuredImage.url}
        className={cn('transition', tilt ? 'transform rotate-3 ' : null)}
      />
      <div className='mt-5'>
        <h3 className='mb-2'>{title.text}</h3>
        <h4 className='mb-5'>{type}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: shortDescription.html,
          }}
        />
      </div>
    </Link>
  )
}

const AllProjects = () => {
  const projects = useGetAllProjects()

  return (
    <div className='grid lg:grid-cols-2 mt-8 gap-10 place-items-center '>
      {projects.map(project => (
        <SingleProject key={project.url} {...project} />
      ))}
    </div>
  )
}

export default AllProjects
