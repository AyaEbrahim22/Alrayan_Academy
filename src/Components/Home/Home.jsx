
import Head from '../Head/Head'
import Intro from '../Intro/Intro'
import HomeAbout from '../HomeAbout/HomeAbout'
import HomeDemo from '../HomeDemo/HomeDemo'
import HomeCourses from '../HomeCourses/HomeCourses'
import HomeFeedback from '../HomeFeedback/HomeFeedback'
import HomePackages from '../HomePackages/HomePackages'
import { useEffect } from 'react'

export default function Home() {
 
  
 useEffect(() => {
  
  if( localStorage.getItem('AdminToken') ){
      localStorage.removeItem('AdminToken')
    }
      window.scrollTo(0, 0)
}, [])
 
 return <>

    <Head />

    <HomeAbout />

    <Intro />
    
    <HomeDemo />

    <HomeFeedback/>

    <HomeCourses />

    <HomePackages/>

  </>
}
