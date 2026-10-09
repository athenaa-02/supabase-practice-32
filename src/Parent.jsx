import React from 'react'
import Child from './Child'
import { createContext } from 'react'


export const NameContext = createContext()



function Parent() {
  return (
    <>
    <NameContext.Provider value={'natia'}>
        <Child></Child>
    </NameContext.Provider>
    
    </>
  )
}

export default Parent