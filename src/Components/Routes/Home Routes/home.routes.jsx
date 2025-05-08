import {Routes, Route} from 'react-router-dom';
import Directory from '../../Directory/directory.component';

import React from 'react'

function HomeRoute() {
  return (
    <Routes>
        <Route path='/' element={<Directory />}/>
    </Routes>
  )
}

export default HomeRoute;