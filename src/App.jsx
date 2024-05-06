
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import HomeDemo from './Components/HomeDemo/HomeDemo';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


export default function App() {
 
 let routers = createHashRouter([

  {path:'',  element: <Layout/>, children: [
    {index: true, element: <Home/>},
    {path: 'about' , element: <About/>},
    {path: 'contact' , element: <Contact/>},
    {path: 'demo' , element: <HomeDemo/>},
    {path: 'login' , element: <Login/>},
    {path: 'dashboard' , element: <ProtectedRoute> <Dashboard/> </ProtectedRoute>}
  ]}

 ])
 
 return <>

   <RouterProvider router={routers}></RouterProvider>

   
  </>
}


