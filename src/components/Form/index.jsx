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

      <label htmlFor="name">Adınız</label>
      <input 
      id='name'
      name='name'
      type='text'
      onChange={formik.handleSubmit}
      value={formik.values.email}
      />

      <label htmlFor="surname">Soyadınız</label>
      <input 
      id='surname'
      name='surname'
      type='text'
      onChange={formik.handleSubmit}
      value={formik.values.email}
      />

      <label htmlFor="email">Email Address</label>
      <input 
      id='email'
      name='email'
      type='email'
      onChange={formik.handleSubmit}
      value={formik.values.email}
      />

      <label htmlFor="question">Sormak istediğiniz soru nedir?</label>
      <textarea name="question" id="question"></textarea>


      <button className='main-button' type='submit'>Gönder</button>
    </form>
    </div>

    </div>
  )
}

export default index