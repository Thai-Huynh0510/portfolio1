import React from 'react'
import bmcc from '../assets/bmcc.jpg'
import Hunter from '../assets/Hunter.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const School = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
      })
  return (
    <div name= 'school' className='w-full h-screen bg-bg1'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
        <div >
        <h1 data-aos='fade-down' className='text-4xl sm:text-7xl font-bold text-white text-center my-10'> Degrees</h1>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-10 text-white text-center'>
            <div  data-aos='fade-right'>
                <h1 className ='text-4xl font-bold'>Borough of Manhattan College</h1>
            </div>
            <div  data-aos='fade-left'>
                <h1 className='text-4xl font-bold'>Hunter College</h1>
            </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 text-white text-center'>
            <div data-aos='fade-right' className='my-2'> <img src = {bmcc}/></div>
            <div data-aos='fade-left' className='my-2'> <img src = {Hunter} /></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 text-white text-center'> 
            <div><p data-aos='fade-right' className='text-2xl font-bold my-2'> Associate of Art 2019 - 2021</p></div>
            <div><p data-aos='fade-left' className='text-2xl font-bold my-2'> Bachelor of Art 2021 - 2023</p></div>
        </div>
        </div>
    </div>
  )
}

export default School