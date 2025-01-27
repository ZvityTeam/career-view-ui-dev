import { useState } from 'react';
import { History, Search, Settings2 } from 'lucide-react';

const SearchFieldComponent = () => {
  const [searchText] = useState('');
  const options = ['Psychologist', 'Pilot', 'Doctor', 'Engineering'];

  return (
    <div className='relative w-80 rounded-xl bg-white p-4 shadow-md'>
      <div className='flex items-center rounded-md bg-white p-2 shadow'>
        <input
          type='text'
          placeholder='Search Fields'
          value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
          className='flex-1 bg-transparent px-2 text-gray-700 outline-none'
        />
        <button className='text-gray-500 hover:text-gray-700'>
          <Settings2 size={20} />
        </button>
        <button className='ml-2'>
          <Search
            size={20}
            className={'h-8 w-8 rounded bg-slate-950 p-1 text-white'}
          />
        </button>
      </div>
      <ul className='mt-2 rounded-md bg-white font-light text-neutral-700 shadow'>
        {options
          .filter((option) =>
            option.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((option, index) => (
            <li
              key={index}
              className='flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100'
            >
              <History
                size={16}
                className='text-gray-400'
              />
              <span>{option}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchFieldComponent;
