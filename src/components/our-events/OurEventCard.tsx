export interface OurEventCardProps {
  imgSrc: string;
  title: string;
}

export const OurEventCard = ({ imgSrc, title }: OurEventCardProps) => {
  return (
    <div className='relative h-[450px] w-[350px] overflow-hidden rounded-[30px] bg-orange-400'>
      <img
        src={imgSrc}
        alt={title}
        className={'absolute h-full w-full object-cover'}
      />
      <p
        className={
          'absolute bottom-0 grid h-[118px] w-full place-items-center rounded-t-[60px] bg-[#272727] text-2xl text-white'
        }
      >
        {title}
      </p>
    </div>
  );
};
