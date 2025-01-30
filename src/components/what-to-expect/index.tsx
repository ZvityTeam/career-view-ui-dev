import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';
import { ImageCarousel } from '../ui/image-carousel.tsx';

export const WhatToExpect = () => {
  return (
    <Section className={'my-24 flex h-[70dvh] flex-row gap-12'}>
      <div className={'grid h-[80%] w-2/3 place-items-center'}>
        <div className='h-full w-full rounded-3xl'>
          <ImageCarousel
            className={'overflow-hidden rounded-3xl'}
            showControls
            autoPlay={true}
            images={[
              'https://images.pexels.com/photos/29823044/pexels-photo-29823044/free-photo-of-reindeer-herd-crossing-snowy-norwegian-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              'https://images.pexels.com/photos/19376809/pexels-photo-19376809/free-photo-of-pigeons-sitting-on-the-exterior-of-a-residential-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              'https://images.pexels.com/photos/28277464/pexels-photo-28277464/free-photo-of-a-mountain-covered-in-snow-and-clouds-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              'https://images.pexels.com/photos/29713560/pexels-photo-29713560/free-photo-of-vibrant-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              'https://images.pexels.com/photos/26926276/pexels-photo-26926276/free-photo-of-elephant-on-savanna-with-kilimanjaro-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            ]}
          />
        </div>
      </div>
      <div className={'flex w-1/3 flex-col items-start gap-6 text-left'}>
        <SectionHeader
          title={'What to Expect'}
          subtitle={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quae quis vero!\n'
          }
          className={'max-w-2xl items-start'}
          subTitleClassName={'text-left'}
        />
        <Button>Watch Now</Button>
      </div>
    </Section>
  );
};
