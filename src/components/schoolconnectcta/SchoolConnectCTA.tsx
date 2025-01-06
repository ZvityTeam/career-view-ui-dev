import { Button } from '../button/Button.tsx';
import { SectionHeader } from '../sectionheader/SectionHeader.tsx';
import { Section } from '../container/Section.tsx';

export const SchoolConnectCTA = () => {
  return (
    <Section className={'gap-4'}>
      <SectionHeader
        title={'School Connect'}
        subtitle={
          'Are you representing a school, looking to connect? Request a Demo or\n' +
          '        Call Back to…'
        }
      />
      <p></p>
      <div className='flex gap-6'>
        <Button variant={'secondary'}>Request a Demo</Button>
        <Button>Get a Callback</Button>
      </div>
    </Section>
  );
};
