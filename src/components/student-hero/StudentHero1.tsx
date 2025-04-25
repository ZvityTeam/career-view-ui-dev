/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import img2 from '../../assets/student_page/011-1 - Nagham Saleh.webp';
import img1 from '../../assets/student_page/IMG_3965 - Logan Dongray (Custom).jpeg';
import img3 from '../../assets/student_page/IMG_8500 - Neeka Zand.jpeg';
import pilotImg from '../../assets/student_page/inbound3005804398879643555 - Andrew Korol Resized.jpg';
import studentImg from '../../assets/student_page/studentHero.png';
import studentImg1 from '../../assets/student_page/studentHero1.png';

const StudentHero1 = () => {
  const containerRef = useRef(null);

  return (
    <div className='w-full overflow-hidden bg-primary pt-[10vh]'>
      <div
        ref={containerRef}
        className='relative h-[87vh] w-full rounded-2xl'
      >
        <svg
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 h-full w-full'
          style={{ backgroundColor: '#272727' }}
        >
          <defs>
            <pattern
              id='grid-pattern'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M40 0.5H0.5V40'
                fill='none'
                stroke='#374151'
                strokeOpacity='0.3'
                strokeWidth='1'
              />
            </pattern>
          </defs>
          <rect
            width='100%'
            height='100%'
            fill='url(#grid-pattern)'
          />
        </svg>
        <div className='relative h-full w-full overflow-hidden rounded-xl'>
          <img
            src={studentImg}
            alt='Student Hero'
            className='absolute left-20 top-[42%] h-auto object-cover'
          />
          <img
            src={studentImg1}
            alt='Student Hero'
            className='absolute right-0 top-[42%] h-auto object-cover'
          />
          <motion.div
            className='absolute left-0 top-1/3 z-[1000] w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <h1 className='text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl md:text-7xl lg:text-8xl'>
              Shape Your <span className='text-yellow-500'>Future</span>
            </h1>
          </motion.div>
          <VisionNote
            containerRef={containerRef}
            text='What’s it like to work in AI?'
            color='bg-yellow-400'
            rotate='3deg'
            top='10%'
            left='10%'
          />
          <VisionImage
            containerRef={containerRef}
            src={img1}
            alt='Pilot Img'
            rotate='-4deg'
            top='10%'
            left='25%'
          />
          <VisionNote
            containerRef={containerRef}
            text='How do I become a doctor?'
            color='bg-green-400'
            rotate='2deg'
            top='15%'
            left='60%'
          />
          <VisionImage
            containerRef={containerRef}
            src='https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
            alt='restaurant'
            rotate='-2deg'
            top='30%'
            left='10%'
          />
          <VisionNote
            containerRef={containerRef}
            text='Can I combine art & tech?'
            color='bg-pink-400'
            rotate='1deg'
            top='55%'
            left='50%'
          />
          <VisionNote
            containerRef={containerRef}
            text='Is entrepreneurship for me?'
            color='bg-blue-400'
            rotate='-3deg'
            top='25%'
            left='70%'
          />
          <VisionImage
            containerRef={containerRef}
            src='https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
            alt='Sketchbook and pencils'
            rotate='2deg'
            top='65%'
            left='30%'
          />
          <VisionNote
            containerRef={containerRef}
            text='What skills for game design?'
            color='bg-purple-400'
            rotate='4deg'
            top='15%'
            left='30%'
          />
          <VisionImage
            containerRef={containerRef}
            src='https://images.unsplash.com/photo-1576280314550-773c50583407?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
            alt='Game controller'
            rotate='-1deg'
            top='45%'
            left='65%'
          />
          <VisionNote
            containerRef={containerRef}
            text='How to start a business?'
            color='bg-orange-400'
            rotate='-2deg'
            top='52%'
            left='23%'
          />
          <VisionImage
            containerRef={containerRef}
            src={img3}
            alt='Team meeting'
            rotate='3deg'
            top='10%'
            left='75%'
          />
          <VisionNote
            containerRef={containerRef}
            text='What’s a career in law like?'
            color='bg-red-400'
            rotate='1deg'
            top='30%'
            left='5%'
          />
          <VisionImage
            containerRef={containerRef}
            src={img2}
            alt='Law books'
            rotate='-15deg'
            top='60%'
            left='68%'
          />
          <VisionNote
            containerRef={containerRef}
            text='Can I work remotely?'
            color='bg-teal-400'
            rotate='2deg'
            top='75%'
            left='55%'
          />
          <VisionImage
            containerRef={containerRef}
            src={pilotImg}
            alt='Home office'
            rotate='4deg'
            top='20%'
            left='20%'
          />
        </div>
      </div>
    </div>
  );
};

const VisionNote = ({ containerRef, text, color, rotate, top, left }: any) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll('.vision-note, .vision-image');
    let maxZIndex = Number.NEGATIVE_INFINITY;

    els.forEach((el) => {
      const zIndex = Number.parseInt(
        window.getComputedStyle(el).getPropertyValue('z-index')
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={`vision-note absolute h-auto w-40 cursor-pointer p-4 md:w-48 ${color} rounded-2xl border border-white/20 bg-gradient-to-br from-white/60 to-white/30 shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur-md hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]`}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
    >
      <p className='font-semibold text-[#1f1f1f] drop-shadow-sm'>{text}</p>
    </motion.div>
  );
};

const VisionImage = ({ containerRef, src, alt, rotate, top, left }: any) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll('.vision-note, .vision-image');
    let maxZIndex = Number.NEGATIVE_INFINITY;

    els.forEach((el) => {
      const zIndex = Number.parseInt(
        window.getComputedStyle(el).getPropertyValue('z-index')
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      src={src}
      alt={alt}
      style={{ top, left, rotate, zIndex }}
      className='vision-image absolute h-32 w-32 cursor-pointer rounded-lg object-cover shadow-md md:h-40 md:w-40'
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    />
  );
};

export default StudentHero1;
