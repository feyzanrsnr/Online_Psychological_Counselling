import React from 'react'
import { useFormik } from 'formik'

function index() {
     const formik = useFormik({
      initialValues:{
        email:'',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null,2))
      }
    })
  return (
    <div className='container'>
    <div className='formContainer'>
    <form className='form' onSubmit={formik.handleSubmit}>

      <label htmlFor="name">Adınız Soyadınız</label>
      <input 
      id='namesurname'
      name='namesurmane'
      type='text'
      onChange={formik.handleSubmit}
      value={formik.values.email}
      />

      <label htmlFor="phone">TTelefon Numarası</label>
      <input 
      id='phone'
      name='phone'
      type='number'
      onChange={formik.handleSubmit}
      value={formik.values.email}
      />

      <label htmlFor="date"></label>
      <input 
      id='date'
      name='date'
      type='date'
      onChange={formik.handleSubmit}
      value={formik.values.email}
      />

      <label htmlFor="message">Mesajınız</label>
      <textarea name="message" id="message"></textarea>


      <button className='main-button' type='submit'>Randevu Talebi Oluştur</button>
    </form>
    </div>

    </div>
  )
}

export default index