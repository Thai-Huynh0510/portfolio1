import React from 'react'
import project1 from '../assets/project1.png'
const Project = () => {
  return (
    <div name='project' className='h-screen w-full bg-bg1 bg-cover' >
        <div className=' max-w-[1000] mx-auto p-3 flex flex-col items-center w-full h-full'>
        <div>
        <h1 className='text-3xl sm:text-7xl font-bold text-white text-center my-10'> Projects</h1>
        </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                
                <div style={{backgroundImage: `url(${project1})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-gray-100 tracking-wider'>
                        Albums Searcher
                    </span>
                    <div className='text-center'>
                        <a href='https://albumsearcher.netlify.app/' target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>visit</button>
                        </a>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project