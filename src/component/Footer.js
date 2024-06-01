import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <div >
      <footer className='bg-black  text-gray-300 p-5 flex flex-col items-center justify-center'>
        <div className='  flex items-center '>
            <span className='md:flex md:flex-col md:mx-4'>
            <InstagramIcon className='ml-5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md'/>    Instagram
            </span>
            <span className='md:flex md:flex-col md:mx-4'>
           <FacebookIcon className='ml-5 '/> Facebook
            </span>
            <span className='md:flex md:flex-col md:mx-4'>
             <InstagramIcon className='ml-5'/> Instagram
            </span>
            <span className=' md:flex md:flex-col md:mx-2 '>
            <InstagramIcon className='ml-5 bg-'/>Instagram 
            </span>
        </div>
        <div>
          <p className='font-sans mt-2 text-sm'>Copyright &copy; 2024 Nasir Hussain</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
