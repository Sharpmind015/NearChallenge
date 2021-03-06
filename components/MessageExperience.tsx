import {FC} from 'react'
import Link from 'next/link'

interface Props {
  message: string,
  name: string,
  time: string,
}

const MessageExperience : FC<Props> = ({message, name, time}) => {
  return (
    <Link href="/offer/1" >
      <a className='flex flex-col items-start justify-between ml-5'>
        <p className='text-sm leading-5 mb-1'>
          <span className='text-accent-100 mr-1'>{name}</span>
          <span className='text-gray-200'>{message}</span>
        </p>
        <p className='text-12px leading-4 text-gray-300'>{time}</p>
      </a>
  </Link>
  )
} 

export default MessageExperience;