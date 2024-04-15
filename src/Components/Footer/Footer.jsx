import style from './Footer.module.css'
import logo from '../../assets/images/logo.png'
import { Fade } from 'react-awesome-reveal'


export default function Footer() {
  
  
  return <>

  <div className={style.footer}>
    <div className='container'>
      <Fade>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-3'>
          <div className='d-flex justify-content-center flex-column'>
              <img src={logo} alt='logo' className='w-25'/>
              <p className='text-light mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque adipisci quam veniam et vero ducimus corrupti explicabo nam. Quis?</p>
              <h5 className='text-center text-light mb-0'>Social Media</h5>
              <hr className='text-light mt-2'/>

              <div className={style.socialIcons}>
              <i className={`${style.icon} fa-brands fa-facebook`} role='button'></i>
              <i className={`${style.icon} fa-brands fa-whatsapp`} role='button'></i>
              <i className={`${style.icon} fa-brands fa-facebook-messenger`} role='button'></i>
              <i className={`${style.icon} fa-brands fa-youtube`} role='button'></i>
 
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className={style.textColor}>Join our Academy and enjoy your learn with us</h3>
            <button className={`${style.registerBtn} btn`}>Register Now</button>
            </div>
 
          </div>

          <div className='col-md-3'>
          <div>
              <h3 className='text-light mt-4 mb-3'>Get in touch</h3>
              <div className={style.commIcons}>
                <ul>
                  <li role='button'><i className="fa-brands fa-google fa-xl me-2"></i> Lorem ipsum dolor sit amet.</li>
                  <li role='button'><i className="fa-solid fa-envelope fa-xl me-2"></i> lorem@gmail.com</li>
                  <li role='button'><i className="fa-solid fa-phone fa-xl me-2"></i> +5158488451</li>
  
                </ul>
              </div>
            </div>
          </div>
        </div>
        </Fade>

        <p className={`${style.textColor} text-white mb-0`}>Copyright 2024 © RISALAH Academy</p>
    </div>

  </div>


  </>
}
