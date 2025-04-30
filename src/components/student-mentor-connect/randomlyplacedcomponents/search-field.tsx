import { History, MousePointer, Search, Settings2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const SearchFieldComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [hoverIndex, setHoverIndex] = useState(0);
  const options = ['Programming', 'Programmer', 'Promotion', 'Pilot', 'Doctor'];

  useEffect(() => {
    const typingWord = 'Pro';
    let displayLength = 0;
    let direction = 'forward';

    const typeInterval = setInterval(() => {
      if (direction === 'forward') {
        displayLength += 1;
        setSearchText(typingWord.slice(0, displayLength));
        if (displayLength === typingWord.length) {
          direction = 'backward';
        }
      } else {
        displayLength -= 1;
        setSearchText(typingWord.slice(0, displayLength));
        if (displayLength === 0) {
          direction = 'forward';
        }
      }
    }, 1500);

    return () => clearInterval(typeInterval);
  }, []);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      ),
    [searchText]
  );

  useEffect(() => {
    if (filteredOptions.length > 0) {
      const interval = setInterval(() => {
        setHoverIndex((prev) => (prev + 1) % filteredOptions.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [filteredOptions]);

  return (
    <div className='relative w-[200px] rounded-lg bg-white p-3 shadow-md sm:w-[260px] sm:rounded-xl sm:p-4 lg:w-[320px]'>
      <div className='flex items-center rounded-md bg-white p-1 shadow sm:p-2'>
        <div className='flex-1 px-1 text-sm text-gray-700 sm:px-2 sm:text-base'>
          {searchText}
          <span className='animate-blink'>|</span>
        </div>
        <button className='text-gray-500 hover:text-gray-700'>
          <Settings2 className='sm:h-4.5 sm:w-4.5 h-4 w-4 lg:h-5 lg:w-5' />
        </button>
        <button className='ml-1 sm:ml-2'>
          <Search className='h-6 w-6 rounded bg-slate-950 p-1 text-white sm:h-7 sm:w-7 lg:h-8 lg:w-8' />
        </button>
      </div>
      <ul className='mt-1 rounded-md bg-white text-xs font-light text-neutral-700 shadow sm:mt-2 sm:text-sm'>
        {filteredOptions.map((option, index) => (
          <li
            key={index}
            className={
              'flex cursor-pointer items-center gap-1 px-2 py-1 hover:bg-gray-100 sm:gap-2 sm:px-3 sm:py-2' +
              (index === hoverIndex ? ' bg-gray-100' : '')
            }
          >
            <History className='h-3 w-3 text-gray-400 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4' />
            <span>{option}</span>
            {index === hoverIndex && (
              <MousePointer className='mx-auto h-3 w-3 animate-pulse text-blue-500 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4' />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFieldComponent;
