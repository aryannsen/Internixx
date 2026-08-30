export type ProgramCategory = 'FRONTEND' | 'BACKEND' | 'FULL STACK' | 'UI/UX' | 'ALL' | string;

export interface WeekCurriculum {
  week: number;
  title: string;
  focus: string;
  description: string;
  tasks: string[];
  deliverable: string;
}

export interface Program {
  id: string;
  slug: string;
  name: string;
  category: ProgramCategory;
  tagline: string;
  description: string;
  overview: string;
  duration: string;
  mode: string;
  level: string;
  format: string;
  weeklyCommitment: string;
  skills: string[];
  prerequisites: string[];
  highlights: string[];
  curriculum: WeekCurriculum[];
  deliverables: string[];
  certificateDetails: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Applications' | 'Curriculum & Tasks' | 'Certificates';
}

export interface HowItWorksStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}
