'use client';

import { motion } from 'framer-motion';
import { Pause, Play, PodcastIcon, YoutubeIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import YouTube, { YouTubeProps } from 'react-youtube';

// Sample imports for assets (adjust paths as per your project structure)
import {
  default as pdf,
  default as pdfBuildNetwork,
} from '../../assets/ebooks/How to build your network.pdf';
import thumbBuildNetwork from '../../assets/ebooks/How to build your network.png';
import pdfWorkLifeBalance from '../../assets/ebooks/How to maintain a good work-life balance.pdf';
import thumbWorkLifeBalance from '../../assets/ebooks/How to maintain a good work-life balance.png';
import pdfNailInterview from '../../assets/ebooks/How to nail a job interview.pdf';
import thumbNailInterview from '../../assets/ebooks/How to nail a job interview.png';
import pdfStayMotivated from '../../assets/ebooks/How to stay motivated during school.pdf';
import thumbStayMotivated from '../../assets/ebooks/How to Stay Motivated During School.png';
import pdfWriteResume from '../../assets/ebooks/How to write a good resume.pdf';
import thumbWriteResume from '../../assets/ebooks/How to write a good resume.png';
import { useMentorStore } from '../../store/useMentorStore';
import { Marquee } from '../marquee/Marquee';
import { SectionHeader } from '../section-header/SectionHeader';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

// Set up pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// PDF Reader Component
const PDFReader: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [pdfWidth, setPdfWidth] = useState(400);

  // Update PDF width based on screen size
  useEffect(() => {
    const updatePdfWidth = () => {
      const containerWidth = Math.min(400, window.innerWidth - 40);
      setPdfWidth(containerWidth);
    };

    updatePdfWidth();
    window.addEventListener('resize', updatePdfWidth);
    return () => window.removeEventListener('resize', updatePdfWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    setError(
      'Failed to load PDF file. Please ensure the file exists and is accessible.'
    );
    console.error('PDF loading error:', error);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || prev));
  };

  return (
    <div className='flex h-full flex-col items-center'>
      <h3 className='mb-4 text-xl font-bold text-black lg:text-2xl'>
        Mentor Guide
      </h3>
      <p className='mb-4 text-center text-xs leading-relaxed text-gray-600 lg:text-sm'>
        Explore our comprehensive mentor guide in PDF format
      </p>
      {error ? (
        <p className='text-sm text-red-500'>{error}</p>
      ) : (
        <div className='mb-2 w-full max-w-xl overflow-hidden rounded-xl bg-black/10 shadow-sm'>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={true}
              className='flex justify-center'
              width={pdfWidth}
              scale={1.0}
            />
          </Document>
        </div>
      )}
      <div className='flex items-center gap-2 sm:gap-4'>
        <Button
          variant='secondary'
          className='rounded-full bg-gray-300 px-2 py-1 text-xs text-black hover:bg-gray-400 sm:px-4 lg:text-sm'
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
        >
          Previous
        </Button>
        <p className='text-xs text-gray-600 lg:text-sm'>
          Page {pageNumber} of {numPages || '--'}
        </p>
        <Button
          variant='secondary'
          className='rounded-full bg-black px-2 py-1 text-xs text-white hover:bg-black/90 sm:px-4 lg:text-sm'
          onClick={goToNextPage}
          disabled={pageNumber >= (numPages || 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

// Helper function to format seconds into min:sec
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// YouTube Audio Player Component
const YouTubeAudioPlayer = ({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset states when videoId changes
    setPlayer(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [videoId]);

  const onReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target);
    setDuration(event.target.getDuration());
    setIsLoading(false);
  };

  const togglePlayPause = () => {
    if (player) {
      const playerState = player.getPlayerState();
      if (playerState === YouTube.PlayerState.PLAYING) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (player) {
      const newTime = Number(e.target.value);
      player.seekTo(newTime, true);
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    let interval: number;
    if (isPlaying && player) {
      interval = setInterval(() => {
        setCurrentTime(player.getCurrentTime());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, player]);

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (
      event.data === YouTube.PlayerState.PAUSED ||
      event.data === YouTube.PlayerState.ENDED
    ) {
      setIsPlaying(false);
    }
  };

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      start: 0, // Ensure video starts from beginning
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className='lg:h-34 h-auto w-full rounded-[24px] bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-4 shadow-sm sm:p-6 lg:p-8'
      {...fadeInUp}
    >
      <div className='mb-4 flex items-center gap-4'>
        <div>
          <h3 className='text-base font-semibold text-white sm:text-lg lg:text-xl'>
            {title}
          </h3>
          <p className='text-xs text-gray-300 lg:text-sm'>
            Listen to tips from industry experts
          </p>
        </div>
      </div>
      {isLoading ? (
        <div className='flex h-10 items-center justify-center'>
          <div className='h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-gray-300'></div>
        </div>
      ) : (
        <>
          <YouTube
            key={videoId} // Force re-render on videoId change
            videoId={videoId || 'nWB2Pncif_Y'}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
          />
          <div className='flex items-center gap-2 sm:gap-4'>
            <button
              onClick={togglePlayPause}
              className='bg-pastel-blue-100 hover:bg-pastel-blue-200 rounded-full p-2'
            >
              {isPlaying ? (
                <div className='rounded-xl bg-gray-200 p-1 sm:p-2'>
                  <Pause className='h-5 w-5 text-black sm:h-4 sm:w-4 lg:h-5 lg:w-5' />
                </div>
              ) : (
                <div className='rounded-xl bg-gray-200 p-1 sm:p-2'>
                  <Play className='h-5 w-5 text-black sm:h-4 sm:w-4 lg:h-5 lg:w-5' />
                </div>
              )}
            </button>
            <input
              type='range'
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className='h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 sm:w-[83%]'
            />
            <span className='hidden text-xs text-gray-300 sm:block'>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
};

// Resources for Marquee
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
// Resources for Marquee
const Podcasts = [
  {
    title: 'Veterinary Industry',
    videoId: 'nWB2Pncif_Y',
  },
  {
    title: 'Radiographer',
    videoId: '-Q7wCiYI8Pc',
  },
  {
    title: 'Commercial Pilot',
    videoId: 'FUCWAmQv-Iw',
  },
  {
    title: 'Production / Medical Scientist',
    videoId: 'x6wjiXSuvPs',
  },
  {
    title: 'Marketing Media',
    videoId: 'NCSE_c_t0iw',
  },
  
];

// Main Component
export default function WhatWeOffer2() {
  const { getRandomMentors } = useMentorStore();
  const mentors = getRandomMentors(3);
  const [selectedVideoId, setSelectedVideoId] = useState<string>('nWB2Pncif_Y');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>(
    Podcasts[0].title
  );
  const navigate = useNavigate();
  return (
    <section className='mt-20 md:-mb-20  min-h-screen w-full pt-6 sm:mt-28 md:mt-36 md:pt-12'>
      <div className='mx-4 px-2 sm:mx-8 sm:px-4 md:mx-12 lg:mr-10 lg:ml-0 lg:px-12'>
        {/* Title */}
        <SectionHeader
          title={'What We Offer'}
          className='mb-6 md:mb-10'
        />

        {/* MAIN FLEX CONTAINER: Two columns */}
        <div className='flex w-full flex-col gap-4 md:flex-row lg:gap-6'>
          {/* LEFT COLUMN: Multiple Sections */}
          <div className='flex max-w-5xl flex-1 flex-col gap-4 md:flex-[2] lg:gap-6'>
            {/* Row 1: 1-on-1 Mentoring and Quick Links */}
            <div className='flex flex-col gap-4 md:flex-row'>
              {/* Quick Links */}
              <motion.div
                className='md:h-42 h-auto w-full rounded-[24px] bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] p-4 shadow-sm sm:p-6 md:w-1/3 lg:p-8'
                {...fadeInUp}
              >
                <h3 className='mb-4 text-base font-bold text-black sm:text-lg lg:text-xl'>
                  Quick Links
                </h3>
                <div className='flex flex-col gap-3 sm:gap-4'>
                  <Button
                    className='flex items-center gap-2 rounded-full bg-red-600 px-3 py-6 text-base font-bold text-white hover:bg-red-600/80 sm:gap-3 sm:py-8 sm:text-lg lg:px-4 lg:py-10 lg:text-xl'
                    onClick={() =>
                      window.open(
                        'https://www.youtube.com/@CareerView-Podcast',
                        '_blank'
                      )
                    }
                  >
                    <YoutubeIcon
                      style={{
                        width: '24px',
                        height: '24px',
                      }}
                      className='sm:h-8 sm:w-8 lg:h-8 lg:w-8'
                    />
                    YouTube Channel
                  </Button>
                  <Button
                    className='flex items-center gap-2 rounded-full bg-green-500 px-3 py-6 text-base font-bold text-black hover:bg-green-500/80 sm:gap-3 sm:py-8 sm:text-lg lg:px-4 lg:py-10 lg:text-xl'
                    onClick={() =>
                      window.open(
                        'https://open.spotify.com/show/1VYkSWt8KZLi0AGJfN3qWT',
                        '_blank'
                      )
                    }
                  >
                    <PodcastIcon
                      style={{
                        width: '24px',
                        height: '24px',
                      }}
                      className='sm:h-8 sm:w-8 lg:h-8 lg:w-8'
                    />
                    Spotify Podcast
                  </Button>
                </div>
              </motion.div>
              {/* 1-on-1 Mentoring Text */}
              <motion.div
                className='md:h-42 h-auto w-full overflow-x-hidden rounded-[24px] bg-gradient-to-br from-[#f5f5dc] to-[#ffffff] p-4 shadow-sm sm:p-6 md:flex-1 lg:p-8'
                {...fadeInUp}
              >
                <div className='mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center'>
                  <h3 className='text-lg font-bold text-black sm:text-xl lg:text-2xl'>
                    Explore Our Podcasts
                  </h3>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://www.youtube.com/@CareerView-Podcast/videos',
                        '_blank'
                      )
                    }
                    className='rounded-full bg-black px-3 py-1 text-xs text-white hover:bg-black/90 lg:px-4 lg:text-sm'
                  >
                    View All Podcasts
                  </Button>
                </div>
                <Marquee
                  pauseOnHover
                  className='h-36 sm:h-40 md:h-48'
                >
                  {Podcasts.map((resource, index) => (
                    <div
                      key={index}
                      className='mx-2 flex flex-shrink-0 flex-col items-center sm:mx-3'
                      onClick={() => {
                        setSelectedVideoId(resource.videoId);
                        setSelectedVideoTitle(resource.title);
                      }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${resource.videoId}/maxresdefault.jpg`}
                        alt={resource.title}
                        className='h-28 w-full rounded-lg object-cover shadow-sm sm:h-32 md:h-40'
                      />
                      <p className='overflow-wrap mt-1 max-w-[180px] text-center text-xs font-semibold text-gray-600 sm:max-w-[200px] sm:text-sm'>
                        {resource.title}
                      </p>
                    </div>
                  ))}
                </Marquee>
              </motion.div>
            </div>
            {/* Row 2: YouTube Audio Player */}
            <YouTubeAudioPlayer
              videoId={selectedVideoId}
              title={selectedVideoTitle}
            />
            {/* Row 3: Marquee and Featured Mentors */}
            <div className='flex flex-col gap-4 md:flex-row'>
              {/* Autoscrolling Marquee */}
              <motion.div
                className='md:h-76 h-auto w-full overflow-x-hidden rounded-[24px] bg-gradient-to-br from-[#ffffff] to-[#f5f5f5] p-4 shadow-sm sm:p-6 md:flex-1 lg:p-8'
                {...fadeInUp}
              >
                <div className='mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center'>
                  <h3 className='text-lg font-bold text-black sm:text-xl lg:text-2xl'>
                    Explore Our eBooks
                  </h3>
                  <Button onClick={()=>navigate('/resources')} className='rounded-full bg-black px-3 py-1 text-xs text-white hover:bg-black/90 lg:px-4 lg:text-sm'>
                    View All Resources
                  </Button>
                </div>
                <Marquee
                  pauseOnHover
                  className='h-36 sm:h-40 md:h-48'
                >
                  {resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.pdf}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mx-2 flex flex-shrink-0 flex-col items-center sm:mx-3'
                    >
                      <img
                        src={resource.thumbnail}
                        alt={resource.title}
                        className='h-24 w-16 rounded-lg object-cover shadow-sm sm:h-28 sm:w-20'
                      />
                      <p className='overflow-wrap mt-1 max-w-[80px] text-center text-xs text-gray-600 sm:mt-2 sm:max-w-[100px] sm:text-sm'>
                        {resource.title}
                      </p>
                    </a>
                  ))}
                </Marquee>
              </motion.div>
              {/* Featured Mentors */}
              <motion.div
                className='md:h-76 h-auto w-full rounded-[24px] bg-gradient-to-br from-[#ffffff] to-[#f5f5dc] p-4 shadow-sm sm:p-6 md:w-1/3 lg:p-8'
                {...fadeInUp}
              >
                <h3 className='mb-3 text-base font-bold text-black sm:mb-4 sm:text-lg lg:text-xl'>
                  Meet Our Mentors
                </h3>
                <div className='flex flex-col gap-3 sm:gap-4'>
                  {mentors.map((mentor, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-3 sm:gap-4'
                    >
                      <img
                        src={mentor.profileImage}
                        alt={mentor.name}
                        className='border-pastel-yellow-100 h-10 w-10 rounded-full border-2 object-cover sm:h-12 sm:w-12'
                      />
                      <div>
                        <p className='text-xs font-semibold text-black sm:text-sm'>
                          {mentor.name}
                        </p>
                        <p className='text-xs text-gray-600'>{mentor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: PDF Reader */}
          <div className='mt-4 mb-20 flex-1 rounded-[24px] bg-gradient-to-br from-[#e6f0fa] to-[#ffffff] p-4 shadow-sm sm:p-6 md:mt-0 md:flex-[1] lg:p-8'>
            <PDFReader />
          </div>
        </div>
      </div>
    </section>
  );
}
