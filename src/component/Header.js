import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinkStyle =({isActive}) =>{
    return{
      
      fontWeight: isActive ? 'bold' :'normal',
      color: isActive ? 'blue' : 'white',
     
  }
  }
    
   
  return (
    <div>
      
        <nav className='md:flex md:justify-between md:flex-row sm:flex-col md:items-center sm:items-start bg-gray-700 md:p-0 py-6 ' >
             <h1>Logo</h1>
             <div 
               onClick={() =>{
                setMenuOpen(!menuOpen)
               }}
               className='absolute flex flex-col justify-between h-8 w-9 top-4 right-2 md:hidden '>
              <span className='h-1 w-10 bg-white rounded-lg'></span>
              <span className='h-1 w-10 bg-white rounded-lg'></span>
              <span className='h-1 w-10 bg-white rounded-lg'></span>
             </div>
                <ul 
                   
             
                   className={ menuOpen ? 'flex flex-col'  : 'md:flex md:flex-row sm:flex-col   md:w-1/2 md:mt-0 mt-10 md:bg-gray-700 bg-gray-500 hidden'}
                   >
                <li className='font-bold text-lg '><NavLink exact to="/" 
                     className="block  text-lg p-4 m-2 rounded-md hover:bg-gray-900   md:hover:bg-gray-700 "
                     style={NavLinkStyle}
                     
                     >Home</NavLink></li>   
                
                    <li className='font-bold text-lg'><NavLink 
                      to="/register"  
                      className="block  p-4 m-2 rounded-md hover:bg-gray-900   md:hover:bg-gray-700 "
                      style={NavLinkStyle}
                     
                    >Register
                    
                    </NavLink></li>
                   <li className='font-bold text-xl'><NavLink to='/service' 
                          style={NavLinkStyle}
                          className="block  p-4 m-2 rounded-md hover:bg-gray-900 md:hover:bg-gray-700">Service</NavLink></li>
                    <li className='font-bold text-xl'>
                       <NavLink    
                           to='/team'
                           style={NavLinkStyle}
                           className="block p-4 m-2 rounded-md hover:bg-gray-900 md:hover:bg-gray-700">Team</NavLink></li>
                    <li className='font-bold text-lg'>
                        <NavLink   
                           to='/contact'
                          style={NavLinkStyle}
                           className="block  p-4 m-2 rounded-md hover:bg-gray-900 md:hover:bg-gray-700">Contact Us</NavLink></li>
                    <li className='font-bold text-lg'>
                           <NavLink   
                               to='/login'
                                className="block text-white  p-4 m-2 rounded-md hover:bg-gray-900 md:hover:bg-gray-700">Log In</NavLink></li>
                </ul>
              
           
            
        </nav>
     
    </div>
  )
}

export default Header
