import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Main, Login, SignUp } from '../pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])

export default router
