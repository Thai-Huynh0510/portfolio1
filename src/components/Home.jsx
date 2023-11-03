import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name = 'home' className = 'w-full h-screen bg-black'>
      <div className = 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#8892b0]'>
        <p> Hello, This is</p>
        <h1 className='text-4xl sm:text-7xl font-bold'> Thai Huynh</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'> I'm a new Grad</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> I'm currently focusing on my front-end,
        studying and working on my personal project </p>
        <div> 
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black'>
        <Link to= "school" smooth = {true} duration = {500}> Learn more about me </Link>
        <span className = 'group-hover:rotate-90 duration-300' >
        <HiArrowNarrowRight className = 'ml-2' />
        </span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Home