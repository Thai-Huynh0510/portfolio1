import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiMailOpen, HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
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
        <div className = 'flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className = "w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
          <a className=' flex justify-between items-center w-[300px] text-black'
          href= "/">
            Linkedin <FaLinkedin size={30} />
          </a>
          </li>
          <li className = "w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
          <a className=' flex justify-between items-center w-[300px] text-black'
          href= "/">
            GitHub <FaGithub size={30} />

          </a>
          </li>
          <li className = "w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
          <a className=' flex justify-between items-center w-[300px] text-black'
          href= "/">
            Contact <HiMailOpen size={30} />

          </a>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar