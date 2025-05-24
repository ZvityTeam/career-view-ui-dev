import logo3 from '../assets/schools/image10.png';
// import logo4 from '../assets/schools/image11png.png';
// import logo7 from '../assets/schools/image12.png';
// import logo29 from '../assets/schools/image13.png';
import logo10 from '../assets/schools/image2.png';
import logo14 from '../assets/schools/image3.png';
import logo18 from '../assets/schools/image4.png';
import logo21 from '../assets/schools/image5.png';
import logo24 from '../assets/schools/image6.png';
import logo25 from '../assets/schools/image7.png';
import logo26 from '../assets/schools/image8.png';
// import logo28 from '../assets/schools/image9.png';
import schoolLogo from '../assets/schools/SchoolsWeWorkWith/image11png.png';
import schoolLogo1 from '../assets/schools/SchoolsWeWorkWith/image12.png';
import schoolLogo2 from '../assets/schools/SchoolsWeWorkWith/image13.png';
import schoolLogo3 from '../assets/schools/SchoolsWeWorkWith/image9.png';

import { Marquee } from './marquee/Marquee';
import { SectionHeader } from './section-header/SectionHeader';

const logos = [logo3, logo10, logo14, logo18, logo21, logo24, logo25, logo26];
const schoollogos = [schoolLogo, schoolLogo1, schoolLogo2, schoolLogo3];

const DoubleScrollingLogos = ({ from = 'home' }: { from?: string }) => {
  return (
    <section className='mt-20 mb-20 md:mt-40 md:mb-10 flex flex-col items-center justify-center space-y-20 px-4 py-4 sm:px-6 lg:px-8'>
      <SectionHeader
        title={from === 'home' ? 'Our Partners' : 'Schools We Work With'}
        className=''
      />
      <Marquee
        pauseOnHover
        className='lg:h-ful mt-4 h-32 w-full max-w-7xl sm:h-40 md:max-w-[90%]'
      >
        <LogoItems from={from} />
      </Marquee>
    </section>
  );
};

const LogoItems = ({ from }: { from?: string }) => (
  <>
    {(from === 'home' ? logos : schoollogos).map((src, index) => (
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
      className='mx-4 h-auto max-w-sm sm:mx-6 sm:max-w-md lg:mx-10 lg:max-w-xl'
    />
  );
};

export default DoubleScrollingLogos;
