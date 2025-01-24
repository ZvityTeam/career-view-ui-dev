import { motion } from 'framer-motion';
import {
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBmw,
  SiBox,
  SiBuildkite,
  SiBurton,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
  SiHeroku,
  SiNike,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const DoubleScrollingLogos = () => {
  return (
    <section className='bg-white py-4'>
      <div className='flex overflow-hidden'>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className='mt-4 flex overflow-hidden'>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className='flex gap-4 px-2'
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: IconType }) => {
  return (
    <a
      href='#'
      rel='nofollow'
      target='_blank'
      className='flex h-16 w-16 items-center justify-center text-black transition-colors hover:bg-slate-200 md:h-24 md:w-24'
    >
      <Icon className='text-4xl md:text-5xl' />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiNike} />
    <LogoItem Icon={Si3M} />
    <LogoItem Icon={SiAbstract} />
    <LogoItem Icon={SiAdobe} />
    <LogoItem Icon={SiAirtable} />
    <LogoItem Icon={SiAmazon} />
    <LogoItem Icon={SiBox} />
    <LogoItem Icon={SiBytedance} />
    <LogoItem Icon={SiChase} />
    <LogoItem Icon={SiCloudbees} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiBmw} />
    <LogoItem Icon={SiBurton} />
    <LogoItem Icon={SiBuildkite} />
    <LogoItem Icon={SiCouchbase} />
    <LogoItem Icon={SiDailymotion} />
    <LogoItem Icon={SiDeliveroo} />
    <LogoItem Icon={SiEpicgames} />
    <LogoItem Icon={SiGenius} />
    <LogoItem Icon={SiGodaddy} />
    <LogoItem Icon={SiHeroku} />
  </>
);

export default DoubleScrollingLogos;
