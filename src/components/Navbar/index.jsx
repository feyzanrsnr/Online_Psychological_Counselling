import React from 'react'
import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa";

function index() {
  return (
    <nav className='navbar'>

      <div>
        <Link className='main-button' to="/expert">
        Uzmanımı Bul
        </Link>

        <Link className='main-button' to="/therapy">
        Bana Uygun Destek Türünü Bul
        </Link>

        <Link className='main-button' to="/appointment">
        Randevu Al</Link>
      </div>

      <div>
      <Link className='link-button' 
      to="/">
        Anasayfa
      </Link>
      
      <FaInstagram className='navbar-icon' 
      size={35} />
      
      </div>
    </nav>
  )
}

export default index