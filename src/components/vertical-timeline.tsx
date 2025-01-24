import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Reason 1',
    subtitle: '',
    description:
      'Helps in Lorem Epsom | Highly qualified | Studied at Loren Epsom | Available 9-5pm on weekdays, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    date: 'Step 1',
    type: 'work',
  },
  {
    id: 2,
    title: 'Reason 2',
    subtitle: '',
    description:
      'Helps in Lorem Epsom | Highly qualified | Studied at Loren Epsom | Available 9-5pm on weekdays, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    date: 'Step 2',
    type: 'work',
  },
  {
    id: 3,
    title: 'Reason 3',
    subtitle: '',
    description:
      'Helps in Lorem Epsom | Highly qualified | Studied at Loren Epsom | Available 9-5pm on weekdays, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    date: 'Step 3',
    type: 'work',
  },
];

export const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline lineColor='rgb(107, 114, 128)'>
      {' '}
      {/* Slate color */}
      {timelineData.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          className={`vertical-timeline-element--${item.type}`}
          contentStyle={{ background: 'rgb(107, 114, 128)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(107, 114, 128)' }}
          date={item.date}
          iconStyle={{ background: 'rgb(107, 114, 128)', color: '#fff' }}
          icon={item.type === 'work' ? <Briefcase /> : <GraduationCap />}
        >
          <h3 className='vertical-timeline-element-title'>{item.title}</h3>
          {item.subtitle && (
            <h4 className='vertical-timeline-element-subtitle'>
              {item.subtitle}
            </h4>
          )}
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
