import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

interface Props {
  src: string,
  message: string,
  time: string,
  name: string
}

const Message : FC<Props> = ({src, message, time, name}) => {
  return (
    <Link href='' >
      <a className={`flex justify-between items-start mt-4 w-full`}>
        <Image src={src} width='35' height='35' alt='' />
        <div className='flex flex-col items-start justify-between ml-5'>
          <p className='text-sm leading-5 mb-1'>
            <span className='text-accent-100 mr-1'>{name}</span>
            <span className='text-gray-100'>{message}</span>
          </p>
          <p className='text-12px leading-4 text-gray-300'>{time}</p>
        </div>
      </a> 
    </Link>
  )
} 

export default Message;