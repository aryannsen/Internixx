/**
 * Core site configuration
 * 
 * APPLICATION_FORM_URL is the centralized external Google Form application link.
 * Replace this URL with your active Google Form when launching a cohort.
 */
export const APPLICATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfypBp4ChJElAlLfFHnzszQyLR11Q9XE3HQ3Lcg4RvZk_FQbQ/viewform";

export const SITE_CONFIG = {
  name: "INTERNIX",
  tagline: "Learn by building. Move forward with confidence.",
  supportingMessage: "Practical programs designed to help students learn, build and develop real project experience.",
  description: "Internix is a modern student-focused platform offering structured online project and learning programs.",
  founder: "Aryan",
  founderTitle: "Founder, Internix",
  contactNumber: "7206510712",
  instagram: "aryannsen",
  instagramUrl: "https://instagram.com/aryannsen",
  communicationChannel: "Official Internix Student Portal & Discord/Slack workspace",
  cohortStatus: "Applications Open for Upcoming Cohort",
  navLinks: [
    { label: "Programs", href: "/programs" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  footerLinks: {
    programs: [
      { label: "Frontend Development", href: "/programs/frontend-development" },
      { label: "Python Development", href: "/programs/python-development" },
      { label: "UI/UX Design", href: "/programs/ui-ux-design" },
      { label: "Backend Development", href: "/programs/backend-development" },
      { label: "Data Analysis", href: "/programs/data-analysis" },
    ],
    platform: [
      { label: "All Programs", href: "/programs" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "About Internix", href: "/about" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Verify a Certificate", href: "/verify" },
    ],
  },
};
