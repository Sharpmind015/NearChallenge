import { useState, FC, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const useModalWrapper : (children: JSX.Element, title: JSX.Element, description: string) => 
{
 ModalWrapper: FC<{}>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
} = (children , title , description ) => {
  let [isOpen, setIsOpen] = useState(false)

  
    const ModalWrapper : FC = () => (
        <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog className="fixed z-50 inset-0 overflow-y-auto" open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex items-start justify-center min-h-screen">
            <Dialog.Overlay  className="fixed inset-0 bg-gray-100 opacity-40" />
            <div className="relative bg-white rounded-md shadow-md w-5/6 mx-auto mt-16 px-6 pt-5 pb-7">
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description className='visuallyHidden'>
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
      </Transition>
    )

    return {
      ModalWrapper,
      isOpen,
      setIsOpen
    }
}

export default useModalWrapper;