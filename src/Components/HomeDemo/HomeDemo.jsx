import style from './HomeDemo.module.css'
import vid from '../../assets/videos/About.mp4'

export default function HomeDemo() {
  
  
  return <>
  
  <div className={style.demoComponent}>

<div className='container'>
  <div className="position-relative">
    <h2 className='text-center my-4 mb-0 mt-0 pt-4 mb-5 text-light'>ENJOY OUR DEMO</h2>
    <div className={style.headingVDesign}></div>
  </div>

  <div className='row g-0 justify-content-center'>

    <div className='col-md-8'>
      <video controls src={vid} className='w-100' />
    </div>

  </div>


</div>
</div>

  </>
}
