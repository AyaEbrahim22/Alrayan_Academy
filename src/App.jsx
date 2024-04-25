
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';


export default function App() {
 
 let routers = createHashRouter([

  {path:'',  element: <Layout/>, children: [
    {index: true, element: <Home/>},
    {path: 'about' , element: <About/>}
  ]}

 ])
 
 return <>
   <RouterProvider router={routers}></RouterProvider>
  </>
}


