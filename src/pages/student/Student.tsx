import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import { StudentHero } from '../../components/student-hero/StudentHero.tsx';

export const Student = () => {
  return (
    <main className={''}>
      <StudentHero />
      <QuestionsWeGet />
    </main>
  );
};
