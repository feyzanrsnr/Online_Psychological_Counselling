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
      <div>
        <button onClick={() => setIsOpen(!isOpen)}><CloseIcon className='close-icon'/></button>
      </div>
      <div> 
      <button className='link-button' ><Link to="/">Anasayfa</Link>
      </button>
      <FaInstagram size={35} />
      <button className='main-button'><Link to="/expert">Uzmanımı Bul</Link></button>
      <button className='main-button'><Link to="/therapy">Bana Uygun Destek Türünü Bul</Link></button>
      <button className='main-button'><Link to="/appointment">Randevu Al</Link></button>
      </div>
    </div> 
    :
    <button onClick={() => setIsOpen(!isOpen)}><OpenIcon className='open-icon'/></button>
    
    }
    
    </>
  )
}

export default index

//