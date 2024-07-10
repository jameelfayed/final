import React from 'react'
import Home from './Pages/Home/Home'

import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import { Outlet } from 'react-router-dom'



function Root() {
  return (
    <>
    
     <Navbar/>    
     <Outlet/>
     <Fotter/>

     
    </>

  )
}

export default Root