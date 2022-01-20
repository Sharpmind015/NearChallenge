import Image from 'next/image';
import {FC} from 'react';

interface Props {
  type: "homeAuth" | "progressAuth",
  title?: string

}

const AuthTopbar : FC<Props> = ({type, title}) => {
  return (
    <div className="w-full bg-gray-700 py-4 flex justify-center items-center relative">
      {type === "homeAuth" && <Image src="/HomepageLogo.png" alt="" height="22" width="105" />}
      {type === "progressAuth" && (
        <div>
          <h1 className='text-base font-semibold leading-5.5 not-italic'>{title}</h1>
          <svg className='absolute top-1/2 -translate-y-1/2 right-3.5 text-black' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.12" d="M12.981 24C19.6084 24 24.981 18.6274 24.981 12C24.981 5.37258 19.6084 0 12.981 0C6.35354 0 0.980957 5.37258 0.980957 12C0.980957 18.6274 6.35354 24 12.981 24Z" fill="#6F6E73"/>
            <path d="M17.7174 7.2636C18.0688 7.61508 18.0688 8.18492 17.7174 8.5364L14.254 12L17.7174 15.4636C18.0395 15.7858 18.0664 16.2915 17.7979 16.6442L17.7174 16.7364C17.3659 17.0879 16.796 17.0879 16.4446 16.7364L12.981 13.273L9.51735 16.7364C9.16588 17.0879 8.59603 17.0879 8.24456 16.7364C7.89309 16.3849 7.89309 15.8151 8.24456 15.4636L11.708 12L8.24456 8.5364C7.92238 8.21421 7.89553 7.70853 8.16402 7.35577L8.24456 7.2636C8.59603 6.91213 9.16588 6.91213 9.51735 7.2636L12.981 10.727L16.4446 7.2636C16.796 6.91213 17.3659 6.91213 17.7174 7.2636Z" fill="#6F6E73"/>
          </svg>
        </div>
      )}
    </div>
  )
} 

export default AuthTopbar;