import React from 'react'
import bmcc from '../assets/bmcc.jpg'
import Hunter from '../assets/Hunter.jpeg'
const School = () => {
  return (
    <div name= 'school' className='w-full h-screen bg-bg1'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
        <div >
        <h1 className='text-4xl sm:text-7xl font-bold text-white text-center my-10'> Degrees</h1>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-10 text-white text-center'>
            <div >
                <h1 className ='text-4xl font-bold'>Borough of Manhattan Community College</h1>
            </div>
            <div >
                <h1 className='text-4xl font-bold'>Hunter College</h1>
            </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 text-white text-center'>
            <div className='my-2'> <img src = {bmcc}/></div>
            <div className='my-2'> <img src = {Hunter} /></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 text-white text-center'> 
            <div><p className='text-2xl font-bold my-2'> Associate of Art 2019 - 2021</p></div>
            <div><p className='text-2xl font-bold my-2'> Bachelor of Art 2021 - 2023</p></div>
        </div>
        </div>
    </div>
  )
}

export default School