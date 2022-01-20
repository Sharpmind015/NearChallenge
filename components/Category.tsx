import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

interface Props {
  src: string,
  title: string,
  colorType: 'bg-blue-500' | 'bg-gray-700' | 'bg-green-100' | 'bg-pink-100' |  'bg-green-200' | 'bg-blue-600'
}

const Category : FC<Props> = ({src, title, colorType}) => {
  return (
    <Link href='' >
      <a className={`flex flex-col justify-between items-center mt-4 ${colorType} px-3 py-3`}>
        <Image src={src} width='35' height='35' alt='' />
        <div className='flex flex-wrap justify-between pt-4'>
          <h4 className=''></h4>
          <Image src='/arrowcategory.svg' width='4' height='8' alt='' />
        </div>
      </a> 
    </Link>
  )
} 

export default Category;