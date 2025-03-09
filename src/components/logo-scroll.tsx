import { motion } from 'framer-motion';

// Importing images with correct extensions
import logo2 from '../assets/schools/image2.png';
import logo3 from '../assets/schools/image3.png';
import logo4 from '../assets/schools/image4.png';
import logo7 from '../assets/schools/image7.png';
import logo10 from '../assets/schools/image10.png';
import logo14 from '../assets/schools/image14.png';
import logo18 from '../assets/schools/image18.png';
import logo21 from '../assets/schools/image21.png';
import logo24 from '../assets/schools/image24.png';
import logo25 from '../assets/schools/image25.png';
import logo26 from '../assets/schools/image26.png';
import logo28 from '../assets/schools/image28.png';
import logo30 from '../assets/schools/image30.png';
import logo31 from '../assets/schools/image31.png';

// Array of logos for easy mapping
const logos = [
  logo2,
  logo3,
  logo4,
  logo7,
  logo10,
  logo14,
  logo18,
  logo21,
  logo24,
  logo25,
  logo26,
  logo28,
  logo30,
  logo31,
];

const DoubleScrollingLogos = () => {
  return (
    <section className='bg-slate-100 py-4'>
      <div className='flex overflow-hidden'>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className='flex gap-4 px-2'
    >
      {children}
    </motion.div>
  );
};

// LogoItems maps through the array of image sources and renders them
const LogoItems = () => (
  <>
    {logos.map((src, index) => (
      <LogoItem
        key={index}
        src={src}
      />
    ))}
  </>
);

const LogoItem = ({ src }: { src: string }) => {
  return (
    <a
      href='#'
      rel='nofollow'
      target='_blank'
      className='flex h-16 w-16 items-center justify-center text-black transition-colors hover:bg-slate-200 md:h-24 md:w-24'
    >
      <img
        src={src}
        alt='logo'
        className='h-auto max-w-full'
      />
    </a>
  );
};

export default DoubleScrollingLogos;
