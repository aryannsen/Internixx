import { getStudentPhotoUrl } from '../lib/supabase';

export interface StudentStory {
  id: string;
  name: string;
  college: string;
  program: string;
  role: string;
  photo: string;
  feedback: string;
  completed: boolean;
}

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'student-01',
    name: 'Aarav Sharma',
    college: 'BITS Pilani',
    program: 'Full-Stack Web Development',
    role: 'Web Development Intern',
    photo: 'student-01.jpg',
    feedback: 'Internix gave me the structure to build production-grade web applications. Shipping milestone projects gave me real confidence for tech interviews.',
    completed: true,
  },
  {
    id: 'student-02',
    name: 'Rohit Patel',
    college: 'VIT Vellore',
    program: 'UI/UX & Product Design',
    role: 'UI/UX Design Intern',
    photo: 'student-02.jpg',
    feedback: 'The feedback loops on design systems were unmatched. I built an end-to-end Figma-to-code prototype that directly helped me secure my dream role.',
    completed: true,
  },
  {
    id: 'student-03',
    name: 'Kavya Nair',
    college: 'Delhi University',
    program: 'Frontend Engineering',
    role: 'Frontend Intern',
    photo: 'student-03.jpg',
    feedback: 'From modern state architecture to responsive layouts, the practical assignments bridged the gap between college theory and industry standards.',
    completed: true,
  },
  {
    id: 'student-04',
    name: 'Sahil Verma',
    college: 'Chandigarh University',
    program: 'Data Analytics & Python',
    role: 'Data Analytics Intern',
    photo: 'student-04.jpg',
    feedback: 'Working on real data pipelines and visual dashboards transformed my analytical thinking. The verifiable credential added genuine weight to my resume.',
    completed: true,
  },
  {
    id: 'student-05',
    name: 'Yashwardhan Singh',
    college: 'SRM Institute',
    program: 'Cloud & Backend Systems',
    role: 'Backend Engineering Intern',
    photo: 'student-05.jpg',
    feedback: 'Building robust REST APIs and database models with dedicated mentor guidance gave me the hands-on engineering exposure I was looking for.',
    completed: true,
  },
  {
    id: 'student-06',
    name: 'Aryan Deshmukh',
    college: 'MIT Pune',
    program: 'Artificial Intelligence & ML',
    role: 'AI / ML Intern',
    photo: 'student-06.jpg',
    feedback: 'The project milestones were practical and challenging. Deploying AI models into working interfaces was an incredible learning experience.',
    completed: true,
  },
  {
    id: 'student-07',
    name: 'Dev Mehta',
    college: 'Manipal University',
    program: 'Mobile App Development',
    role: 'Mobile Engineering Intern',
    photo: 'student-07.jpg',
    feedback: 'The hands-on mobile development modules and continuous code reviews helped me build scalable React Native apps with real-world architecture.',
    completed: true,
  },
];
