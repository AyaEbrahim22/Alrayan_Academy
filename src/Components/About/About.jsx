import style from './About.module.css'
import aboutImg1 from '../../assets/images/AboutImg1.png'
import aboutImg2 from '../../assets/images/AboutImg2.png'
import img1 from '../../assets/images/Qiraat Icon.png'
import img2 from '../../assets/images/Memorize Icon.png'
import img3 from '../../assets/images/Tafseer Icon.png'
import img4 from '../../assets/images/arabic Language Icon.png'
import img5 from '../../assets/images/Hadith Icon.png'
import img6 from '../../assets/images/Fiqh Icon.png'
import img7 from '../../assets/images/Arabic Grammer Icon.png'
import img8 from '../../assets/images/Ijaz icon.png'
import img9 from '../../assets/images/Tajweed Icon.png'
import img10 from '../../assets/images/Kids Icon.png'
import img11 from '../../assets/images/Quran Kids Icon.png'
import img12 from '../../assets/images/Islamic Icon.png'

import CountUp from 'react-countup';
import { Link } from 'react-router-dom'

export default function About() {


  return <>
    <div className={style.aboutComponent}>

      <div className={style.section1}>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-md-6'>
              <div>
                <h2>About <span>Us</span></h2>
                <h5 className={style.belowTitle}>‘’Leading You To The Eternal Benefits’’</h5>
                <p>Our company is passionate about assisting students in their efforts to learn the Quran in different languages.
                  We provide online <span>Quran</span>, <span> Arabic </span> and <span>Islamic courses</span> that are accessible, reasonable, and meet the needs of students across the world.
                  Our team of qualified Quran teachers is excellently delivering online lessons in innovative and interesting ways.
                  They are striving to make the Quran learning easier for students of all ages and backgrounds.
                </p>
                <Link to={'contact'} className={`${style.contactBtn}`}>Contact us</Link>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <img src={aboutImg1} alt='about img' className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.section2}>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-md-3'>
              <div className='text-center'>
                <h3 className='fw-bold h1'><CountUp start={0} end={10} />+</h3>
                <p className='text-light'>YEARS IN INDUSTRY</p>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='text-center'>
                <h3 className='fw-bold h1'> <CountUp start={2000} end={3258} />+</h3>
                <p className='text-light'>REGISTERED STUDENTS</p>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='text-center'>
                <h3 className='fw-bold h1'> <CountUp start={100} end={196} />+</h3>

                <p className='text-light'>QURAN TUTORS AVAILABLE</p>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='text-center'>
                <h3 className='fw-bold h1'> <CountUp start={9000} end={9453} />+</h3>
                <p className='text-light'>SESSIONS COMPLETED</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={style.section3}>
        <div className='container'>
          <div className='row align-items-center justify-content center g-4'>
            <div className='col-md-6'>
              <div>
                <img src={aboutImg2} alt='about img' className='w-100' />
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <h2>Our <span>History</span></h2>
                <h5 className={style.belowTitle}>‘’Small Efforts Turn Into Commendable Outputs’’</h5>
                <p>A few years ago, a small group of dedicated individuals started a journey to make Quranic knowledge accessible to people around the globe.
                  They wanted to create an online platform that transcended language barriers, enabling learners from diverse backgrounds to connect with Quran tutors to learn more about reading the Quran.
                </p>
                <p>
                  With this noble purpose, eQuranekareem started to assemble a team of expert Quran tutors from different cultures and language backgrounds, including English and Arabic to provide online Quran teaching worldwide.
                  We believe there shouldn’t be any barriers when it comes to seeking the beauty and wisdom of the Quran.
                </p>
                <p>
                  Through our dedication and commitment, our virtual platform was able to find experts for Quran Recitation online and make easy lessons for students to learn tajweed online. They are the pillars of our company. We are assuring quality education for our learners and especially presenting classes for learning Quran for beginners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container w-100 d-flex align-items-center justify-content-center'>
        <div className={style.section4}>
          <div>
            <div className={style.topPart}>
              <h2>What We <span> Offer?</span></h2>
              <p>We provide <span> online Quran classes </span>for kids and adults from beginner to expert level. Our Quran academy courses are easy and understandable for kids, young adults and older. In addition, our tutors enrich the kids with knowledge while learning Quran online.</p>
              <p><span>We aim to provide the top class quran education online to our students.</span></p>
              <p>You may want to learn Quran and Arabic online to gain the blessings of Allah and become closer to Him. Therefore, learn Quran online with Tajweed without caring about age boundaries.</p>
            </div>
            <div className='row mt-3 g-4'>
              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img1} alt='' className='w-50' />
                  <h5>Qira'at</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img2} alt='' className='w-50' />
                  <h5>Memorization</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img3} alt='' className='w-50' />
                  <h5>Tafseer</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img4} alt='' className='w-50' />
                  <h5>Arabic Language</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img5} alt='' className='w-50' />
                  <h5>Hadith</h5>
                </div>
              </div>


              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img6} alt='' className='w-50' />
                  <h5>Fiqh</h5>
                </div>
              </div>


              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img7} alt='' className='w-50' />
                  <h5>Arabic Grammer</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img8} alt='' className='w-50' />
                  <h5> Quran Ijazah </h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img9} alt='' className='w-50' />
                  <h5>Tajweed</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img10} alt='' className='w-50' />
                  <h5>Classes for kids</h5>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img11} alt='' className='w-50' />
                  <h5>Quran for kids</h5>
                </div>
              </div>


              <div className='col-md-3'>
                <div className={style.card}>
                  <img src={img12} alt='' className='w-50' />

                  <h5> Islamic Studies</h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  </>
}
