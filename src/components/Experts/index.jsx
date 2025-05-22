import React from 'react'
import avatar from '../../assets/images/mid-shot-woman-therapist-with-clipboard.jpg'

function index() {
  return (
    <section id='experts' className='section'>
      
        <h3 className='section-title'>UZMANLARIMIZ</h3>

        <div className='experts'>

          <div className='expert'>
            <div className='avatar'>
              <img src={avatar} alt="avatar" />
            </div>

             <div>
              <p className='title'>Süeda İNAN</p>
            <ul>
              <li>Aile Danışmanlığı</li>
              <li>Kariyer Danışmanlığı</li>
              <li>Manevi Danışmanlık</li>
            </ul>
             </div>
          </div>

          <div className='expert'>
            <div className='avatar'>
              <img src={avatar} alt="avatar"/>
            </div>
            
            <div>
               <p className='title'>Süeda İNAN</p>
            <ul>
              <li>Aile Danışmanlığı</li>
              <li>Kariyer Danışmanlığı</li>
              <li>Manevi Danışmanlık</li>
            </ul>
            </div>
          </div>

          

      </div>
    </section>
  )
}

export default index