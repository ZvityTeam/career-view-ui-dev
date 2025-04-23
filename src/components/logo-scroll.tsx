// Importing images with correct extensions
import logo3 from '../assets/schools/image10.png';
import logo4 from '../assets/schools/image11png.png';
import logo7 from '../assets/schools/image12.png';
import logo10 from '../assets/schools/image2.png';
import logo14 from '../assets/schools/image3.png';
import logo18 from '../assets/schools/image4.png';
import logo21 from '../assets/schools/image5.png';
import logo24 from '../assets/schools/image6.png';
import logo25 from '../assets/schools/image7.png';
import logo26 from '../assets/schools/image8.png';
import logo28 from '../assets/schools/image9.png';
import { Marquee } from './marquee/Marquee';
import { SectionHeader } from './section-header/SectionHeader';

// Array of logos for easy mapping
const logos = [
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
];

const DoubleScrollingLogos = () => {
  return (
    <section className='mt-36 flex flex-col items-center justify-center space-y-20 py-4'>
      <SectionHeader
        title={'Our Partners'}
        className=''
      />
      <Marquee
        pauseOnHover
        className='mt-4 h-48'
      >
        <LogoItems />
      </Marquee>
    </section>
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
    <img
      src={src}
      alt='logo'
      className='mx-10 h-auto max-w-lg'
    />
  );
};

export default DoubleScrollingLogos;
