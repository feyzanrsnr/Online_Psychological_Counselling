import React, { useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Home from '../../components/Home'
import Experts from '../../components/Experts'
import Options from '../../components/Options'
import Faqs from '../../components/Faqs'
import Footer from '../../components/Footer'

import useBreakpoint from '../../hooks/useBreakpoint'

function HomePage() {

  const {isMobile, isTablet, isDesktop, width} = useBreakpoint() 

  
  return (
    <>
    {
      isMobile ? <Sidebar/> : <Navbar/> 
    }

    <Home/>
    <Experts/>
    <Options/>
    <Faqs/>
    <Footer/>
    </>
  )
}

export default HomePage