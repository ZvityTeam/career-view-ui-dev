import { memo, useState } from 'react';
import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { FaqItem } from './faqitems/FaqItem.tsx';

const FAQ_DATA = [
  {
    question: 'What is CareerView, and how does it help students?',
    answer:
      'CareerView is a free platform that connects students with young professionals to provide real-world career insights. We help students, especially from rural and lower socio-economic backgrounds, explore career options through live-streamed career talks and mentorship opportunities.',
  },
  {
    question: 'Who are the mentors on CareerView?',
    answer:
      'Our mentors are young professionals from diverse industries who provide firsthand knowledge and guidance about their careers. They share real experiences, industry insights, and practical advice to help students make informed career decisions.',
  },
  {
    question: 'How can I participate as a student?',
    answer:
      'Students can join our live career talks, ask questions directly to professionals, and explore different career paths. Schools and educators can also partner with us to bring these opportunities to their students.',
  },
  {
    question: 'How do I become a mentor?',
    answer:
      'If you’re a young professional passionate about guiding students, you can sign up as a mentor on our platform. Share your career journey, answer student questions, and help shape the future workforce.',
  },
  {
    question: 'Why should schools and educators get involved?',
    answer:
      'CareerView provides a structured way for students to explore career options beyond traditional classroom learning. Schools can integrate our career talks into their curriculum to give students access to industry professionals they might not otherwise meet.',
  },
  {
    question: 'Is CareerView free to use?',
    answer:
      'Yes, the platform is completely free for students, schools, and mentors. We are committed to making career guidance accessible to everyone, regardless of background or location.',
  },
  {
    question: 'How do I sign up?',
    answer:
      'Simply visit our website, choose whether you’re a student, educator, or mentor, and follow the sign-up process to get started.',
  },
];

const SCHOOL_FAQ_DATA = [
  {
    question: 'What is a CareerView Livestream?',
    answer:
      'A CareerView Livestream is a live virtual livestream where industry professionals share insights about their careers, answer student questions, and provide real-world perspectives on different professions within the classroom environment.',
  },
  {
    question:
      'How can I request a livestream by selecting a date, choosing an industry, and specifying the number of speakers?',
    answer:
      'You can request a livestream by selecting a date, choosing an industry, and specifying the number of speakers. Once submitted, we will match you with professionals and confirm the session details.',
  },
  {
    question: 'What industries are available for livestreams?',
    answer:
      'We offer professionals from various industries, including technology, finance, healthcare, engineering, and more. If you have a specific request, let us know, and we’ll do our best to find a suitable speaker.',
  },
  {
    question: 'Can I request multiple speakers for a session?',
    answer:
      'Yes, you can request one or multiple speakers depending on the session format you prefer. Having multiple speakers allows for diverse insights and perspectives.',
  },
  {
    question: 'How long is a typical livestream session?',
    answer:
      'Sessions usually last between 30 to 60 minutes, depending on the speaker’s availability and the level of student engagement.',
  },
  {
    question: 'Is there a cost for participating in a CareerView Livestream?',
    answer:
      'Yes, we charge per speaker’s time and a fixed fee to host the stream.',
  },
  {
    question: 'What platform is used for the livestream?',
    answer:
      'We typically use Zoom, Microsoft Teams, or Google Meet. If your school has a preferred platform, we can try to accommodate your request.',
  },
  {
    question: 'How can my students prepare for the livestream?',
    answer:
      'Encourage students to research the industry and prepare questions in advance. We also provide optional pre-session materials to help guide the discussion.',
  },
  {
    question: 'Are the livestreams recorded for future use?',
    answer:
      'Yes, recordings may be available depending on the speaker’s consent. Let us know if you’d like a recording, and we’ll confirm availability.',
  },
  {
    question: 'How far in advance should I request a livestream?',
    answer:
      'We recommend submitting your request at least two weeks in advance to allow time for speaker matching and scheduling.',
  },
];

