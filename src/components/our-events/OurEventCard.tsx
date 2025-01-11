export interface OurEventCardProps {
  imgSrc: string;
  title: string;
}

export const OurEventCard = ({ imgSrc, title }: OurEventCardProps) => {
  return (
    <div className='relative h-96 w-80 overflow-hidden rounded-2xl bg-orange-400'>
      <img
        src={imgSrc}
        alt={title}
        className={'absolute h-full w-full object-cover'}
      />
      <p
        className={
          'absolute bottom-0 grid h-24 w-full place-items-center rounded-t-[50px] bg-slate-900 text-2xl text-white'
        }
      >
        {title}
      </p>
    </div>
  );
};
