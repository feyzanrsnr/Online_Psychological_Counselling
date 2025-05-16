import React from 'react'
import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa";

function index() {
  return (
    <nav className='navbar'>
      <div>
        <button className='main-button'><Link to="/expert">Uzmanımı Bul</Link></button>
        <button className='main-button'><Link to="/therapy">Bana Uygun Destek Türünü Bul</Link></button>
        <button className='main-button'><Link to="/appointment">Randevu Al</Link></button>
      </div>

      <div>
      <FaInstagram size={35} />
      <button className='link-button' ><Link to="/">Anasayfa</Link>
      </button>
      </div>
    </nav>
  )
}

export default index