import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
            Hi I am Vartika
        <Footer/>
    </>
  )
}

export default Layout