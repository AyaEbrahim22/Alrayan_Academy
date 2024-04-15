import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/logo.png'
import { Slide } from "react-awesome-reveal";

export default function Navbar() {


    return <>

        <nav className="navbar navbar-expand-lg p-2">
            <div className="container">
                <Slide direction='left'>
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt='logo' />
                    </a>
                </Slide>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <Slide direction='down'>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className={`${style.navLink} nav-link active`} aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.navLink} nav-link`} href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.navLink} nav-link`} href="#courses">Courses</a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.navLink} nav-link`} href="#testimonials">Testimonials</a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.navLink} nav-link`} href="#packages">Packages</a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.navLink} nav-link`} href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </Slide>

                    <Slide direction='right'>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="#">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="#">
                                    <i className="fa-brands fa-facebook-messenger"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="#">
                                    <i className="fa-brands fa-whatsapp fa-lg"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="#">
                                    <i className="fa-brands fa-youtube fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </Slide>
                </div>
            </div>
        </nav>

    </>
}
