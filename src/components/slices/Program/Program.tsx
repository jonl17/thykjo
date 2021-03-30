import React from 'react'
import Eyes from '@cmp/site/Eyes'

type Props = {
  primary: {
    program_name: string
  }
}

const Program = ({ primary: { program_name: name } }: Props) => {
  const types: { [key: string]: React.ElementType } = {
    Eyes,
  }

  const P = types[name]

  if (!P) return null

  return <P />
}

export default Program
