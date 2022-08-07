import React, { Fragment } from 'react';
import Search from './search';
import Recommended from './recommended';
export default function Main() {
  return (
    <Fragment>
        <Search/>
        <Recommended/>
    </Fragment>
  )
}

