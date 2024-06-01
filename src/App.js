
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Regist from './component/Register';
import Service from './component/Service';
import Course from './component/Course';
import Team from './component/Team';
import ContactUs from './component/ContactUs';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Footer from './component/Footer';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Header/>  <Home/> <Footer/></>
    },
    {
      path:'/register',
      element:<><Header/>  <Regist/> <Footer/></>
      
    },
    {
      path: '/service',
      element:<><Header/> <Service/> <Footer/></>
    },
    {
      path: '/course',
      element:<><Header/> <Course/> <Footer/></>
    },
    {
      path: '/team',
      element:<><Header/> <Team/> <Footer/></>
    },
    {
      path: '/contact',
      element:<><Header/> <ContactUs/> <Footer/></>
    },
    {
      path: '/login',
      element:<><Header/> <Login/> <Footer/></>
    },
    {
      path: '/signup',
      element:<><Header/> <SignUp/> <Footer/></>
    }
  ])
  return (
    <>
    
    <RouterProvider router={router}/>
  
  
  
      
    </>
  );
}

export default App;
