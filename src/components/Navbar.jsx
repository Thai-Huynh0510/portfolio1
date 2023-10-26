import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
        
          {/*menu */}
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>School</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
  

        {/*icon */}
        <div onClick = {handleClick} className ='md:hidden z-10'> 
        {!nav ? <FaBars /> : <FaTimes/>}
        </div>
        {/*mobile icon */}
        <ul className = {!nav ? 'hidden' : " absolute top-0 left-0 h-screen bg-black flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>School</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/*social icon*/}
        <div></div>
    </div>
  )
}

export default Navbar