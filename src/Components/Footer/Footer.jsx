import style from './Footer.module.css'
import logo from '../../assets/images/RayanBGLogo.png'
import { Fade } from 'react-awesome-reveal'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Footer() {

  const [token, setToken] = useState('')

    const location = useLocation();

    const { pathname } = location;
   

 useEffect(() => {
  
    if( localStorage.getItem('AdminToken') ){
        setToken(localStorage.getItem('AdminToken')) 
      }
 }, [])

  return <>

  {pathname === '/dashboard'? '' : <div className={style.footer}>
      <div className='container'>
        <Fade>
          <div className='row align-items-center justify-content-center g-4'>
            <div className='col-md-3'>
              <div className='d-flex justify-content-center flex-column'>
                <img src={logo} alt='logo' className='w-25' />
                <p className='text-light mt-2'>Learn online Quran Courses and Islamic Education From The Comfort Of Your Home With Al Rayan Academy, Your Spiritual Journey Starts Here!!!</p>
                <h5 className='text-center text-light mb-0'>Social Media</h5>
                <hr className='text-light mt-2' />

                <div className={style.socialIcons}>
                  <a href='https://www.facebook.com/resalah55' target='_blank' rel="noreferrer"> <i className={`${style.icon} fa-brands fa-facebook`} role='button'></i></a>
                  <a href='https://wa.me/+201557601371' target='_blank' rel="noreferrer"> <i className={`${style.icon} fa-brands fa-whatsapp`} role='button'></i></a>
                  <a href='https://m.me/resalah55' target='_blank' rel="noreferrer"><i className={`${style.icon} fa-brands fa-facebook-messenger`} role='button'></i></a>
                  <a href='https://www.instagram.com/risalah_academyy/?hl=en' target='_blank' rel="noreferrer"><i className={`${style.icon} fa-brands fa-instagram`} role='button'></i></a>

                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h3 className={style.textColor}>Join our Academy and enjoy your learn with us</h3>
                <Link to={'contact'} className={`${style.registerBtn}`}>Register Now</Link>
              </div>

            </div>

            <div className='col-md-3'>
              <div>
                <h3 className='text-light mt-4 mb-3'>Get in touch</h3>
                <div className={style.commIcons}>
                  <ul>
                    <li role='button'><i className="fa-solid fa-location-dot fa-xl me-2"></i> Nasr City, Cairo, Egypt</li>
                    <li role='button'><i className="fa-solid fa-envelope fa-xl me-2"></i> risalahakademy@gmail.com</li>
                    <li role='button'><i className="fa-solid fa-phone fa-xl me-2"></i> (+20) 1557601371</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <p className={`${style.textColor} text-white mb-0`}>Copyright 2024 © Al Rayan Academy</p>
      </div>

    </div> }

  </>
}
