import { useEffect } from 'react'
import style from './Contact.module.css'

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <div className={style.contactComponent}>
            <div className='container'>
                <div className='row text-center gx-5 gy-4 mb-5'>
                    <div className='col-md-4'>
                        <div className={style.contactCard}>
                            <h3>Email Us</h3>
                            <p className='fs-5 text-secondary'>risalahakademy@gmail.com</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className={style.contactCard}>
                            <h3>Call Us</h3>
                            <p className='fs-5 text-secondary'> +2 01557601371</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className={style.contactCard}>
                            <h3>Our Office</h3>
                            <p className='fs-5 text-secondary'>Risalah Academy EG</p>
                        </div>
                    </div>
                </div>

                <div className='row mt-4 g-4'>
                    <div className='col-md-6'>
                        <div className={style.contactSection}>
                            <h3>Contact <span>Us</span></h3>
                            <p>
                                We’d love to hear from you! Contact us today.
                            </p>
                            <form>
                                <div>
                                    <label className='w-100 fw-bold fs-5'>Name:</label>
                                    <div className='row'>
                                        <div className='col-md-6'>

                                            <input type='text' name='' placeholder='First' />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type='text' name='' placeholder='Last' />
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <label className='w-100 fw-bold fs-5'>Email:</label>
                                    <input type='email' name='' placeholder='Your email..' />
                                </div>

                                <div className='mt-3'>
                                    <label className='w-100 fw-bold fs-5'>Phone:</label>
                                    <input type='tel' name='' placeholder='0100 123 4567' />
                                </div>

                                <div className='mt-3'>
                                    <label className='w-100 fw-bold fs-5'>Your Message:</label>
                                    <textarea name='' placeholder='Message' rows={5}></textarea>
                                </div>

                                <button className={style.messageBtn}>Send Message</button>



                            </form>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className={style.contactMap}>
                            <h3>Let's start <span>Learning Quran</span> Online Today!</h3>

                            <p>
                                Get access to the convenience and flexibility of learning the Quran online from the comfort of your home. Our dedicated Quran tutors are ready to guide and support you in your Quranic studies. Join our community of learners and become part of the spiritual Qurani learning journey.
                            </p>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1760797492466!2d31.332694081661582!3d30.06048691023684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e65c130f951%3A0xd2b9714b75fc3cb5!2sAbbas%20El-Akkad%2C%20Al%20Manteqah%20Al%20Oula%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1714344024027!5m2!1sen!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="position"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
