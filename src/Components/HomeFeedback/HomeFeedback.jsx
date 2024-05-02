import style from './HomeFeedback.module.css'
import Slider from "react-slick";
import slide1 from '../../assets/images/man.jpg'
import slide2 from '../../assets/images/woman.jpg'

export default function HomeFeedback() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true

    };

    var secSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    }

    return <>

        <div className={style.FeedbackComponent}>

            <div className="container h-100">

                <div className='row h-100 align-items-center justify-content-center'>
                    <div className='col-md-12'>

                        <div className="position-relative">
                            <h2 className='text-center my-4 mb-0 mt-0 pt-0 mb-2 text-light'>Our Students' Feedback</h2>
                            <div className={style.headingADesign}></div>
                        </div>
                        <div className={style.carousel}>
                            <Slider {...settings} className={`${style.slider1} h-100`}>
                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide2} alt='Woman' />
                                    <h4 className='mb-5 text-light'>Sarah Ahmed</h4>
                                    <p className={style.feedbackPara}>I enrolled my son here for Quran and Arabic classes, and I'm thrilled with the progress. The teachers are dedicated and knowledgeable. His Quranic recitation and Arabic skills have improved significantly. I highly recommend this academy for quality Islamic education</p>
                                </div>

                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide1} alt='Man' />
                                    <h4 className='mb-5 text-light'>Mohammed Khan</h4>
                                    <p className={style.feedbackPara}>I was hesitant about Arabic and Islamic studies. But this academy surprised me with its supportive environment and effective teaching. Complex concepts become clear, and I've made remarkable progress quickly. Grateful for this spiritual journey.</p>
                                </div>

                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide2} alt='Woman' />
                                    <h4 className='mb-5 text-light'>Aisha Mahmoud</h4>
                                    <p className={style.feedbackPara}>My daughter has been attending classes at this academy and the education quality consistently impresses me. Teachers are not just knowledgeable but genuinely care about progress. Her confidence in Quranic recitation and Islamic understanding has soared. </p>
                                </div>

                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide1} alt='Man' />
                                    <h4 className='mb-5 text-light'>Abdullah Patel</h4>
                                    <p className={style.feedbackPara}>I've tried various online platforms to learn Quran and Arabic, but none have compared to the experience I've had at this academy. The curriculum is well-structured and the instructors are highly qualified.</p>
                                </div>

                            </Slider>

                            <Slider {...secSettings} className={`${style.slider2} h-100`}>
                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide2} alt='Woman' />
                                    <h4 className='mb-5 text-light'>Sarah Ahmed</h4>
                                    <p className={style.feedbackPara}>I enrolled my son here for Quran and Arabic classes, and I'm thrilled with the progress. The teachers are dedicated and knowledgeable. His Quranic recitation and Arabic skills have improved significantly. I highly recommend this academy for quality Islamic education</p>
                                </div>

                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide1} alt='Man' />
                                    <h4 className='mb-5 text-light'>Mohammed Khan</h4>
                                    <p className={style.feedbackPara}>I was hesitant about Arabic and Islamic studies. But this academy surprised me with its supportive environment and effective teaching. Complex concepts become clear, and I've made remarkable progress quickly. Grateful for this spiritual journey.</p>
                                </div>

                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide2} alt='Woman' />
                                    <h4 className='mb-5 text-light'>Aisha Mahmoud</h4>
                                    <p className={style.feedbackPara}>My daughter has been attending classes at this academy and the education quality consistently impresses me. Teachers are not just knowledgeable but genuinely care about progress. Her confidence in Quranic recitation and Islamic understanding has soared. </p>
                                </div>

                                <div className='d-flex align-items-center justify-content-center flex-column h-100'>
                                    <img src={slide1} alt='Man' />
                                    <h4 className='mb-5 text-light'>Abdullah Patel</h4>
                                    <p className={style.feedbackPara}>I've tried various online platforms to learn Quran and Arabic, but none have compared to the experience I've had at this academy. The curriculum is well-structured and the instructors are highly qualified.</p>
                                </div>

                            </Slider>

                      </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}
