import React from 'react';
// import { CardData } from '../why-choose-us-card/WhyChooseUsCard.tsx';
import NetworkVisualization from '../network-visualization.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import curved from '../svgs/curved.svg';
/** Example data. Replace with your actual content & images. */
// const WHY_CHOOSE_US_DATA: CardData[] = [
//   {
//     id: 1,
//     title: 'Gain Valuable Insights',
//     description:
//       'Our Young Professional network provide valuable insights and perspective on...',
//     imageUrl:
//       'https://images.pexels.com/photos/19376809/pexels-photo-19376809/free-photo-of-pigeons-sitting-on-the-exterior-of-a-residential-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 2,
//     title: 'Develop Key Skills',
//     description:
//       'Our Young Professional network provide valuable insights and perspective on...',
//     imageUrl:
//       'https://images.pexels.com/photos/29823044/pexels-photo-29823044/free-photo-of-reindeer-herd-crossing-snowy-norwegian-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 3,
//     title: 'Expand Network',
//     description:
//       'Our Young Professional network provide valuable insights and perspective on...',
//     imageUrl:
//       'https://images.pexels.com/photos/28277464/pexels-photo-28277464/free-photo-of-a-mountain-covered-in-snow-and-clouds-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 4,
//     title: 'Get Support & Guidance',
//     description:
//       'Our Young Professional network provide valuable insights and perspective...',
//     imageUrl:
//       'https://images.pexels.com/photos/29713560/pexels-photo-29713560/free-photo-of-vibrant-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 5,
//     title: 'Enhance Confidence',
//     description:
//       'Our Young Professional network provide valuable insights and perspective...',
//     imageUrl:
//       'https://images.pexels.com/photos/26926276/pexels-photo-26926276/free-photo-of-elephant-on-savanna-with-kilimanjaro-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
// ];

/**
 * Main carousel component
 */
export const WhyChooseUs: React.FC = () => {
  // const [cards, setCards] = useState(WHY_CHOOSE_US_DATA);

  /**
   * Move the array left (direction < 0) or right (direction > 0).
   * This rotates the items so we can keep the "center" card in front.
   */
  // const handleMove = (direction: number) => {
  //   const newArr = [...cards];
  //   if (direction > 0) {
  //     // Move the first item to the end
  //     const first = newArr.shift();
  //     if (first) newArr.push(first);
  //   } else {
  //     // Move the last item to the front
  //     const last = newArr.pop();
  //     if (last) newArr.unshift(last);
  //   }
  //   setCards(newArr);
  // };

  return (
    <div className='relative -mt-20 md:-mt-10 md:-mb-28 grid place-items-center'>
      <div className='w-full rounded-[80px] bg-white md:h-[82dvh]'>
        <img
          className='absolute left-0 top-0 h-full w-full rounded-[80px] object-cover shadow-lg'
          src={curved}
          alt={''}
        />
        <section className='relative w-full py-20'>
          {/* Section heading */}
          <SectionHeader
            title={'Why CareerView?'}
            subtitle={
              'CareerView is a community of YOUNG Professionals from a wide range of careers, industries, and cultures. They openly share what school and work are really like—so students can learn from real stories, not just job descriptions. With over 100 professionals from 10+ cultural backgrounds, students get access to a truly diverse set of experiences.'
            }
            className={'mb-1 px-10 text-5xl md:mt-0 md:px-0 md:text-8xl'}
            subTitleClassName='max-w-7xl text-xl'
          />

          {/* The carousel container (relative) for stacking motion cards */}
          <div className='relative mx-auto hidden h-[0px] w-full overflow-hidden md:block md:h-[700px]'>
            <NetworkVisualization />
          </div>
        </section>
      </div>
    </div>
  );
};