const MENTOR_FAQ_DATA = [
  {
    question: 'Why should I join CareerView?',
    answer:
      'Many students face challenges when deciding on their careers during and after school. This happens because they lack honest and relatable guidance. CareerView offers you an opportunity to support students by sharing your own career journey and offering genuine advice from your own experiences. This can assist students in making informed career choices, something that you might not have had access to when you were younger.\nNumerous Young Professionals like you have joined CareerView due to the lack of guidance they had in their youth. CareerView also wants to promote YOU! We hope with your contribution, it will give you a platform to share your story while helping students. We promote all our Young Professionals on our website and LinkedIn page.\nLastly, joining CareerView as a Young Professional helps you build new networks and connections with other Young Professionals. They come from lots of different industries and have various career experiences. You will get special invitations to events where you can meet over 100 young professionals from 12 different industries.',
  },
  {
    question: 'What is expected of me as a Young Professional?',
    answer:
      'All Young Professionals are volunteers! Hence, you can dedicate as much time as you are comfortable with. We have a few simple requirements that need to be fulfilled in order to be considered as a Young Professional:\n• Complete the BIO Template document, so we can create your network profile\n• Participate in a podcast interview with one of our hosts (when you have availability)\nAll other activities are optional and can be participated in whenever you decide to do so. These include:\n• Answering student questions on your profile page\n• Contributing your personal career advice to our student E-books\n• Joining networking or school events organized by the CareerView team',
  },
  {
    question: 'Would my info be publicly accessible?',
    answer:
      'Only the information you choose to share for your profile and podcast recording will be accessible. Your email and contact details will not be disclosed publicly. Your personal contact information will be only stored and used by the CareerView admin team for communication purposes. Your privacy is important to us!',
  },
  {
    question: 'Where are the podcasts recorded?',
    answer:
      'CareerView podcasts can be recorded either in person or online – you get to choose! For in-person recordings, our portable recording equipment allows us to find a convenient location that suits everyone. We make sure it is a quiet indoor space. For online podcasts, we usually use Zoom for the call. However, we prefer the podcast recording to be in-person for better sound quality and that professional studio vibe.',
  },
  {
    question:
      'How long are the podcast recordings and what kind of questions will I answer?',
    answer:
      'Podcast recordings usually last between 20 to 30 minutes. The actual time depends on how detailed your answers are and whether any questions need to be repeated. The questions we ask are a mix of common inquiries from students. To keep things engaging for students, we recommend keeping your responses under 2 minutes. This is because students tend to have shorter attention spans.\nLinks below provide you a sample:\n• Audio: https://www.careerview.com.au/podcast/episode/24968a97/accountantdarren-sweeney\n• Video: https://www.youtube.com/watch?v=xxAyemmVb9U',
  },
  {
    question: 'Where are the podcasts published?',
    answer:
      "Your podcast recording is published on CareerView's website, Spotify channel, and YouTube channel. We also provide you with the recording directly, so you can review it and request any changes or modifications you'd like – we're here to accommodate your preferences.",
  },
  {
    question: 'How do I book a time for podcast recording?',
    answer:
      'Once you have filled out and submitted the BIO profile sheet, please contact our support team at team@careerview.com.au. Let them know your preferred dates and times. Alternatively, our CareerView team will get in touch with you to schedule a suitable recording time. You can simply inform them when you are available, and the CareerView team will work on coordinating a time that works for both you and the host. There is no rush to complete the podcast recording, as we are happy to make a convenient time slot.',
  },
  {
    question:
      'How does the questions from students work and will I get messaged directly?',
    answer:
      'Students who have signed up to CareerView (i.e. created a free account) can view your profile and ask you career-related questions. You will NOT receive questions directly to you, and your personal contact information always remains confidential. If a student sends you a question, the CareerView team will verify it is appropriate and then check if it is new. If it is a new question, we will email it to you. You will respond by emailing the CareerView team directly. We appreciate a response within a few days, but we understand that Young Professionals have busy schedules. If you are unable to answer, we will hold onto the question for future podcasts.',
  },
  {
    question: 'Do I get paid?',
    answer:
      'Right now, Young Professionals are volunteers and do NOT receive payment. CareerView offers free services for students.',
  },
  {
    question: 'Do I need to attend the events?',
    answer:
      'No, you are not obligated to attend any of the events we invite you to. However, we highly encourage Young Professionals to participate in the networking events, as this will not only greatly assist students but also offer an opportunity to expand your personal network.',
  },
  {
    question:
      'Can I promote my workplace and/or my own business through CareerView?',
    answer:
      "Absolutely! We encourage all Young Professionals to highlight their place of work and/or personal businesses. Our goal is to create a platform that promotes Young Professionals. If you're interested in advertising job openings or promoting any offerings, please feel free to contact the CareerView team to discuss this further.",
  },
];

const ITEMS_PER_PAGE = 5;

const FaqSectionComponent = ({ page }: { page: string }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const faqData =
    page === 'home'
      ? FAQ_DATA
      : page === 'school'
        ? SCHOOL_FAQ_DATA
        : MENTOR_FAQ_DATA;
  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = faqData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Section className='mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8'>
      <SectionHeader title='Frequently Asked Questions' />
      <div className='mx-auto w-full sm:w-[90%] lg:w-[80%]'>
        {currentItems.map((value, index) => (
          <FaqItem
            {...value}
            key={startIndex + index}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className='mt-2 flex justify-center gap-1 sm:mt-4 sm:gap-2'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`rounded-full px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              } `}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </Section>
  );
};

export const FaqSection = memo(FaqSectionComponent);
