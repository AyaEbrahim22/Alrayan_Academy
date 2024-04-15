import style from './HomeFeedback.module.css'
import Slider from "react-slick";
import slide1 from '../../assets/images/man.jpg'
import slide2 from '../../assets/images/woman.jpg'

export default function HomeFeedback() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
       
    };

    return <>


        <div className={style.FeedbackComponent}>

            <div className="container h-100">


                <div className='row h-100 align-items-center'>
                    <div className='col-md-7'></div>
                    <div className='col-md-5'>

                        
            <div className="position-relative">
                <h2 className='text-center my-4 mb-0 mt-0 pt-0 mb-2 text-light'>Our Customers Feedback</h2>
                <div className={style.headingADesign}></div>
            </div>
                     <div className={style.carousel}>
                     <Slider {...settings} className='h-100'>
                            <div className='text-light d-flex align-items-center justify-content-center flex-column h-100'>
                                <img src={slide1} alt='Man photo'/>
                                <h4 className='mb-3'>Emad Elkholy</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem modi quia voluptate itaque accusantium! Voluptatem aliquid, ullam nostrum facilis nesciunt sint illum omnis quae maxime, cumque laboriosam commodi iste.</p>
                            </div>

                            <div className='text-light d-flex align-items-center justify-content-center flex-column h-100'>
                                <img src={slide2} alt='Man photo'/>
                                <h4 className='mb-3'>Emad Elkholy</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem modi quia voluptate itaque accusantium! Voluptatem aliquid, ullam nostrum facilis nesciunt sint illum omnis quae maxime, cumque laboriosam commodi iste.</p>
                            </div>

                            <div className='text-light d-flex align-items-center justify-content-center flex-column h-100'>
                                <img src={slide1} alt='Man photo'/>
                                <h4 className='mb-3'>Emad Elkholy</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem modi quia voluptate itaque accusantium! Voluptatem aliquid, ullam nostrum facilis nesciunt sint illum omnis quae maxime, cumque laboriosam commodi iste.</p>
                            </div>

                        </Slider>
                     </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}
