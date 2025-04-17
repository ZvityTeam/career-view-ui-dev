/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import studentHeroImg from '../../assets/student_page/heroImg.png';

const StudentHero1 = () => {
  const containerRef = useRef(null);

  return (
    <div className='min-h-screen bg-[#272727] pt-24'>
      <div className='mx-2 flex flex-row items-center justify-between px-4'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='font-serif text-5xl text-[#FFD966] md:text-6xl'
          >
            Dream Big, Ask Bold
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='max-w-3xl text-lg text-gray-300 md:text-xl'
          >
            CareerView is your vision board for the future. Pin your dreams,
            explore career paths, and connect with mentors to make it happen.
          </motion.p>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='rounded-full bg-[#FFD966] px-6 py-3 text-[#272727] transition-colors hover:bg-[#e6c45c]'
          >
            Start Exploring
          </motion.button>
        </div>

        {/* Vision Board Section */}
        <div className='relative mt-12 flex w-full justify-center p-8'>
          <div
            ref={containerRef}
            className='relative mx-20 h-[70vh] w-full rounded-2xl border-[10px] border-[#b8860b] bg-gradient-to-br from-yellow-300 to-yellow-100 p-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)] md:w-[90%]'
          >
            <div className='h-full w-full overflow-hidden rounded-xl border-[8px] border-white bg-slate-100 shadow-inner'>
              <VisionNote
                containerRef={containerRef}
                text='What’s it like to work in AI?'
                color='bg-yellow-400'
                rotate='3deg'
                top='10%'
                left='15%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1516321310764-8d9a662da6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Laptop with code'
                rotate='-4deg'
                top='25%'
                left='30%'
              />
              <VisionNote
                containerRef={containerRef}
                text='How do I become a doctor?'
                color='bg-green-400'
                rotate='2deg'
                top='15%'
                left='55%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Stethoscope'
                rotate='-2deg'
                top='40%'
                left='20%'
              />
              <VisionNote
                containerRef={containerRef}
                text='Can I combine art & tech?'
                color='bg-pink-400'
                rotate='1deg'
                top='50%'
                left='45%'
              />
              <VisionNote
                containerRef={containerRef}
                text='Is entrepreneurship for me?'
                color='bg-blue-400'
                rotate='-3deg'
                top='30%'
                left='65%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1507238691749-d1d21c83640a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Sketchbook and pencils'
                rotate='2deg'
                top='60%'
                left='35%'
              />
              <VisionNote
                containerRef={containerRef}
                text='What skills for game design?'
                color='bg-purple-400'
                rotate='4deg'
                top='20%'
                left='35%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Game controller'
                rotate='-1deg'
                top='45%'
                left='60%'
              />
              <VisionNote
                containerRef={containerRef}
                text='How to start a business?'
                color='bg-orange-400'
                rotate='-2deg'
                top='65%'
                left='15%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Team meeting'
                rotate='3deg'
                top='10%'
                left='70%'
              />
              <VisionNote
                containerRef={containerRef}
                text='What’s a career in law like?'
                color='bg-red-400'
                rotate='1deg'
                top='35%'
                left='10%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Law books'
                rotate='-3deg'
                top='55%'
                left='70%'
              />
              <VisionNote
                containerRef={containerRef}
                text='Can I work remotely?'
                color='bg-teal-400'
                rotate='2deg'
                top='70%'
                left='50%'
              />
              <VisionImage
                containerRef={containerRef}
                src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                alt='Home office'
                rotate='4deg'
                top='20%'
                left='25%'
              />
            </div>
          </div>
          <div className='pointer-events-none absolute -bottom-10 left-0 right-0 z-10 flex justify-center text-white'>
            <img
              src={studentHeroImg}
              alt='Student Hero'
              className='h-[80%]'
            />
          </div>
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
      whileHover={{ scale: 1.02 }}
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
