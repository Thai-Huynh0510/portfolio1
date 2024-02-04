import React from 'react'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import Python from '../assets/Python.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skill = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
      })
  return (
    <div name = 'skill' className='w-full h-screen bg-bg2 text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div data-aos='zoom-in' className= 'text-center'>
                <h1 className='text-4xl sm:text-7xl font-bold '>Skills</h1>
                <p className='text-2xl text-[#8892b0] my-8 '> Learning and Improving</p>
            </div>
            <div className='w-full grid grid-cols-4 gap-4 text-center'>
                <div data-aos='fade-right' className='shadow-md hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto'src = {github} />
                    <p className='my-4'>Github</p>
                </div><div data-aos='fade-up' className='shadow-md hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto'src = {javascript} />
                    <p className='my-4'>Javascript</p>
                </div><div data-aos='fade-down' className='shadow-md hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto'src = {Python} />
                    <p className='my-4'>Python</p>
                </div><div data-aos='fade-left' className='shadow-md hover:scale-110 duration-300'>
                    <img className = 'w-20 mx-auto'src = {react} />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill