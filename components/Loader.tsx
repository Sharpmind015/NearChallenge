import {FC} from 'react';

const Loader : FC  = () => {
  return (
    <div className='bg-accent-100 flex items-center justify-center h-screen w-full'>
      <span className="flex h-10 w-10">
        <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-10 w-10 bg-white"></span>
      </span>
    </div>
  )
} 

export default Loader;