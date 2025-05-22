import React, { useState } from 'react'
import { Link } from 'react-router'
import {ReactComponent as CloseIcon} from '../../assets/icons/close_24dp_33333_FILL0_wght400_GRAD0_opsz24.svg'
import {ReactComponent as OpenIcon} from '../../assets/icons/menu_24dp_33333_FILL0_wght400_GRAD0_opsz24.svg'
import { FaInstagram } from "react-icons/fa";

function index() {

  const [isOpen, setIsOpen] = useState(true)
  
  return (
    <>
    {
      isOpen ? 
      <div className='sidebar'>

      <Link className='link-button' to="/">Anasayfaya Dön</Link>

      <CloseIcon onClick={() => setIsOpen(!isOpen)} className='close-icon'/>
      
      <Link className='main-button' 
      to="/expert">
        Uzmanımı Bul
      </Link>

      <Link className='main-button ' 
      to="/therapy">
        Bana Uygun Destek Türünü Bul
      </Link>

     <Link
      className='main-button ' 
      to="/appointment">
        Randevu Al
     </Link>
        
      <FaInstagram className='sidebar-icon '
      size={35} />
      
      </div>

    :

    <OpenIcon onClick={() => setIsOpen(!isOpen)} className='open-icon'/>
    
    }
    
    </>
  )
}

export default index

//