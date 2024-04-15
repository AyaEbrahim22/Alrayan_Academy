import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'

export default function Layout() {
  
  
  return<>

  <Navbar/>
  
   {/* <Outlet></Outlet> */}

   <Home/>

   <Footer/>
   
  </>
}
