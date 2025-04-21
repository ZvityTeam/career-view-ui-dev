import React from 'react';
import { OutlinedInputWithButton } from '../input-box/InputBox';
import { Send } from 'lucide-react';
import { FOOTER_NAV_ITEMS } from '../navbar/NavbarConfig.ts';
import { FooterLink } from './footerlink/FooterLink.tsx';
import bg1 from '../svgs/bg-1.svg';
import bg2 from '../svgs/bg-2.svg';
import star from '../svgs/footer-star.svg';

interface FooterProps {
  /** Optional: You can pass in a background image or just rely on a CSS background */
  backgroundImageUrl?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='relative w-full overflow-hidden bg-[linear-gradient(165deg,_#000000,_#272727,_#6E6E6E)] text-white'>
      <img
        src={bg1}
        alt={''}
        className={'pointer-events-none absolute -left-[10%] bottom-0 z-10'}
      />
      <img
        src={bg2}
        alt={''}
        className={'pointer-events-none absolute right-0 top-0 z-10'}
      />
      <div className='flex pb-10 justify-between px-44'>
        <div className='flex max-w-2xl flex-col gap-7 p-24'>
          {/* Multiline heading */}
          <h4 className='z-20 text-5xl font-bold leading-tight'>
            <span className='relative'>
              <span className='absolute -left-[70%] italic'>Let’s</span>Connect
            </span>
            <br />
            Communicate <br />
            Network.
          </h4>

          {/* Subtext */}
          <p className='z-20 text-lg text-gray-200'>
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
          <div className='z-20 mt-12 flex gap-16 text-2xl underline'>
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
        <div className='z-20 flex flex-col gap-8 p-24 pb-0 text-right text-3xl max-w-md'>
          {FOOTER_NAV_ITEMS.map((item, index) => (
            <FooterLink
              key={index}
              to={item.link}
              label={item.label}
            />
          ))}
        </div>
      </div>

      <div className='z-20 grid place-items-center'>
        <h4 className='relative z-20 text-[200px]'>
          <img
            src={star}
            alt={''}
            className={'pointer-events-none absolute -top-1/3 left-0 z-10'}
          />
          CareerView
        </h4>
      </div>
    </footer>
  );
};
