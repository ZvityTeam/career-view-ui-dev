import { Button } from '../ui/Button.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
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
        <Button
          variant={'outline'}
          size={'lg'}
          className={
            'border-[#272727] text-[#272727] hover:border-black hover:text-black'
          }
        >
          Request a Demo
        </Button>
        <Button size={'lg'}>Get a Callback</Button>
      </div>
    </Section>
  );
};
