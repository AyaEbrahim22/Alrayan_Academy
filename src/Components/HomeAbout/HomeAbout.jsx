import style from './HomeAbout.module.css'
import aboutImg from '../../assets/images/aboutImg.jpg'
import { Zoom } from 'react-awesome-reveal'


export default function HomeAbout() {
  
  
  return <>
  
  <div className={style.aboutComponent}>
        <div className='container'>
        <div className="position-relative">
          <h2 className='text-center my-4 mb-0 mt-0 pt-4 mb-5'>ABOUT US</h2>
          <div className={style.headingADesign}></div>
        </div>
      

        <div className='row'>

<div className='col-md-7'>
         <Zoom>
           <div>
            <img src={aboutImg} alt='About Img' className='w-100 rounded-2'/>
           </div>
           </Zoom>
          </div>
        
       
          <div className='col-md-5'>
      
            <p className='fs-5'><span className='fs-3 text-success'>RISALAH</span> is an Online Quran Academy that offers Online Quran Classes to people all over the World. We seek to deliver the best and completely accurate comprehension of Basic Quran Reading, Quran with Tajweed, Quran Memorization, Tafseer e Quran, and Quranic Arabic on one platform with qualified, recognized Ejaz ul Quran instructors. In this Digital age, learning the Quran is not difficult. The top teachers are available to you even if you choose to learn at home.</p>
            <br/>
            <p className='fs-5'><span className='fs-3'>R</span>isalah is one of the leading and legit platforms for learning the Quran. Any device that has Internet access may be used to learn the Quran Online. It might be your laptop, Tablet, Computer, or even your Mobile Phone. With the aid of thorough knowledge of Tajweed, comprehension of this esteemed text, and Quranic Arabic, our main focus is on imparting the best Quranic interpretations.</p>
          </div>
        </div>

      
      
        </div>
      </div>
  
  
  </>

}
