import React from 'react'
import Header from '../../component/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}

export default Layout
