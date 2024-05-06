import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/RayanBGLogo.png'
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function Navbar() {

    return <>

        <nav className="navbar navbar-expand-lg p-2">
            <div className="container">
                <Slide direction='left'>
                    <Link className="navbar-brand" to={"/"}>
                        <img src={logo} alt='logo' />
                    </Link>
                </Slide>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <Slide direction='down'>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className={`${style.navLink} nav-link`} aria-current="page" to={"/"}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`${style.navLink} nav-link`} to={'about'}>About</Link>    
                            </li>

                            <li className="nav-item">
                                <Link className={`${style.navLink} nav-link`} to={'contact'}>Contact</Link>    
                            </li>

                        </ul>
                    </Slide>

                    <Slide direction='right'>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="https://www.facebook.com/resalah55" target='_blank'  without rel="noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="https://m.me/resalah55" target='_blank'  without rel="noreferrer">
                                    <i className="fa-brands fa-facebook-messenger"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href='https://wa.me/+201557601371' target='_blank'  without rel="noreferrer">
                                  <i className="fa-brands fa-whatsapp fa-lg"></i>  
                                                          
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className={`${style.textColor} nav-link`} href="https://www.instagram.com/risalah_academyy/?hl=en" target='_blank'  without rel="noreferrer">
                                    <i className="fa-brands fa-instagram fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </Slide>
                </div>
            </div>
        </nav>

    </>
}
