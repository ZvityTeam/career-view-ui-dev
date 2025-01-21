import React from 'react';
import { OutlinedInputWithButton } from '../input-box/InputBox';
import { Send } from 'lucide-react';
import { FOOTER_NAV_ITEMS } from '../navbar/NavbarConfig.ts';
import { FooterLink } from './footerlink/FooterLink.tsx';

interface FooterProps {
  /** Optional: You can pass in a background image or just rely on a CSS background */
  backgroundImageUrl?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='w-full bg-gradient-to-br from-black to-slate-700 text-white'>
      <div className='flex min-h-screen justify-between px-44'>
        <div className='flex max-w-2xl flex-col gap-7 p-24'>
          {/* Multiline heading */}
          <h4 className='text-5xl font-bold leading-tight'>
            <span className='relative'>
              <span className='absolute -left-[70%] italic'>Let’s</span>Connect
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

          {/* Policy Links */}
          <div className='mt-12 flex gap-16 text-2xl underline'>
            <FooterLink
              to='/privacy-policy'
              label='Privacy Policy'
            />
            <FooterLink
              to='/terms-and-conditions'
              label='Terms and Conditions'
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col gap-8 p-24 text-right text-3xl'>
          {FOOTER_NAV_ITEMS.map((item, index) => (
            <FooterLink
              key={index}
              to={item.link}
              label={item.label}
            />
          ))}
        </div>
      </div>

      <div className='grid place-items-center'>
        <h4 className='text-[200px]'>CareerView</h4>
      </div>
    </footer>
  );
};
