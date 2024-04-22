import style from './HomeDemo.module.css'

export default function HomeDemo() {
  
  function pressArabicBtn(){
    document.getElementById('videoIframe').setAttribute('src','https://www.youtube.com/embed/tmDJBBQqWeM?si=sjtDA4SUt7e4tEz5');
    document.getElementById('EnglishBtn').classList.remove('d-none')
    document.getElementById('arabicBtn').classList.add('d-none')
  }

  function pressEnglishBtn(){
    document.getElementById('videoIframe').setAttribute('src','https://www.youtube.com/embed/pYMMJPgo5Gg?si=1YI5jxjn_afaAVDp');
    document.getElementById('arabicBtn').classList.remove('d-none')
    document.getElementById('EnglishBtn').classList.add('d-none')
  }
  
  return <>
  
  <div className={style.demoComponent}>

<div className='container'>
  <div className="position-relative">
    <h2 className='text-center my-4 mb-0 mt-0 pt-4 mb-5 text-light'>ENJOY OUR DEMO</h2>
    <div className={style.headingVDesign}></div>
  </div>

  <div className='row g-0 justify-content-center position-relative'>

    <div className='col-md-8'>

    <iframe id='videoIframe' height={450} src="https://www.youtube.com/embed/pYMMJPgo5Gg?si=1YI5jxjn_afaAVDp" className='w-100'>
    </iframe>
  <div className='d-flex align-items-center justify-content-center mt-3'>
  <button id='arabicBtn' onClick={() => pressArabicBtn()} className={`${style.translateBtn} `}>Arabic</button>
    <button id='EnglishBtn' onClick={() => pressEnglishBtn()} className={`${style.translateBtn} d-none`}>English</button>
  </div>
  
    </div>


  
   
  </div>


</div>
</div>

  </>
}
