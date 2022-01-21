import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

interface Props {
  src: string,
  children: JSX.Element
}

const Notification : FC<Props> = ({src, children}) => {
  return (
    <Link href='/' >
      <a className={`flex items-center mt-4 w-full h-fit`}>
        <Image className='object-cover' src={src} width='35' height='35' alt='' />
        {children}
      </a> 
    </Link>
  )
} 

export default Notification;