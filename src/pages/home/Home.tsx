import { Hero } from '../../components/hero/Hero.tsx';
import { WhatWeDo } from '../../components/whatwedo/WhatWeDo.tsx';
import { WhatWeOffer } from '../../components/whatweoffer/WhatWeOffer.tsx';

export const Home = () => {
  return (
    <main className='mb-24'>
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
    </main>
  );
};
