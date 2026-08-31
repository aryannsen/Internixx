import { Mentor } from '../types';

/**
 * Reusable Mentor dataset.
 * This array can be easily updated or connected to Supabase / CMS without touching UI components.
 */
export const MENTORS: Mentor[] = [
  {
    id: 'nishant-chahar',
    name: 'Nishant Chahar',
    role: 'Software Engineer',
    organization: 'Ex-Microsoft',
    image: '/mentors/mentor-nishant.jpg',
    badge: 'Microsoft',
    companyName: 'Microsoft',
    companyLogoType: 'microsoft',
  },
  {
    id: 'abdul-bari',
    name: 'Abdul Bari',
    role: 'Tech Educator',
    organization: 'IIT Delhi',
    image: '/mentors/mentor-abdul.jpg',
    badge: 'IIT Delhi',
    companyName: 'IIT Delhi',
    companyLogoType: 'iit-delhi',
  },
  {
    id: 'shradha-khapra',
    name: 'Shradha Khapra',
    role: 'AI/ML Researcher',
    organization: 'IIT Madras',
    image: '/mentors/mentor-shradha.jpg',
    badge: 'IIT Madras',
    companyName: 'IIT Madras',
    companyLogoType: 'iit-madras',
  },
  {
    id: 'kunal-kushwaha',
    name: 'Kunal Kushwaha',
    role: 'Founder, Scaler',
    organization: 'Academy',
    image: '/mentors/mentor-kunal.jpg',
    badge: 'Scaler',
    companyName: 'Scaler',
    companyLogoType: 'scaler',
  },
  {
    id: 'anurag-srivastava',
    name: 'Anurag Srivastava',
    role: 'Engineering Leader',
    organization: 'Ex-Google',
    image: '/mentors/mentor-anurag.jpg',
    badge: 'Google',
    companyName: 'Google',
    companyLogoType: 'google',
  },
  {
    id: 'swarnima-singh',
    name: 'Swarnima Singh',
    role: 'Data Scientist',
    organization: 'Ex-Amazon',
    image: '/mentors/mentor-swarnima.jpg',
    badge: 'Amazon',
    companyName: 'Amazon',
    companyLogoType: 'amazon',
  },
];
