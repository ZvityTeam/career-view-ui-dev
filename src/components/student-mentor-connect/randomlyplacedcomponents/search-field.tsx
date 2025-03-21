import { History, MousePointer, Search, Settings2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const SearchFieldComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [hoverIndex, setHoverIndex] = useState(0);
  const options = ['Programming', 'Programmer', 'Promotion', 'Pilot', 'Doctor'];

  // Looping typing animation for "Pro"
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
    }, 1500); // 1500ms per step for smooth typing/deleting

    return () => clearInterval(typeInterval); // Cleanup interval on unmount
  }, []);

  // Memoized filtered options based on searchText
  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      ),
    [searchText]
  );

  // Hover animation for MousePointer cycling through options
  useEffect(() => {
    if (filteredOptions.length > 0) {
      const interval = setInterval(() => {
        setHoverIndex((prev) => (prev + 1) % filteredOptions.length);
      }, 1000); // Cycle every 1000ms
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [filteredOptions]);

  return (
    <div className='relative w-80 rounded-xl bg-white p-4 shadow-md'>
      {/* Search field with typing animation and blinking cursor */}
      <div className='flex items-center rounded-md bg-white p-2 shadow'>
        <div className='flex-1 px-2 text-gray-700'>
          {searchText}
          <span className='animate-blink'>|</span>
        </div>
        <button className='text-gray-500 hover:text-gray-700'>
          <Settings2 size={20} />
        </button>
        <button className='ml-2'>
          <Search
            size={20}
            className='h-8 w-8 rounded bg-slate-950 p-1 text-white'
          />
        </button>
      </div>

      {/* Filtered options list with animated MousePointer */}
      <ul className='mt-2 rounded-md bg-white font-light text-neutral-700 shadow'>
        {filteredOptions.map((option, index) => (
          <li
            key={index}
            className={
              'flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100' +
              (index === hoverIndex ? ' bg-gray-100' : '')
            }
          >
            <History
              size={16}
              className='text-gray-400'
            />
            <span>{option}</span>
            {/* Subtle pulsing animation on MousePointer */}
            {index === hoverIndex && (
              <MousePointer
                size={16}
                className='mx-auto animate-pulse text-blue-500'
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFieldComponent;
