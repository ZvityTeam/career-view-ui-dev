import {
  ali_nasiriy,
  andrew_korol,
  georgia_parentich,
  hannah_ngo,
  libby_perica,
  matt_sankey,
  mitch_terry,
  raman_kahlon,
  tammy_lee,
} from '../assets/mentor_images';

// Order: mitch -> georgia -> raman -> hannah_ngo -> stuart_mayor -> tammy -> andrew -> libby -> ali
// Stuart is centered and largest; others scale down smoothly toward the edges.

const profiles = [
  {
    src: mitch_terry,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1] -mb-7',
    z: 'z-10',
  },
  {
    src: georgia_parentich,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.17] -mb-4',
    z: 'z-20',
  },
  {
    src: raman_kahlon,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.4] mb-1',
    z: 'z-30',
  },
  {
    src: hannah_ngo,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.4] mb-1',
    z: 'z-40',
  },
  {
    src: matt_sankey,
    size: 'h-56 sm:h-72 md:h-[28em] scale-[1.5]',
    z: 'z-50',
  },
  {
    src: tammy_lee,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.4] mb-1',
    z: 'z-40',
  },
  {
    src: andrew_korol,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.3] -mb-1',
    z: 'z-30',
  },
  {
    src: libby_perica,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.2] -mb-3',
    z: 'z-20',
  },
  {
    src: ali_nasiriy,
    size: 'h-56 sm:h-72 md:h-[22rem] scale-[1.1] -mb-5',
    z: 'z-10',
  },
];

function WhyChooseUsProfile() {
  return (
    <section className='absolute bottom-0 w-full overflow-hidden px-2 sm:px-4'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-end justify-start gap-0'>
          {profiles.map((p, i) => (
            <div
              key={i}
              className={`relative ${p.z} ${i > 0 ? '-ml-6 sm:-ml-8 md:-ml-12' : ''}`}
            >
              <img
                src={p.src}
                alt='profile'
                className={`${p.size} select-none object-contain drop-shadow-xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsProfile;
