import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function index() {
  const initialValues = {
      namesurname:"",
      email:"",
      question:"",
  };

  const validationSchema = Yup.object({
        namesurname: Yup.string().required("Zorunlu alan"),
        email: Yup.string().email("Geçersiz email").required("Zorunlu alan"),
        question: Yup.string().required("Zorunlu alan"),
    })
     
  return (
    <div className='container'>
    <div className='formContainer'>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    >
      <Form className='mainForm'>
      <div className='form'>

      <label 
      htmlFor="namesurname">Adınız Soyadınız</label>
      <Field 
      name='namesurname'
      type='text'
      />
      <ErrorMessage name="namesurname" component="div" className="error" />

      <label htmlFor="email">Email Adresiniz</label>
      <Field 
      name='email'
      type='email'
      />
      <ErrorMessage name="email" component="div" className="error" />

      <label 
      htmlFor="question">Sormak istediğiniz soru nedir?</label>
      <Field name="question" type='text'/>
      <ErrorMessage name="question" component="div" className="error" />

      <button className='main-button' type='submit'>Gönder</button>
    </div>
      </Form>
    </Formik>
    </div>

    </div>
  )
}

export default index