import React from 'react'
import { ServiceData } from '../ServiceData'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='flex flex-wrap items-center pt-32'>
      {
        ServiceData.map(data =>{
          return(
            <div className=' flex flex-col items-center py-10 '>
            <div className=' ml-36 w-80 border border-gray-500  items-center flex flex-col'>
              <img className='h-52 mx-4  w-screen' src={data.img} alt='loading..'></img>
              <p className='my-4 text-2xl font-bold'>{data.name}</p>
              <h3 className='my-4'>{data.start}</h3>
              <p className='my-2'>{data.price}</p>
              <h2 className='my-2'>{data.limit}</h2>
            <Link to="/course"> <button className='p-4 my-4 bg-blue-800 rounded-lg'>Book Now</button></Link>
            </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Service
