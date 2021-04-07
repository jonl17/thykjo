import React from 'react'
import { Logo, Eyes, Facebook, Instagram } from './svg'
import cn from 'classnames'

type IconType = 'logo' | 'eyes' | 'facebook' | 'instagram'
interface Props {
  type: IconType
  className?: string
}

const Icon = ({ type, className }: Props) => {
  const icons: { [key in IconType]: React.ElementType } = {
    logo: Logo,
    eyes: Eyes,
    facebook: Facebook,
    instagram: Instagram,
  }

  const IconSvg = icons[type]

  return <IconSvg className={cn('icon', className)} />
}

export default Icon
