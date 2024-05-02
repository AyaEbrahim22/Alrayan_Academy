import { AttentionSeeker} from 'react-awesome-reveal'
import style from './Intro.module.css'

export default function Intro() {
  
  return<>
  
  <div className={style.intro}>
      <div className='container'>
     
      <AttentionSeeker effect='bounce'>

        <div className={`${style.h100} row justify-content-evenly align-items-center g-4`}>

    
        <div className={`col-md-3`}>
            <div className={`${style.introCard} d-flex flex-column border border-3 border-warning rounded-1 py-4 px-3`}>
              <div className='d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-user-clock fa-2xl text-success me-2 align-self-start pt-4"></i>
                <div><h4 className='text-light'>Classes Around The Clock</h4>
                  <p className='text-light'>Take classes at any time that<br /> suit you</p></div>
              </div>
            </div>
          </div>

          <div className={`col-md-3`}>
            <div className={`${style.introCard} d-flex flex-column border border-3 border-warning rounded-1 py-4 px-3`}>
              <div className='d-flex align-items-center justify-content-center'>
                <i className="fa-brands fa-free-code-camp fa-2xl text-danger me-2 align-self-start pt-4"></i>
                <div><h4 className='text-light'>First trial Class free</h4>
                  <p className='text-light'>Get free trial class for<br /> any course</p></div>
              </div>
            </div>
          </div>

          <div className={`col-md-3`}>
            <div className={`${style.introCard} d-flex flex-column border border-3 border-warning rounded-1 py-4 px-3`}>
              <div className='d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-certificate fa-2xl text-warning me-2 align-self-start pt-4"></i>

                <div><h4 className='text-light'>Completion Certificates</h4>
                  <p className='text-light'>Get a certificate after completing <br /> the course</p></div>
              </div>
            </div>
          </div>

          </div>
   
        </AttentionSeeker>
   
      </div>
    </div>

  
  </>
}
