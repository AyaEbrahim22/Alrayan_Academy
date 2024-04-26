import { Link } from 'react-router-dom'
import style from './Head.module.css'
import { Fade, Slide } from 'react-awesome-reveal'
export default function Head() {
 
 
 return <>
   <div className={style.headComponent}>
      <div>

        <h1 className={`${style.headTitle} mb-4`}><Fade cascade damping={0.04}> Learning the Qur'an and the Arabic language</Fade> </h1>
        <Fade>
          <p className={`${style.headpara} mt-4 mb-5`}>Top quality Quran courses online are available at times convenient for you.
          </p>
        </Fade>
        <Slide direction='up'>
          <div>
            <button className={`${style.contactBtn} btn me-3 fs-5`}>Book free trial</button>
            <Link className={`${style.aboutBtn} btn fs-5`} to={'about'}>Know about Us</Link>

          </div>
        </Slide>

      </div>
    </div>
  
  </>
}
