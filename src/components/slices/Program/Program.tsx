import React from 'react'
import Eyes from '@cmp/site/Eyes'
import Frontpage from '@cmp/site/Frontpage'

type Props = {
  primary: {
    program_name: string
  }
}

const Program = ({ primary: { program_name: name } }: Props) => {
  const types: { [key: string]: React.ElementType } = {
    Eyes,
    Frontpage,
  }

  const SelectedProgram = types[name]

  if (!SelectedProgram) return null

  return <SelectedProgram />
}

export default Program
