import React from 'react'
import { Record } from '../Data'
import { NavLink } from 'react-router-dom'
const Home2 = () => {
  return (
    <div className='bg-gray-200'>
      <div className='p-10'>
        <h1 className=' text-center  text-4xl font-extrabold text-sky-500 mb-4 pb-10'>Our Courses & Services</h1>
      </div>
      <div className='md:flex  justify-center pb-10   '>
     {
        Record.map(data =>{
            return(
                <div className='bg-gray-300 md:mx-4 my-4 m-2 md:h-96 md:w-60  flex flex-col items-center text-center rounded-xl shadow-md shadow-slate-500'>
                    <div className='items-center'>
                       <img className='md:h-28 h-20 rounded-full mt-2   ' alt='loading...' src={data.img}/>
                    </div>
                  <div className=' md:h-52'>
                     <h1 className='text-2xl mt-5 text-purple-500 font-extrabold'>{data.name}</h1>
                     <p className='mt-5 p-2 text-xl '>{data.title}</p>
                  </div>
                  <div className=' '>
                  <NavLink to='/login'>
                  <button type='button' className='bg-blue-500 p-2  rounded-md w-44 md:mb-0 mb-2  md:mt-0 mt-5'>Book Now</button>

                  </NavLink>
                  </div>
                </div>
            )
        })
     }
     </div>
    </div>
  )
}

export default Home2
