import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/Main/index'
import Login from '../pages/Login/index'
//import Error from 'components/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
