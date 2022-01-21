import {FC} from 'react';
import { Disclosure } from '@headlessui/react'

interface Props {
  content: string
}

const Overview : FC<Props> = ({content}) => {
  return (
    <Disclosure as="article" className='mt-6'>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex justify-between w-full'>
            <h3 className='heading heading--1'>Overview</h3>
            <svg className={`${open ? "transform rotate-180" : ""} transition-transform`} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.64764 10.6667L8.98098 5.33333L14.3143 10.6667" stroke="#6F6E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className='mt-5 text-gray-200 text-sm leading-5.5 not-italic'>{content}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 

export default Overview;