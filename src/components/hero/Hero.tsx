export const Hero = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-yellow-200 py-16 text-center'>
      {/* Heading */}
      <h1 className='text-4xl font-bold text-white sm:text-5xl'>
        Let’s <span className='text-yellow-500'>Connect</span>
      </h1>

      {/* Subheading */}
      <p className='mt-4 max-w-xl text-gray-300'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy
        eirmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed diam nonumy eirmod tempor.
      </p>
    </section>
  );
};
