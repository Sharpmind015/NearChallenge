import Image from 'next/image';
import {FC} from 'react';

interface Props {
  src: string,
  children: JSX.Element
}

const Notification : FC<Props> = ({src, children}) => {
  return (
    <div className={`flex items-center mt-4 w-full h-fit`}>
      <Image className='object-cover' src={src} width='35' height='35' alt='' />
      {children}
    </div> 
  )
} 

export default Notification;