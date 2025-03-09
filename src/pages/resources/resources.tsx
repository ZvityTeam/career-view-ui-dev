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
      <main className='bg-slate-950 p-4 px-12 pt-52'>
        <h1 className='mb-8 text-center font-avenir text-5xl font-bold text-white'>
          Resources
        </h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {resources.map((item, index) => (
            <div
              key={index}
              className='overflow-hidden rounded bg-white shadow transition-shadow hover:shadow-lg'
            >
              <a
                href={item.pdf}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='flex items-center justify-center p-4'>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='h-auto w-40 object-cover'
                  />
                </div>
                <div className='border-t p-2'>
                  <p className='text-center text-sm text-gray-800'>
                    {item.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </AnimatedPageWrapper>
  );
};
