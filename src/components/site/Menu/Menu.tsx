import React, { useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import '@src/prismic/fragments/menu'
import { menuResolver, PageInterface } from '@src/utils/resolvers'
import cn from 'classnames'
import { useLocation } from '@reach/router'

const useGetMenu = () => {
  const data = useStaticQuery(graphql`
    {
      prismicMenu(tags: { in: "MAIN_MENU" }) {
        ...menuFragmentFull
      }
    }
  `)

  return menuResolver(data.prismicMenu)
}

const MenuItem: React.FC<{ page: PageInterface }> = ({ page, children }) => {
  const { pathname } = useLocation()

  const active = pathname === page.url

  return (
    <Link
      activeClassName='flex-1 pointer-events-none'
      className={cn('noise transition-all bg-yellow', {
        'inactive-menu-item': !active,
        'bg-red': page.uid === 'verkefni',
        'bg-dark-blue': page.uid === 'thykjo',
      })}
      to={page.url}
    >
      {active ? <div>{children}</div> : <h2 className='rotate'>{page.uid}</h2>}
    </Link>
  )
}

const Menu: React.FC = ({ children }) => {
  const menu = useGetMenu()

  return (
    <div className='flex min-h-screen'>
      {menu.pages.map(page => (
        <MenuItem key={page.id} page={page}>
          {children}
        </MenuItem>
      ))}
    </div>
  )
}

export default Menu
