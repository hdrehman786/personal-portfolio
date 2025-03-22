import React from 'react';
import RevealOnScrll from '../RevealOnScrll';

const Home = () => {
  return (
    <section className='flex items-center justify-center relative min-h-screen' id='home'>
      <RevealOnScrll>
      <div className='text-center z-10 px-4'>
        <h1 className='text-5xl md:text-7xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 
         bg-clip-text text-transparent leading-tight'>
          Hi, I'm HD Rehman
        </h1>

        <p className=' text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
          I'm a software engineer with a passion for building scalable and efficient systems. I'm always looking
          for opportunities to contribute to innovative projects.
        </p>

        <div className=' flex justify-center space-x-4 '>
          <a href="#projects" className=' bg-blue-500 text-white py-3 px-6 rounded font-mediumt transition 
          relative overflow-hidden hover:translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.40)]
          '>
            View Projects
          </a>
          <a href="#contacts" className='border border-blue-500/50 text-blue-500 rounded px-6 py-3 transition-all duration-200 
          hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.2)] hover:bg-500/50
          '>
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScrll>
    </section>
  );
};

export default Home;