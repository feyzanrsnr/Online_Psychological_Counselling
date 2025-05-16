import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import useBreakpoint from '../../hooks/useBreakpoint'
function TherapyPage() {
   const {isMobile, isTablet, isDesktop, width} = useBreakpoint() 
  return (
    <>
    {
      isMobile ? <Sidebar/> : <Navbar/> 
    }
    
    </>
  )
}

export default TherapyPage