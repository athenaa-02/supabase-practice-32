import React from 'react'
import { useContext } from 'react'
import { NameContext } from './Parent'



function GrandChild() {
    const name = useContext(NameContext)
  return (
    <div>{name}</div>
  )
}

export default GrandChild