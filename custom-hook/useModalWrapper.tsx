import { useState, FC, Dispatch, SetStateAction } from 'react'
import { Dialog } from '@headlessui/react'

const useModalWrapper : (children: JSX.Element, title: JSX.Element, description: string) => 
{
 ModalWrapper: FC<{}>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} = (children , title , description ) => {
  let [isOpen, setIsOpen] = useState(true)

  
    const ModalWrapper : FC = () => (
      <Dialog className="fixed z-10 inset-0 overflow-y-auto" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex items-start justify-center min-h-screen">
          <Dialog.Overlay  className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded shadow-md w-5/6 mx-auto mt-16">
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>
              {description}
            </Dialog.Description>
            {children}
            <button className='absolute right-5 top-5' onClick={() => setIsOpen(false)}>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3142 2.66666L3.64758 13.3333M14.3142 13.3333L3.64758 2.66666L14.3142 13.3333Z" stroke="#6F6E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </Dialog>
    )

    return {
      ModalWrapper,
      isOpen,
      setIsOpen
    }
}

export default useModalWrapper;