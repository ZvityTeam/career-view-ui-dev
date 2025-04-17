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
    <div className='relative mt-44 grid h-[65vh] place-items-center'>
      <div className='absolute h-[82vh] w-full rounded-[80px] bg-white'>
        <img
          className='absolute left-0 top-0 h-full w-full rounded-[80px] object-cover'
          src={curved}
          alt={''}
        />
        <section className='relative w-full py-24'>
          {/* Section heading */}
          <SectionHeader
            title={'Why CareerView?'}
            subtitle={
              'Home to a community of Young Professionals (ages 21-29) across different career paths, industries, and cultural backgrounds—who share their real experiences of schooling and early professional life. With over 100 young professionals across various career roles and representing 10 different cultural backgrounds, students will have an opportunity to learn from diverse experiences.'
            }
            className={'mb-16 text-8xl'}
          />

          {/* The carousel container (relative) for stacking motion cards */}
          <div className='relative mx-auto h-[700px] w-full overflow-hidden'>
            <NetworkVisualization />
            {/* <MentorNetwork /> */}
            {/*{cards.map((card, index) => {*/}
            {/*  // We'll place the middle card (position=0) in the center,*/}
            {/*  // the next/prev around it, etc.*/}
            {/*  const middleIndex = Math.floor(cards.length / 2);*/}
            {/*  const position = index - middleIndex;*/}
            {/*  // E.g., if we have 5 cards, indexes are 0..4, middleIndex=2,*/}
            {/*  // positions => -2, -1, 0, +1, +2*/}
            {/*  const zIndex = 10 - Math.abs(position);*/}

            {/*  // The "active" card is the center one (position === 0)*/}
            {/*  const isActive = position === 0;*/}

            {/*  return (*/}
            {/*    <WhyChooseUsCard*/}
            {/*      key={card.id}*/}
            {/*      card={card}*/}
            {/*      zIndex={zIndex}*/}
            {/*      position={position}*/}
            {/*      isActive={isActive}*/}
            {/*      onClick={() => handleMove(position)}*/}
            {/*    />*/}
            {/*  );*/}
            {/*})}*/}
          </div>

          {/*/!* Left/right arrow buttons *!/*/}
          {/*<div className='absolute inset-y-0 left-10 flex items-center'>*/}
          {/*  <button*/}
          {/*    onClick={() => handleMove(-1)}*/}
          {/*    className='ml-2 grid h-12 w-12 place-content-center rounded-full border text-2xl transition hover:bg-black hover:text-white'*/}
          {/*  >*/}
          {/*    <StepBack />*/}
          {/*  </button>*/}
          {/*</div>*/}
          {/*<div className='absolute inset-y-0 right-10 flex items-center'>*/}
          {/*  <button*/}
          {/*    onClick={() => handleMove(1)}*/}
          {/*    className='mr-2 grid h-12 w-12 place-content-center rounded-full border text-2xl transition hover:bg-black hover:text-white'*/}
          {/*  >*/}
          {/*    <StepForward />*/}
          {/*  </button>*/}
          {/*</div>*/}
        </section>
      </div>
    </div>
  );
};
