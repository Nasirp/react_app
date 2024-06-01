import React from 'react'
import {FisrtContainer_URL} from '..//utils/constant'
import { Link } from 'react-router-dom'
import Home2 from './Home2'
import Features from './Features'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
     <div className='bg-blue-300 p-10 flex md:justify-evenly justify-between pb-10 '>
      <div className=' md:w-1/3 mt-10 items-center flex flex-col'>

      <h1 className='md:text-5xl text-2xl font-bold font-sans p-4 text-blue-700'>An Evolution of<h1 className='mt-4'>Your Learning</h1> </h1>
      <h3 className='text-lg py-10 italic ... font-semibold '>Nellwyn Learning offers the most comprehensive 
          online courses for students. Our courses are developed by experts 
          in their respective fields. We enables students to receive the quality 
          education they need to succeed on their own terms.</h3>
         <Link to="/service"> <button 
             type="button" 
             class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                      font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 mt-4 w-52">Learn With Us</button></Link>

      </div>
       <img  className='md:h-52 h-28 mt-10'  alt='load..'  src={FisrtContainer_URL}/>
      </div>
      <Home2/>
      <Features/>
      
    </div>
  )
}

export default Home
