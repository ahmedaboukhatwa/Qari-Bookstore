import React, { createContext, Fragment } from 'react'
import Categories from './categories'
import Main from './main'
export default function Home() {
  return (
    <Fragment>
        <Main />
      <Categories/> 
    </Fragment>
  )
}
