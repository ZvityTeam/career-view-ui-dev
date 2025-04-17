import logo2 from '../assets/schools/image2.jpeg'; // ED CONNECT Australia
import logo3 from '../assets/schools/image3.jpg'; // ARC
import logo4 from '../assets/schools/image4.jpg'; // Csmith
import logo5 from '../assets/schools/image5.jpg'; // Fertility North
import logo6 from '../assets/schools/image6.png'; // GIORGI
import logo7 from '../assets/schools/image7.png'; // 3W Physio (Csmith)
import logo8 from '../assets/schools/image8.png'; // St Andrews
import logo9 from '../assets/schools/image9.png'; // Ursula Frayne

const DoubleScrollingLogos = () => {
  return (
    <section className='bg-slate-100 py-4'>
      <div className='flex justify-around'>
        {/* Non For Profits Section */}
        <div className='flex flex-col items-center'>
          <h3 className='mb-4 text-lg font-bold'>Non For Profits</h3>
          <div className='flex flex-row gap-4'>
            <LogoItem
              src={logo5}
              alt='Ed Connect'
            />
            <LogoItem
              src={logo2}
              alt='ED CONNECT Australia'
            />
          </div>
        </div>

        {/* Commercial Companies Section */}
        <div className='flex max-w-xl flex-col items-center'>
          <h3 className='mb-4 text-lg font-bold'>Commercial Companies</h3>
          <div className='flex flex-row gap-4'>
            <LogoItem
              src={logo3}
              alt='ARC'
            />
            <LogoItem
              src={logo4}
              alt='Csmith'
            />

            <LogoItem
              src={logo6}
              alt='GIORGI'
            />
            <LogoItem
              src={logo7}
              alt='3W Physio'
            />
          </div>
        </div>

        {/* Schools Section */}
        <div className='flex flex-col items-center'>
          <h3 className='mb-4 text-lg font-bold'>Schools</h3>
          <div className='flex flex-row gap-4'>
            <LogoItem
              src={logo8}
              alt='St Andrews'
            />
            <LogoItem
              src={logo9}
              alt='Ursula Frayne'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <a
      href='#'
      rel='nofollow'
      target='_blank'
      className='flex h-16 w-16 items-center justify-center text-black transition-colors hover:bg-slate-200 md:h-24 md:w-24'
    >
      <img
        src={src}
        alt={alt}
        className='h-auto max-w-full'
      />
    </a>
  );
};

export default DoubleScrollingLogos;
