import { Send } from 'lucide-react';
import React from 'react';
import { OutlinedInputWithButton } from '../input-box/InputBox';
import { FOOTER_NAV_ITEMS } from '../navbar/NavbarConfig.ts';
import bg1 from '../svgs/bg-1.svg';
import bg2 from '../svgs/bg-2.svg';
import star from '../svgs/footer-star.svg';
import { FooterLink } from './footerlink/FooterLink.tsx';

interface FooterProps {
  /** Optional: You can pass in a background image or just rely on a CSS background */
  backgroundImageUrl?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='relative pt-10 w-full overflow-hidden bg-[linear-gradient(165deg,_#000000,_#272727,_#6E6E6E)] text-white'>
      {/* Background Images */}
      <img
        src={bg1}
        alt=''
        className='pointer-events-none absolute -left-[10%] bottom-0 z-10 w-1/2 sm:w-1/3 lg:-left-[10%] lg:bottom-0 lg:w-auto'
      />
      <img
        src={bg2}
        alt=''
        className='pointer-events-none absolute right-0 top-0 z-10 w-1/2 sm:w-1/3 lg:right-0 lg:top-0 lg:w-auto'
      />

      {/* Main Content */}
      <div className='flex flex-col md:flex-row justify-between px-4 pb-6 sm:px-8 sm:pb-8 lg:flex lg:px-44 lg:pb-10'>
        {/* Left Section */}
        <div className='flex max-w-2xl flex-col gap-4 p-4 sm:gap-6 sm:p-8 lg:gap-7 lg:p-24'>
          {/* Multiline Heading */}
          <h4 className='z-20 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
            <span className='relative'>
              <span className=' italic mr-3 md:mr-5'>
                Let’s
              </span>
              Connect
            </span>
            <br />
            Communicate <br />
            Network.
          </h4>

          {/* Subtext */}
          <p className='z-20 text-base text-gray-200 sm:text-base lg:text-lg'>
            Join our weekly newsletter for e-books, live sessions and event
            updates
          </p>

          {/* Outlined Input with Button */}
          <OutlinedInputWithButton
            icon={<Send />}
            placeholder='Enter email address'
            onSubmit={(val) => alert(`Submitted: ${val}`)}
            containerClassName='w-full sm:w-3/4 lg:w-full max-w-md border-2'
          />

          {/* Policy Links */}
          <div className='z-20 mt-6 flex flex-col gap-4 text-lg underline sm:mt-8 sm:flex-col sm:gap-6 sm:text-xl lg:mt-12 lg:flex lg:gap-16 lg:text-2xl'>
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
        <div className='z-20 flex max-w-md flex-col gap-4 p-4 pb-0 text-center text-xl sm:gap-6 sm:p-8 sm:text-2xl lg:gap-8 lg:p-24 lg:text-right lg:text-3xl'>
          {FOOTER_NAV_ITEMS.map((item, index) => (
            <FooterLink
              key={index}
              to={item.link}
              label={item.label}
            />
          ))}
        </div>
      </div>

      {/* Bottom Branding */}
      <div className='z-20 grid place-items-center py-6 sm:py-8 lg:py-0'>
        <h4 className='relative z-20 text-5xl sm:text-7xl lg:text-[200px]'>
          <img
            src={star}
            alt=''
            className='pointer-events-none absolute -top-[20%] left-[10%] z-10 w-1/3 sm:-top-[15%] sm:left-[20%] sm:w-1/4 lg:-top-[50%] lg:left-6 lg:w-auto'
          />
          CareerView
        </h4>
      </div>
    </footer>
  );
};
