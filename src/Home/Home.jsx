import React from 'react';

// SVG
import CodeSVG from './code.svg';

const Home = () => (
  <div className='flex flex-col p-2'>
    <h1 className='text-center py-2'>
      Hi, I&apos;m Mike. I&apos;m a Full Stack Developer based out of Upstate
      New York.
    </h1>
    <img className='w-full max-h-500 py-2' src={CodeSVG} alt='Person Coding' />
  </div>
);

export default Home;
