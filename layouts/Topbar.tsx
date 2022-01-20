import Image from 'next/image';
import {FC} from 'react';


const Topbar : FC = () => {
  return (
    <header className="flex justify-between items-center bg-gray-700 py-3 px-6 flex-wrap">
      <Image src="/arrow.svg" width="20" height="22" alt="" />
      <Image src="/bookmark.svg" width="20" height="22" alt="" />
      <div className='pl-3 pr-4 flex justify-between items-center py-3 bg-white rounded-30px' >
        <Image src="/profile.svg" width="26" height="26" alt="" />
        <h3 className='heading heading--1 ml-2 mr-4'>Johndoe.near</h3>
        <Image src="/arrowdown.svg" width="12" height="8" alt="" />
      </div>
      <Image src="/notification.svg" width="26" height="26" alt="" />
      <Image src="/settings.svg" width="26" height="26" alt="" />
    </header>
  )
} 

export default Topbar;