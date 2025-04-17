import logo1 from '../assets/schoolPageIllustrations/Picture1.png';
import logo3 from '../assets/schoolPageIllustrations/Picture2.png';
import logo2 from '../assets/schoolPageIllustrations/Picture3.png';
import { FaqSection } from './faqsection/FaqSection';

export const SupportedSchools = () => {
  return (
    <div className='mb-36 mt-36'>
      <div className='mt-28 flex flex-col items-center gap-10'>
        {/* Title */}
        <h1 className='text-4xl font-bold'>Schools We Have Supported</h1>

        {/* Logos */}
        <div className='flex flex-col gap-8 md:flex-row md:justify-between md:gap-12'>
          <div className='flex items-center justify-center'>
            <img
              src={logo1} // Replace with actual path to the first logo
              alt='Courage School Logo'
              className='h-40 w-auto' // Adjust size as needed
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src={logo2} // Replace with actual path to the second logo
              alt='Red Shield School Logo'
              className='h-40 w-auto' // Adjust size as needed
            />
          </div>
          <div className='flex items-center justify-center'>
            <img
              src={logo3} // Replace with actual path to the third logo
              alt='St Andrews School Logo'
              className='h-40 w-auto' // Adjust size as needed
            />
          </div>
        </div>
      </div>
      <FaqSection page='school' />
    </div>
  );
};
