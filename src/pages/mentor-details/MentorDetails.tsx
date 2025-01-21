import { useParams } from 'react-router-dom';
import { mentorData } from '../../components/mentors-list';
import { MentorProfileProps } from '../../components/mentor-profile-card';

export const MentorDetails = () => {
  const { id } = useParams<string>();
  const mentor = mentorData[id as unknown as number];
  return (
    <main>
      <Header {...mentor} />
    </main>
  );
};

type HeaderProps = Pick<MentorProfileProps, 'name' | 'profileImage' | 'bio'>;

const Header = ({ name, profileImage, bio }: HeaderProps) => {
  return (
    <section className={'relative'}>
      <div
        className={'absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2'}
      >
        <img
          src={profileImage}
          alt={name}
        />
      </div>
      <div>{bio}</div>
      <div></div>
    </section>
  );
};
