import {FC} from 'react';

interface Props {
  offer: string,
  name: string,
  time: string,
}

const MessageOffer : FC<Props> = ({offer, name, time}) => {
  return (
    <div className='flex flex-col items-start justify-between ml-5'>
      <p className='text-sm leading-5 mb-1'>
        <span className='text-accent-100 mr-1'>{name}</span>
        <span className='text-gray-300 mr-1'>made an offfer of</span>
        <span className='text-gray-100'>{offer}</span>
      </p>
      <p className='text-12px leading-4 text-gray-300'>{time}</p>
      <div className='flex mt-2'>
        <button className='rounded-md text-white py-1 px-2 bg-gray-100 text-12px leading-5.5 font-semibold mr-2
        '>Accept</button>
        <button className='rounded-md text-white py-1 px-2 bg-gray-100 text-12px leading-5.5 font-semibold mr-2'>Counter Offer</button>
        <button className='rounded-md text-gray-100 py-1 px-2 bg-white border-black border-2 text-12px leading-5.5 font-semibold'>Reject</button>
      </div>
  </div>
  )
} 

export default MessageOffer;