import React from 'react'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import '@src/prismic/fragments/menu'
import { menuResolver, PageInterface } from '@src/utils/resolvers'
import cn from 'classnames'
import { useLocation } from '@reach/router'
import Icon from '@cmp/site/Icon'

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

  const active = pathname === page.url || pathname === page.url + '/'

  const isFrontpage = page.uid === 'frontpage'

  return (
    <div
      className={cn('noise menu-transition', page.bg, {
        'inactive-menu-item cursor-pointer': !active,
        'flex-1 cursor-auto': active,
      })}
      onClick={() => (active ? null : navigate(page.url))}
    >
      {active ? (
        children
      ) : (
        <Link to={page.url}>
          {isFrontpage ? (
            <Icon className='lg:ml-8 lg:mt-8' type='verticalEyes' />
          ) : (
            <h2 className='rotate'>{page.title}</h2>
          )}
        </Link>
      )}
    </div>
  )
}

const Menu: React.FC = ({ children }) => {
  const menu = useGetMenu()

  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
      {menu.pages.map(page => (
        <MenuItem key={page.id} page={page}>
          {children}
        </MenuItem>
      ))}
    </div>
  )
}

export default Menu
