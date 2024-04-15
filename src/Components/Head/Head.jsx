import style from './Head.module.css'
import { Fade, Slide } from 'react-awesome-reveal'
export default function Head() {
 
 
 return <>
   <div className={style.headComponent}>
      <div>

        <h1 className='mb-4'><Fade cascade damping={0.04}> Learning the Qur'an and the Arabic language</Fade> </h1>
        <Fade>
          <p className='mt-4 mb-5'>Top quality Quran courses online are available at times convenient for you.
          </p>
        </Fade>
        <Slide direction='up'>
          <div>
            <button className={`${style.contactBtn} btn me-3`}>Contact Us</button>
            <button className={`${style.aboutBtn} btn`}>About Us</button>

          </div>
        </Slide>

      </div>
    </div>
  
  </>
}
