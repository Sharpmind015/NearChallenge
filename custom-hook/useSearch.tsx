import Image from 'next/image';
import {FC, useState} from 'react';


const useSearch = () => {
  const [search, setSearch] = useState<string>('');
  const onChange : (e : React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setSearch(e.target.value);
  }
  const Search : FC = () =>  (
    <form>
      <label className='relative' htmlFor='Search'>
        <Image className='absolute left-3' src="/search.svg" width='20' height='20' alt="" />
        <input value='search' onChange={onChange} className='px-8 py-3 text-gray-500 text-base bg-gray-700 rounded-lg' type="search" placeholder='Search experiences' />
      </label>
    </form>
  )
  return {
    search,
    setSearch,
    Search
  }
} 

export default useSearch;