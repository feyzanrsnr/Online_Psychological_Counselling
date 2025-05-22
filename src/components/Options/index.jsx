import React from 'react'
import icon1 from '../../assets/icons/appointment_6176567.png'
import icon2 from '../../assets/icons/conversation_2924464.png'
import icon3 from '../../assets/icons/info_943933.png'
import icon4 from '../../assets/icons/ask.png'
import icon5 from '../../assets/icons/hand_10304301.png'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll';

function index() {
  return (
    <section id='options' className='section'>
        <h3 className='section-title'>
            HİZMETLERİMİZ
        </h3>

        <div className='options'>

            <Link to="/appointment">
            <div className='option' >
                <img className='image' src={icon1} width={100} alt="icon" />
                
                <p>
                    RANDEVU AL
                </p>
            </div>
            </Link>

            <Link to="/expert">
            <div className='option' >
                <img className='image' src={icon2} width={100} alt="icon" />
                <p>
                    UZMANIMI BUL
                </p>
            </div>
            </Link>

            <ScrollLink to='faqs' smooth={true} duration={500}>
            <div className='option' >
                <img className='image' src={icon3} width={100} alt="icon" />
                <p>
                    BİLGİ AL
                </p>
            </div>
            </ScrollLink>

            <Link to="/question">
            <div className='option' >
                <img className='image' src={icon4} width={100} alt="icon" />
                <p>
                    SORU SOR
                </p>
            </div>
            </Link>

            <Link to="/question">
            <div className='option' >
                <img className='image' src={icon5} width={100} alt="icon" />
                <p>
                    BANA UYGUN DESTEK TÜRÜNÜ BUL
                </p>
            </div>
            </Link>
        </div>
    </section>
  )
}

export default index