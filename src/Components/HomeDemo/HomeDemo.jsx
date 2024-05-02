import { useEffect } from 'react';
import style from './HomeDemo.module.css'

export default function HomeDemo() {

  function pressArabicBtn() {
    document.getElementById('videoIframe').setAttribute('src', 'https://www.youtube.com/embed/tmDJBBQqWeM?si=sjtDA4SUt7e4tEz5');
    document.getElementById('EnglishBtn').classList.remove('d-none')
    document.getElementById('arabicBtn').classList.add('d-none')
  }

  function pressEnglishBtn() {
    document.getElementById('videoIframe').setAttribute('src', 'https://www.youtube.com/embed/pYMMJPgo5Gg?si=1YI5jxjn_afaAVDp');
    document.getElementById('arabicBtn').classList.remove('d-none')
    document.getElementById('EnglishBtn').classList.add('d-none')
  }

  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])


  return <>

    <div className={style.demoComponent}>

      <div className='container'>

        <div className='row g-4 justify-content-center align-items-center position-relative'>

          <div className='col-md-7'>
            <h3>Our Reliable Online Platform for <span> Islamic Education</span></h3>

            <iframe id='videoIframe' height={450} src="https://www.youtube.com/embed/pYMMJPgo5Gg?si=1YI5jxjn_afaAVDp" className='w-100' title="demo">
            </iframe>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <button id='arabicBtn' onClick={() => pressArabicBtn()} className={`${style.translateBtn} `}>Arabic</button>
              <button id='EnglishBtn' onClick={() => pressEnglishBtn()} className={`${style.translateBtn} d-none`}>English</button>
            </div>

          </div>

          <div className='col-md-5'>
            <div className={style.registerSection}>

              <form>
                <p className='text-center fw-bold fs-2'>
                  Here, get a free trial of Quran learning by enrolling with us today!
                </p>
                <div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Name:</label>
                      <input type='text' name='' placeholder='Full Name' />
                    </div>
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Email:</label>
                      <input type='email' name='' placeholder='Your email..' />
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <label className='w-100 fw-bold fs-5'>Phone:</label>
                        <input type='tel' name='' placeholder='0100 123 4567' />
                      </div>
                      <div className='col-md-6'>
                        <label className='w-100 fw-bold fs-5'>Course Title:</label>
                        <select name='' className='w-100'>
                          <option value=""><input type='text' name='' placeholder="Qura'n Course" />Quran</option>
                          <option value="">FIQH</option>
                          <option value="">AQEEDAH</option>
                          <option value="">TAJWEED</option>
                          <option value="">HADITH</option>
                          <option value="">ARABIC</option>
                        </select>

                        {/* <input type='text' name='' placeholder="Qura'n Course" /> */}
                      </div>
                    </div>

                  </div>
                </div>

                <div className='mt-4'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Student Age:</label>
                      <input type='number' name='' placeholder='15' />
                    </div>
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Student Gender:</label>
                      <select name='' className='w-100'>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='row'>

                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Teacher Gender:</label>
                      <select name='' className='w-100'>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Preferred Days:</label>
                      <input type='text' name='' placeholder='saturday' />
                    </div>

                  </div>
                </div>

                <button className={style.messageBtn}>Submit</button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>

  </>
}
