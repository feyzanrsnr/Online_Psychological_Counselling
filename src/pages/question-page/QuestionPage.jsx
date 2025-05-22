import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Form from '../../components/Form'
import { Link } from 'react-router'
import back from '../../assets/icons/chevron_left_24dp_33333_FILL0_wght400_GRAD0_opsz24.svg'

import useBreakpoint from '../../hooks/useBreakpoint'

function QuestionPage() {
    const {isMobile, isTablet, isDesktop, width} = useBreakpoint() 

  return (
    <>
    {
      isMobile ? <Sidebar/> : <Navbar/> 
    }
    <Form/>
    <Link to='/'><img src={back}/>Geri dön</Link>
    </>
  )
}

export default QuestionPage