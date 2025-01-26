import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';

export const WhatToExpect = () => {
  return (
    <Section className={'flex h-[70dvh] flex-row gap-12 px-24'}>
      <div className={'grid h-[80%] w-2/3 place-items-center'}>
        <div className='h-full w-full overflow-hidden rounded-3xl'>
          <img
            className={'object-fill'}
            src={
              'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg'
            }
            alt={'image'}
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
