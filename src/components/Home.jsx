import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import astro from '../assets/astro.gif';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  })
  return (
    <div name="home" className="w-full h-screen bg-bg bg-cover">
      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full text-[#FFFFD2]">
        <p className="inline-block overflow-hidden whitespace-nowrap font-mono animate-typing border-r-4 text-1xl">
          Hello, This is <br />
          <span className="text-2xl sm:text-3xl font-bold">Thai Huynh <br /> </span>
          <span className="sm:text-1xl font-bold">I'm a software engineer<br/></span>
          <span className='sm:text-1xl'>As a recent graduate, I understand the importance of staying ahead in tech. <br/>
          I am committed to continuous learning, 
          <br/>eager to add more tools to my developer's arsenal. </span>
        </p>
        <div data-aos='fade-up'>
        <div className='flex item-center justify-center'>
          <button className="talk-bubble tri-right btm-right text-white group border-2 px-6 py-3 flex items-center hover:bg-white hover:text-black animate-floatUpDown">
            <Link to="school" smooth={true}>
              Learn more about me
            </Link>
          </button> 
        </div>
        <div className="flex items-center justify-center ">
            <img
              src={astro}
              alt="astro"
              style={{ maxWidth: '100%', maxHeight: '250px', width: 'auto', height: 'auto' }}
            />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
