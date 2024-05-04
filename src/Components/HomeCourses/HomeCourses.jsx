import style from './HomeCourses.module.css'
import quran from '../../assets/images/Quran.png'
import arabic from '../../assets/images/ArabicLogo.png'
import fiqh from '../../assets/images/fiqh.png'
import aqeedah from '../../assets/images/aqeedah.jpg'
import tajweed from '../../assets/images/tajweed.png'
import hadith from '../../assets/images/hadith.png'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

export default function HomeCourses() {

    return <>
        <div className={style.coursesComponent}>
            <div className='container'>
                <div className='position-relative'>
                    <Fade duration={1000}>
                        <h2 className='text-center pt-4 mb-5'>FEATURED COURSES</h2>
                        <div className={style.headingCDesign}></div>
                    </Fade>
                </div>

                <div className='row gx-4 gy-4 justify-content-between'>


                    <div className={`col-md-4`} role='button'>
                        <Fade duration={2000}>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={quran} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>Quran</h4>
                                <p className='mb-4'>you can learn how to memorise the Holy Qur’an and become a Hafiz/Hafiz of the Qur’an.</p>
                                <Link to={'demo'} className={`${style.bookBtn}`}>Book a trial</Link>
                            </div>
                        </Fade>
                    </div>


                    <div className={`col-md-4`} role='button'>
                        <Fade duration={2000}>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={fiqh} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>Fiqh</h4>
                                <p className='px-2 mb-4'>FIQH provides clear guidance on how to lead a good and meaningful life in accordance with Islamic teachings.</p>
                                <Link to={'demo'} className={`${style.bookBtn}`}>Book a trial</Link>
                            </div>
                        </Fade>
                    </div>

                    <div className={`col-md-4`} role='button'>
                        <Fade duration={2000}>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={aqeedah} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>Aqeedah</h4>
                                <p className='px-2 mb-4'>Learning the correct Islamic Aqeedah is mandatory for our lives and to determine our destiny in the hereafter. </p>
                                <Link to={'demo'} className={`${style.bookBtn}`}>Book a trial</Link>
                            </div>
                        </Fade>
                    </div>

                    <div className={`col-md-4`} role='button'>
                        <Fade duration={2000}>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={tajweed} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>Tajweed</h4>
                                <p className='px-2 mb-4'>The study of reading Quran with Tajweed is of great importance and is a whole field by itself in our religion.</p>
                                <Link to={'demo'} className={`${style.bookBtn}`}>Book a trial</Link>
                            </div>
                        </Fade>

                    </div>

                    <div className={`col-md-4`} role='button'>
                        <Fade duration={2000}>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={hadith} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>Hadith</h4>
                                <p className='px-1 mb-4'>hadiths are among the sources through which they come to understand the practice of Muhammad and his ummah</p>
                                <Link to={'demo'} className={`${style.bookBtn}`}>Book a trial</Link>
                            </div>
                        </Fade>

                    </div>

                    <div className={`col-md-4`} role='button'>
                        <Fade duration={2000}>
                            <div className={`${style.courseCard} text-center`}>
                                <img src={arabic} alt='Books Icon' className='w-50' />
                                <h4 className='mt-3'>Arabic</h4>
                                <p className='mb-4'>Knowledge of Arabic opens the door to vast resources of Islamic knowledge. It</p>
                                <Link to={'demo'} className={`${style.bookBtn}`}>Book a trial</Link>
                            </div>
                        </Fade>

                    </div>

                </div>

            </div>
        </div>

    </>
}


