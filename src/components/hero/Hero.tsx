export const Hero = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center space-y-32 bg-gradient-to-b from-slate-900 via-slate-800 to-yellow-100 py-16 text-center'>
      {/* Heading */}
      <div className='space-y-24'>
        <h1 className='text-8xl font-bold text-white'>
          Let’s <span className='text-yellow-500'>Connect</span>
        </h1>

        {/* Subheading */}
        <p className='mt-4 max-w-7xl text-xl text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed diam nonumy eirmod tempor.
        </p>
      </div>

      <div>circle round</div>
    </section>
  );
};
