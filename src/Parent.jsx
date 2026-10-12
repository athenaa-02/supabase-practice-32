import React from 'react'
import Child from './Child'
import { createContext } from 'react'


export const NameContext = createContext()



function Parent() {
  const user = {
    name:'natia',
    age: 24
  }

  return (
    <>
    <NameContext.Provider value={'natia'}>
        <Child user={user}></Child>
    </NameContext.Provider>
    
    </>
  )
}

export default Parent