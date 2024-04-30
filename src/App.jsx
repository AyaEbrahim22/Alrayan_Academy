
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import HomeDemo from './Components/HomeDemo/HomeDemo';


export default function App() {
 
 let routers = createHashRouter([

  {path:'',  element: <Layout/>, children: [
    {index: true, element: <Home/>},
    {path: 'about' , element: <About/>},
    {path: 'contact' , element: <Contact/>},
    {path: 'demo' , element: <HomeDemo/>}
  ]}

 ])
 
 return <>

   <RouterProvider router={routers}></RouterProvider>

   
  </>
}


