import { Button } from '../ui/Button.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Section } from '../container/Section.tsx';

export const SchoolConnectCTA = () => {
  return (
    <Section className={'gap-4'}>
      <SectionHeader
        title={'Empower Your Students with School Connect'}
        subtitle={
          'Are you a school representative looking to provide students with meaningful career guidance? Discover how CareerView can support your institution with tailored programs and resources. Request a demo or schedule a call to learn more!'
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
          See It in Action
        </Button>
        <Button size={'lg'}>Contact Us</Button>
      </div>
    </Section>
  );
};
