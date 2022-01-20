import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

interface Props {
  src: string,
  title: string,
  description: string,
  users: string
}

const RecentExperience : FC<Props> = ({src, title, description, users}) => {
  return (
    <Link href='' >
      <a className='flex flex-wrap'>
        <div className='flex flex-wrap'>
          <Image src={src} width='69' height='69' alt='' />
          <div className='ml-4'>
            <h4 className='heading heading--2'>{title}</h4>
            <p className='text-gray-800 text-12px font-medium leading-4 mt-1'>{description}</p>
            <p className='text-12px font-medium leading-5 not-italic text-blue-100 mb-1'>{users}</p>
          </div>
        </div>
        <Image src='arrowleft.svg' width='6' height='11' alt='' />
      </a> 
    </Link>
  )
} 

export default RecentExperience;