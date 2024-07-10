import React, { Profiler } from 'react'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Root from './Root.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Pages/Login/Login.jsx';

import Profile from './Pages/Profile/Profile';
import NotFound from './Components/NotFound.jsx';
import Signup from './Pages/Sign up/Signup.jsx';
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <h2>not found</h2>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/profile',
        element:<Profile/>
      },
      {
        path: '/sinup',
        element:<Signup/>
      },


      {
        path: '*',
        element:<NotFound/>
      },
    ]
    

  },
 


]);


export default function () {
  return (
    <>
    
       <RouterProvider router={routers} />

    
    
    </>
  )
}
