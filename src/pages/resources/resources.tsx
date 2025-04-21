import { Youtube } from 'lucide-react';
import { AnimatedPageWrapper } from '../../components/PageWrapper';

// Import PDFs
import pdfBuildNetwork from '../../assets/ebooks/How to build your network.pdf';
import pdfWorkLifeBalance from '../../assets/ebooks/How to maintain a good work-life balance.pdf';
import pdfNailInterview from '../../assets/ebooks/How to nail a job interview.pdf';
import pdfStayMotivated from '../../assets/ebooks/How to stay motivated during school.pdf';
import pdfWriteResume from '../../assets/ebooks/How to write a good resume.pdf';

// Import matching PNG thumbnails
import thumbBuildNetwork from '../../assets/ebooks/How to build your network.png';
import thumbWorkLifeBalance from '../../assets/ebooks/How to maintain a good work-life balance.png';
import thumbNailInterview from '../../assets/ebooks/How to nail a job interview.png';
import thumbStayMotivated from '../../assets/ebooks/How to Stay Motivated During School.png';
import thumbWriteResume from '../../assets/ebooks/How to write a good resume.png';

// Build an array of resources with matching PDF and thumbnail
const resources = [
  {
    title: 'How to build your network',
    pdf: pdfBuildNetwork,
    thumbnail: thumbBuildNetwork,
  },
  {
    title: 'How to maintain a good work-life balance',
    pdf: pdfWorkLifeBalance,
    thumbnail: thumbWorkLifeBalance,
  },
  {
    title: 'How to nail a job interview',
    pdf: pdfNailInterview,
    thumbnail: thumbNailInterview,
  },
  {
    title: 'How to stay motivated during school',
    pdf: pdfStayMotivated,
    thumbnail: thumbStayMotivated,
  },
  {
    title: 'How to write a good resume',
    pdf: pdfWriteResume,
    thumbnail: thumbWriteResume,
  },
];

export const Resources = () => {
  return (
    <AnimatedPageWrapper>
      <main className='bg-primary p-10 px-20 pt-40'>
        <h1 className='mb-12 text-center text-3xl font-bold uppercase tracking-wide text-white'>
          Resource Center
        </h1>
        <p className='mb-8 text-center text-lg text-gray-300'>
          Explore everything from career guides, tips, to expert insights from
          our team.
        </p>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {resources.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ${
                item.title ? 'bg-white' : 'h-16 bg-white'
              } hover:shadow-3xl hover:scale-105`}
            >
              {item.title ? (
                <a
                  href={item.pdf}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block h-full p-6 text-center'
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='mx-auto h-48 w-auto object-contain'
                  />
                  <h3 className='mt-4 text-xl font-bold text-gray-800'>
                    {item.title}
                  </h3>
                  <button className='mt-6 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-200'>
                    Read Now
                  </button>
                </a>
              ) : (
                <div className='flex h-full items-center justify-center'>
                  <div className='h-px w-1/2 bg-white'></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative White Line */}
        <div className='my-12 border-t border-white'></div>

        {/* YouTube Channel Section */}
        <div className='rounded-2xl bg-white p-8 shadow-2xl'>
          <h2 className='mb-4 text-2xl font-bold text-black'>
            Our YouTube Channel
          </h2>
          <p className='mb-6 text-gray-800'>
            Subscribe to our YouTube channel for the latest career tips,
            tutorials, and live Q&A sessions with experts!
          </p>
          <a
            href='https://www.youtube.com/@CareerView-Podcast'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700'
          >
            <Youtube className='mr-2 h-5 w-5' />
            Subscribe
          </a>
        </div>
      </main>
    </AnimatedPageWrapper>
  );
};
