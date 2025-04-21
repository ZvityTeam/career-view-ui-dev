'use client';

import { motion } from 'framer-motion';
import { Headphones, Layers, Link2, PlaySquare } from 'lucide-react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import pdf from '../../assets/ebooks/How to build your network.pdf';
import { useMentorStore } from '../../store/useMentorStore';
import { SectionHeader } from '../section-header/SectionHeader';
import { Button } from '../ui/Button';

// Set up pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const PDFReader = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);

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
    <div className='flex h-full max-h-[80%] flex-col items-center'>
      <h3 className='mb-4 text-2xl font-bold lg:text-3xl'>Mentor Guide</h3>
      <p className='mb-6 text-sm leading-relaxed text-gray-600 lg:text-base'>
        Explore our comprehensive mentor guide in PDF format
      </p>
      {error ? (
        <p className='text-sm text-red-500'>{error}</p>
      ) : (
        <div className='mb-6 w-full max-w-lg flex-grow overflow-hidden rounded-xl bg-white shadow-sm'>
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
              width={Math.min(500, window.innerWidth - 40)}
              scale={1.2}
            />
          </Document>
        </div>
      )}
      <div className='flex items-center gap-4'>
        <Button
          variant='secondary'
          className='rounded-full bg-black text-sm text-white hover:bg-black/90 lg:text-base'
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
        >
          Previous
        </Button>
        <p className='text-sm text-gray-600 lg:text-base'>
          Page {pageNumber} of {numPages || '--'}
        </p>
        <Button
          variant='secondary'
          className='rounded-full bg-black text-sm text-white hover:bg-black/90 lg:text-base'
          onClick={goToNextPage}
          disabled={pageNumber >= (numPages || 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default function WhatWeOffer2() {
  const { getRandomMentorProfiles } = useMentorStore();
  const randomMentorProfiles2 = getRandomMentorProfiles(4);

  return (
    <section className='mt-36 min-h-screen w-full pt-12'>
      <div className='mx-auto px-6 lg:px-12'>
        {/* Title */}
        <SectionHeader title={'What we Offer'} />

        {/* MAIN GRID CONTAINER: Two columns */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
          {/* LEFT COLUMN: Other Sections */}
          <div className='grid-cols-14 grid gap-6 lg:gap-8'>
            {/* 2) 120+ Career */}
            <motion.div
              className='col-span-12 row-span-1 rounded-[24px] bg-[#1C1C1C] p-6 text-white shadow-sm md:col-span-6 lg:p-8'
              {...fadeInUp}
            >
              <div className='flex items-center gap-4'>
                <div className='rounded-2xl bg-[#F5F5F0] p-4'>
                  <Layers className='h-6 w-6 text-black lg:h-7 lg:w-7' />
                </div>
                <div>
                  <h3 className='text-2xl font-semibold lg:text-3xl'>
                    120+ Career
                  </h3>
                  <p className='mt-1 text-sm text-gray-300 lg:text-base'>
                    Guidance Options Available
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3) Live Streaming */}
            <motion.div
              className='col-span-12 row-span-1 rounded-[24px] bg-white p-6 shadow-sm md:col-span-6 lg:p-8'
              {...fadeInUp}
            >
              <div className='flex items-center justify-between text-slate-950'>
                <div>
                  <h3 className='text-2xl font-bold lg:text-3xl'>
                    Live-streaming
                  </h3>
                  <p className='text-sm text-gray-600 lg:text-base'>
                    & Career Talk with Live Q&A
                  </p>
                </div>
                <div className='relative'>
                  <div className='absolute -right-2 -top-2 h-12 w-12 -rotate-6 rounded-2xl bg-blue-100 lg:h-14 lg:w-14' />
                  <div className='absolute -right-1 -top-1 h-12 w-12 rotate-3 rounded-2xl bg-yellow-100 lg:h-14 lg:w-14' />
                  <div className='relative rounded-2xl bg-[#1C1C1C] p-3 lg:p-4'>
                    <PlaySquare className='h-6 w-6 text-white lg:h-7 lg:w-7' />
                  </div>
                </div>
              </div>
            </motion.div>
            {/* 5) Podcast */}
            <motion.div
              className='col-span-12 flex justify-center md:col-span-3'
              {...fadeInUp}
            >
              <div className='flex w-full flex-col items-center justify-around rounded-[24px] bg-[#1C1C1C] p-6 shadow-sm lg:p-8'>
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F0] lg:h-20 lg:w-20'>
                  <Headphones className='h-6 w-6 text-black lg:h-8 lg:w-8' />
                </div>
                <div className='flex flex-col items-center justify-center font-mono text-xs text-white lg:text-sm'>
                  {'PODCAST'.split('').map((value, index) => (
                    <span key={index}>{value}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* 4) Network with Peers */}
            <motion.div
              className='col-span-12 rounded-[24px] bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 shadow-sm md:col-span-3 lg:p-8'
              {...fadeInUp}
            >
              <div className='mb-6 flex items-center justify-between'>
                <h3 className='text-2xl font-bold lg:text-3xl'>
                  Discover Opportunities
                </h3>
                <div className='rounded-full bg-white p-3 shadow-sm lg:p-4'>
                  <Link2 className='h-6 w-6 text-black lg:h-7 lg:w-7' />
                </div>
              </div>
              <p className='mb-6 text-sm leading-relaxed text-gray-600 lg:text-base'>
                Explore diverse industries and understand the paths available to
                you with guidance from CareerView.
              </p>
              <div className='flex items-center gap-2'>
                <div className='flex -space-x-2'>
                  {randomMentorProfiles2.map((profile, i) => (
                    <img
                      key={i}
                      src={profile}
                      alt='Connected student'
                      className='h-8 w-8 rounded-full border-2 border-white lg:h-10 lg:w-10'
                    />
                  ))}
                </div>
                <p className='text-sm text-gray-600 lg:text-base'>
                  12k+ Students connected
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: PDF Reader */}
          <motion.div
            className='col-span-1 rounded-[24px] bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-sm lg:p-8'
            {...fadeInUp}
          >
            <PDFReader />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
