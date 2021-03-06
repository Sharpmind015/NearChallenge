import Link from 'next/link';
import {FC} from 'react';

interface Props {
  title: string
}

const SeeAllContainer : FC<Props> = ({title}) => {
  return (
    <div className='flex justify-between items-center mt-6 mb-4'>
      <h3 className='heading heading--2'>{title}</h3>
      <div>
        <Link href=''>
          <a className='text-sm text-accent-200 not-italic font-semibold inline-block'>
            <span className='inline-block mr-3'>See All</span>
              <svg className='inline-block' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.705766 2.70577C0.315978 2.31598 0.318104 1.68189 0.70607 1.29392L0.793916 1.20608C1.18387 0.816121 1.8135 0.813508 2.20798 1.20799L7.29201 6.29201C7.68302 6.68302 7.68648 7.31351 7.29201 7.70799L2.20798 12.792C1.81697 13.183 1.18188 13.1819 0.793916 12.7939L0.70607 12.7061C0.316114 12.3161 0.312765 11.6872 0.705766 11.2942L4.99999 7L0.705766 2.70577Z" fill="#885FFF"/>
              </svg>
            </a>
          </Link>
        </div>
    </div>
  )
} 

export default SeeAllContainer;