import React from 'react'

const Contact = () => {
  return (
    <div name= 'contact' className='w-full h-screen bg-black flex justify-center items-center p-4' >
        <form method = "POST" action="https://getform.io/f/7da41f6b-04da-4b3c-8dd5-7895b45dcfb6" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-white text-white'> Contact</p>
            </div>
            <input className='bg-white my-2 p-2' type='text' placeholder='Name' name='name'/>
            <input className='my-4 bg-white p-2' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-white my-2 p-2' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-white hover:text-black my-2 px-4 py-3 items-center mx-auto flex'>Submit</button>
        </form>
    </div>
  )
}

export default Contact