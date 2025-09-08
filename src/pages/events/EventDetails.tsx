import { Link, useNavigate, useParams } from 'react-router-dom';
import banner from '../../assets/CAREERVIEW-32721.jpg';
import { AnimatedPageWrapper } from '../../components/PageWrapper';
import { Section } from '../../components/container/Section';
import { SectionHeader } from '../../components/section-header/SectionHeader';
import { events } from '../../content/events';
import { useSpeakerDetails } from '../../hooks/useSpeakerDetails';

export const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === eventId);

  // Get speaker details using custom hook - moved before conditional return
  // If event doesn't exist, pass empty array to avoid hook errors
  const speakerDetails = useSpeakerDetails(event?.speakers || []);

  // Display time as a string directly - only if event exists
  const eventTime = event?.time;

  if (!event) {
    return (
      <AnimatedPageWrapper>
        <div className='container mx-auto mt-20 px-4 py-12 text-center'>
          <h1 className='mb-6 text-3xl font-bold'>Event Not Found</h1>
          <p className='mb-6'>
            Sorry, the event you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/')}
            className='rounded bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700'
          >
            Go to Home
          </button>
        </div>
      </AnimatedPageWrapper>
    );
  }

  return (
    <AnimatedPageWrapper>
      <div className='relative mt-16 h-[40vh] w-full overflow-hidden'>
        <div className='absolute inset-0 z-10 bg-black/60 pt-16'></div>
        <img
          src={banner}
          alt={event.name}
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-white'>
          <h1 className='mb-4 text-center text-4xl font-bold md:text-5xl'>
            {event.name}
          </h1>
          <p className='text-xl md:text-2xl'>{event.schoolName}</p>
        </div>
      </div>

      <Section className='py-12'>
        <div className='w-full max-w-4xl'>
          <div className='mb-8 rounded-xl bg-white p-6 shadow-md'>
            <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='text-lg text-gray-700'>
                  <img
                    src={event.schoolLogo}
                    alt={event.schoolName}
                    className='h-12 mt-1 mb-5'
                  />
                  <span className='font-semibold'>Date & Time:</span>{' '}
                  {eventTime}
                </p>
                {event.venue && (
                  <p className='text-lg text-gray-700'>
                    <span className='font-semibold'>Venue:</span> {event.venue}
                  </p>
                )}
              </div>
              <a
                href={event.joiningLink}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:bg-pastel-blue/90 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black px-8 font-medium text-white shadow transition-colors'
              >
                Join Event
              </a>
            </div>
          </div>

          <div className='mb-12'>
            <SectionHeader
              title='About This Event'
              align='left'
              className='mb-6'
            />
            <p className='text-lg leading-relaxed text-gray-700'>
              {event.description}
            </p>
          </div>

          {speakerDetails.filter((speaker) => speaker.isMentor).length > 0 && (
            <div>
              <SectionHeader
                title='Speakers'
                align='left'
                className='mb-6'
              />
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {speakerDetails
                  .filter((speaker) => speaker.isMentor)
                  .map((speaker, index) => (
                    <Link
                      key={index}
                      to={`/browse-mentors/${speaker.mentorIndex}`}
                      className='block cursor-pointer rounded-xl bg-gray-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'
                    >
                      <div className='flex items-start gap-4'>
                        {speaker.profileImage && (
                          <div className='h-16 w-16 flex-shrink-0 overflow-hidden rounded-full'>
                            <img
                              src={speaker.profileImage}
                              alt={speaker.name}
                              className='h-full w-full object-cover'
                            />
                          </div>
                        )}
                        <div className='flex-1'>
                          <h3 className='mb-2 text-xl font-bold'>
                            {speaker.name}
                          </h3>
                          {(speaker.role || speaker.company) && (
                            <p className='mb-3 text-gray-600'>
                              {speaker.role}
                              {speaker.role && speaker.company && ' at '}
                              {speaker.company}
                            </p>
                          )}
                          {speaker.bio && (
                            <p className='text-gray-700'>{speaker.bio}</p>
                          )}
                          <p className='mt-3 font-medium text-blue-600'>
                            View mentor profile →
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </AnimatedPageWrapper>
  );
};
