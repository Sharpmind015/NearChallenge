import {FC} from 'react';

interface Props {
  type: 'trade' | 'mint',
  buyer: string,
  seller?: string,
  time: string,
  number: string,
  
}

const MessageTrade : FC<Props> = ({type, buyer, seller, number, time}) => {
  return (
    <div className='flex flex-col items-start justify-between ml-5'>
      <p className='text-sm leading-5 mb-1 text-gray-300 font-semibold'>
        <span className={`${type === 'trade' ? 'text-gray-100 ' : 'text-accent-100 '} mr-1`}>{buyer}</span>
        { type=== 'trade' && 'bought '}
        { type=== 'mint' && 'minted '}
        <span className='text-gray-100 mr-1'>{number}</span>
        { type=== 'trade' && 'from '}
        { type=== 'trade' && <span className='text-accent-100 mr-1'>{seller}</span> }
      </p>
      <p className='text-12px leading-4 text-gray-300'>{time}</p>
  </div>
  )
} 

export default MessageTrade;