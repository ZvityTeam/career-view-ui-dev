import { Hero } from '../../components/hero/Hero.tsx';
import { WhatWeDo } from '../../components/whatwedo/WhatWeDo.tsx';

export const Home = () => {
  return (
    <main className='mb-24'>
      <Hero />
      <WhatWeDo />
    </main>
  );
};
