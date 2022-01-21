import {FC} from 'react'
import AcceptModal from './AcceptModal'
import CounterModal from './CounterModal'
import RejectModal from './Rejectmodal'
import useModalWrapper from '../custom-hook/useModalWrapper'

interface Props {
  offer: string,
  name: string,
  time: string,
}

const MessageOffer : FC<Props> = ({offer, name, time}) => {
  const {ModalWrapper : AcceptModalWrapper, isOpen: isAcceptOpen, setIsOpen: setIsAcceptOpen} = useModalWrapper(<AcceptModal />, <span className='text-base leading-5.5 font-semibold text-gray-200'>Accept Offer</span>, 'Share this experience')
  const {ModalWrapper: CounterModalWrapper, isOpen: isCounterOpen, setIsOpen: setIsCounterOpen} = useModalWrapper(<CounterModal />, <span className='text-base leading-5.5 font-semibold text-gray-200'>Make Counter Offer</span>, 'Share this experience')
  const {ModalWrapper: RejectModalWrapper, isOpen: isRejectOpen, setIsOpen: setIsRejectOpen} = useModalWrapper(<RejectModal />, <span className='text-base leading-5.5 font-semibold text-gray-200'>Reject Offer</span>, 'Share this experience')
  return (
    <div className='flex flex-col items-start justify-between ml-5'>
      <AcceptModalWrapper />
      <CounterModalWrapper />
      <RejectModalWrapper />
      <p className='text-sm leading-5 mb-1'>
        <span className='text-accent-100 mr-1'>{name}</span>
        <span className='text-gray-300 mr-1'>made an offfer of</span>
        <span className='text-gray-100'>{offer}</span>
      </p>
      <p className='text-12px leading-4 text-gray-300'>{time}</p>
      <div className='flex mt-2'>
        <button onClick={() => setIsAcceptOpen(true)} className='rounded-md text-white py-1 px-2 bg-gray-100 text-12px leading-5.5 font-semibold mr-2
        '>Accept</button>
        <button onClick={() => setIsCounterOpen(true)} className='rounded-md text-white py-1 px-2 bg-gray-100 text-12px leading-5.5 font-semibold mr-2'>Counter Offer</button>
        <button onClick={() => setIsRejectOpen(true)} className='rounded-md text-gray-100 py-1 px-2 bg-white border-black border-2 text-12px leading-5.5 font-semibold'>Reject</button>
      </div>
  </div>
  )
} 

export default MessageOffer;