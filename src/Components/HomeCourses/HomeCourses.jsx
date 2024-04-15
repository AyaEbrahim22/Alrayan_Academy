import style from './HomeCourses.module.css'
import quran from '../../assets/images/Quran.png'
import arabic from '../../assets/images/ArabicLogo.png'
import fiqh from '../../assets/images/fiqh.png'
import aqeedah from '../../assets/images/aqeedah.jpg'
import tajweed from '../../assets/images/tajweed3.png'
import hadith from '../../assets/images/hadith.png'
import { Fade } from 'react-awesome-reveal'


export default function HomeCourses() {


    return <>
        <div className={style.coursesComponent}>
            <div className='container'>
                <div className='position-relative'>
                    <Fade duration={3000}>  <h2 className='text-center pt-4 mb-5'>FEATURED COURSES</h2>
                  
                    <div className={style.headingCDesign}></div>
                    </Fade>
                </div>

                <Fade duration={3000}>
                <div className='row gx-4 gy-4 justify-content-between'>

    


                        <div className={`col-md-4`} role='button'>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={quran} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>QURAN</h4>
                                <p>you can learn how to memorise the Holy Qur’an and become a Hafiz/Hafiz of the Qur’an.</p>
                                <a href='#'><button className={`${style.detailsBtn} btn`}>Course Details</button></a>
                            </div>
                        </div>


                        <div className={`col-md-4`} role='button'>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={fiqh} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>FIQH</h4>
                                <p className='px-2'>FIQH provides clear guidance on how to lead a good and meaningful life in accordance with Islamic teachings.</p>
                                <a href='#'><button className={`${style.detailsBtn} btn`}>Course Details</button></a>
                            </div>
                        </div>

                        <div className={`col-md-4`} role='button'>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={aqeedah} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>AQEEDAH</h4>
                                <p className='px-2'>Learning the correct Islamic Aqeedah is mandatory for our lives and to determine our destiny in the hereafter. </p>
                                <a href='#'><button className={`${style.detailsBtn} btn`}>Course Details</button></a>
                            </div>
                        </div>

                        <div className={`col-md-4`} role='button'>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={tajweed} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>TAJWEED</h4>
                                <p className='px-2'>The study of reading Quran with Tajweed is of great importance and is a whole field by itself in our religion.</p>
                                <a href='#'><button className={`${style.detailsBtn} btn`}>Course Details</button></a>
                            </div>
                        </div>

                        <div className={`col-md-4`} role='button'>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={hadith} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>HADITH</h4>
                                <p className='px-1'>hadiths are among the sources through which they come to understand the practice of Muhammad and his ummah</p>
                                <a href='#'><button className={`${style.detailsBtn} btn`}>Course Details</button></a>
                            </div>
                        </div>

                        <div className={`col-md-4`} role='button'>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={arabic} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>ARABIC</h4>
                                <p>Knowledge of Arabic opens the door to vast resources of Islamic knowledge. It</p>
                                <a href='#'><button className={`${style.detailsBtn} btn`}>Course Details</button></a>
                            </div>
                        </div>

                        </div>
                    </Fade>
       
            </div>
        </div>

    </>
}
