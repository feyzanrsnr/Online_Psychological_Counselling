import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Randevu from '../../components/RandevuForm'
import { Link } from 'react-router'
import back from '../../assets/icons/chevron_left_24dp_33333_FILL0_wght400_GRAD0_opsz24.svg'
import Footer from '../../components/Footer'
import RandevuForm from '../../components/RandevuForm'

import useBreakpoint
 from '../../hooks/useBreakpoint'
function AppointmentPage() {
  const {isMobile, isTablet, isDesktop, width} = useBreakpoint() 
  return (
    <>
    {
      isMobile ? <Sidebar/> : <Navbar/> 
    }
    <RandevuForm/>
    <Footer/>
    </>
  )
}

export default AppointmentPage