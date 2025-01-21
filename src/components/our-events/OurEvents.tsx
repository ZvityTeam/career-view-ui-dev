import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { OurEventCard, OurEventCardProps } from './OurEventCard.tsx';

const OUR_EVENTS: OurEventCardProps[] = [
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Midwife Session" image
    title: 'Midwife Session',
  },
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Networking Event" image
    title: 'Networking Event',
  },
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Youtube Podcast" image
    title: 'Youtube Podcast',
  },
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Team Get Together" image
    title: 'Team Get Together',
  },
];

export const OurEvents = () => {
  return (
    <Section className={'flex flex-col gap-12 p-24'}>
      <SectionHeader
        title={'Our Event & News'}
        subtitle={
          '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias architecto assumenda, eaque fuga illo labore minus non perferendis quam reiciendis vitae voluptatem!\n'
        }
      />
      <div className={'flex gap-8'}>
        {OUR_EVENTS.map((value, index) => (
          <OurEventCard
            key={index}
            {...value}
          />
        ))}
      </div>
    </Section>
  );
};
