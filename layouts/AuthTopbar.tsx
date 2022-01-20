import Image from 'next/image';
import {FC} from 'react';

interface Props {
  type: string,
  title?: string

}

const AuthTopbar : FC<Props> = ({type, title}) => {
  return (
    <div className="w-full bg-gray-700 py-3 flex justify-center items-center relative">
      {type === "homeAuth" && <Image src="./HomepageLogo.png" alt="" height="22" width="105" />}
      {type === "progressAuth" && (
        <div>
          <h1 className='text-base font-semibold leading-5.5 not-italic'>{title}</h1>
          <svg className='absolute top-3 right-3' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.12" d="M12.981 24C19.6084 24 24.981 18.6274 24.981 12C24.981 5.37258 19.6084 0 12.981 0C6.35354 0 0.980957 5.37258 0.980957 12C0.980957 18.6274 6.35354 24 12.981 24Z" fill="#6F6E73"/>      
          </svg>
        </div>
      )}
    </div>
  )
} 

export default AuthTopbar;