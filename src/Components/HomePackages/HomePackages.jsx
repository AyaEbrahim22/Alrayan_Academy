import style from './HomePackages.module.css'
import { AttentionSeeker, Slide } from "react-awesome-reveal";

export default function HomePackages() {


    return <>
        <div className={`${style.homePackages} Packages`}>

            <div className='container'>
                <div className='row g-4 justify-content-center'>


                    <div className='col-md-3'>

                        <div className={style.packageCard}>
                            <div className='text-center mb-3'>
                                <h4 className={style.type}>Package 1</h4>
                                <h3 className={style.price}>$30</h3>
                                <span className='fs-5 text-secondary'>Per month</span>
                            </div>
                            <div className='row align-items-center justify-content-center'>
                                <div className='col-md-4 d-flex align-items-center justify-content-center p-0'>
                                    <ul>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> Free Trial</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 1 hour/class</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 4 classes/month</span></li>
                                    </ul>
                                </div>

                            </div>

                        </div>



                    </div>

                    <div className='col-md-3'>

                        <div className={style.packageCard}>
                            <div className='text-center mb-3'>
                                <h4 className={style.type}>Package 2</h4>
                                <h3 className={style.price}>$40</h3>
                                <span className='fs-5 text-secondary'>Per month</span>
                            </div>
                            <div className='row align-items-center justify-content-center'>
                                <div className='col-md-4 d-flex align-items-center justify-content-center p-0'>
                                    <ul>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> Free Trial</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 30 mins/class</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 8 classes/month</span></li>
                                    </ul>
                                </div>

                            </div>

                        </div>



                    </div>

                    <div className='col-md-3'>

                        <div className={style.packageCard}>
                            <div className='text-center mb-3'>
                                <h4 className={style.type}>Package 3</h4>
                                <h3 className={style.price}>$60</h3>
                                <span className='fs-5 text-secondary'>Per month</span>
                            </div>
                            <div className='row align-items-center justify-content-center'>
                                <div className='col-md-4 d-flex align-items-center justify-content-center p-0'>
                                    <ul>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> Free Trial</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 30 mins/class</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 12 classes/month</span></li>
                                    </ul>
                                </div>

                            </div>

                        </div>



                    </div>

                    <div className='col-md-3'>

                        <div className={style.packageCard}>
                            <div className='text-center mb-3'>
                                <h4 className={style.type}>Monthly</h4>
                                <h3 className={style.price}>$75</h3>
                                <span className='fs-5 text-secondary'>Per month</span>
                            </div>
                            <div className='row align-items-center justify-content-center'>
                                <div className='col-md-4 d-flex align-items-center justify-content-center p-0'>
                                    <ul>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> Free Trial</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 30 mins/class</span></li>
                                        <li className='fs-5'><i className="fa-solid fa-check mainColor"></i><span className='text-secondary'> 30 classes/month</span></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>

    </>
}


