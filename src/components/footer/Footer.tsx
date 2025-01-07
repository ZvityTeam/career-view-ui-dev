import React from 'react';
import { OutlinedInputWithButton } from '../inputbox/InputBox';
import { Send } from 'lucide-react';

interface FooterProps {
  /** Optional: You can pass in a background image or just rely on a CSS background */
  backgroundImageUrl?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='w-full bg-primary text-white'>
      {/* If you need the height to cover the entire screen: */}
      <div className='min-h-screen'>
        <div className='max-w-xl space-y-7 p-24 pl-40'>
          {/* Multiline heading */}
          <h4 className='text-4xl font-bold leading-tight'>
            <span className='relative'>
              <span className='absolute -left-2/3 italic'>Let’s</span>Connect
            </span>
            <br />
            Communicate <br />
            Network.
          </h4>

          {/* Subtext */}
          <p className='text-lg text-gray-200'>
            Join our weekly newsletter for e-books, live sessions and event
            updates
          </p>

          {/* Outlined input with button/icon */}
          <OutlinedInputWithButton
            icon={<Send />}
            placeholder='Enter email address'
            onSubmit={(val) => alert(`Submitted: ${val}`)}
            containerClassName='w-full max-w-md border-2'
          />
        </div>
      </div>
      <div className='grid place-items-center'>
        <p className='text-[200px]'>CareerView</p>
      </div>
    </footer>
  );
};
