import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiMailOpen, HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black">
        
          {/*menu */}
          <ul className='hidden md:flex'>
            <li>
              <Link to= "home" smooth = {true} duration = {500}>Home</Link>
            </li>
            <li><Link to= "school" smooth = {true} duration = {500}>Degree</Link></li>
            <li><Link to= "skill" smooth = {true} duration = {500}>Skill</Link></li>
            <li><Link to= "project" smooth = {true} duration = {500}>Projects</Link></li>
            <li><Link to= "contact" smooth = {true} duration = {500}>Contact</Link></li>
           
          </ul>
  

        {/*icon */}
        <div onClick = {handleClick} className ='md:hidden z-10'> 
        {!nav ? <FaBars /> : <FaTimes/>}
        </div>
        {/*mobile icon */}
        <ul className = {!nav ? 'hidden' : " absolute top-0 left-0 h-screen bg-black flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to= "home" smooth = {true} duration = {500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to= "school" smooth = {true} duration = {500}>Degree</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to= "skill" smooth = {true} duration = {500}>Skill</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to= "project" smooth = {true} duration = {500}>Project</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to= "contact" smooth = {true} duration = {500}>Contact</Link></li>
        </ul>
        {/*social icon*/}
        <div className = 'flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className = "w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
          <a className=' flex justify-between items-center w-[300px] text-black'
          href= "https://www.linkedin.com/in/thai-huynh-251a39218/" target="_blank">
            Linkedin <FaLinkedin size={30} />
          </a>
          </li>
          <li className = "w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
          <a className=' flex justify-between items-center w-[300px] text-black'
          href= "https://github.com/Thai-Huynh0510" target="_blank">
            GitHub <FaGithub size={30} />

          </a>
          </li>
          <li className = "w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
          <a className=' flex justify-between items-center w-[300px] text-black'
          href= "/">
            <Link to= "contact" smooth = {true} duration = {500}>Contact</Link> <HiMailOpen size={30} />

          </a>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar