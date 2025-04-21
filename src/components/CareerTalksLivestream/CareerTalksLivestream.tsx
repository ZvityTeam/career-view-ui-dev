import { Hourglass, Network, Search } from 'lucide-react';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export const CareerTalksLivestream = () => {
  // Heading and top text
  const heading = {
    title: 'What is Career Talks Livestream?',
    subtitle:
      'This fully online and interactive livestream allows students to engage directly with young professionals from various industries in a safe, structured, and engaging environment. You can select the number of speakers you’d like, and we will take care of all the logistics to ensure an impactful session.',
  };

  // Three items with icons
  const items = [
    {
      icon: <Hourglass size={120} />,
      title: 'Reduce Time!',
      subtitle: 'On average 6-8 weeks',
    },
    {
      icon: <Network size={120} />,
      title: 'Easy Industry Access',
      subtitle: '12 Different industries',
    },
    {
      icon: <Search size={120} />,
      title: 'Uncover Insights',
      subtitle: 'Actionable Data',
    },
  ];

  return (
    <CurvedWrapper className='mb-36'>
      <div className='flex max-w-5xl flex-col items-center justify-center gap-12'>
        {/* Heading and top text */}
        <div className='text-center'>
          <h1 className='mb-6 text-5xl font-extrabold text-black'>
            {heading.title}
          </h1>
          <p className='mb-8 text-xl text-black'>{heading.subtitle}</p>
        </div>

        {/* Three items with icons and text */}
        <div className='flex flex-col gap-16 md:flex-row md:justify-between'>
          {items.map((item, idx) => (
            <div
              key={idx}
              className='text-center md:w-1/3'
            >
              <div className='mb-6 flex justify-center'>
                <div className='rounded-full bg-lightYellow p-4'>
                  {item.icon}
                </div>
              </div>
              <h2 className='mb-4 text-3xl font-extrabold text-black'>
                {item.title}
              </h2>
              <p className='text-xl text-black'>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </CurvedWrapper>
  );
};
