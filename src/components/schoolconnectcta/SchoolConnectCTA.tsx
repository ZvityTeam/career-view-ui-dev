import { Button } from '../button/Button.tsx';
import { SectionHeader } from '../sectionheader/SectionHeader.tsx';

export const SchoolConnectCTA = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-6 bg-white py-24'>
      <SectionHeader
        title={'School Connect'}
        subtitle={
          'Are you representing a school, looking to connect? Request a Demo or\n' +
          '        Call Back to…'
        }
        className={'gap-6'}
      />
      <p></p>
      <div className='flex gap-6'>
        <Button variant={'secondary'}>Request a Demo</Button>
        <Button>Get a Callback</Button>
      </div>
    </section>
  );
};
