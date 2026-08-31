/**
 * Core site configuration
 * 
 * APPLICATION_FORM_URL is the centralized external Google Form application link.
 * Replace this URL with your active Google Form when launching a cohort.
 */
export const APPLICATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfypBp4ChJElAlLfFHnzszQyLR11Q9XE3HQ3Lcg4RvZk_FQbQ/viewform";

export const SITE_CONFIG = {
  name: "INTERNIX",
  tagline: "Build skills. Gain practical experience.",
  supportingMessage: "Project-based online internship programs designed to help students learn, build and grow.",
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
    { label: "Credentials", href: "/verify" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
  ],
  footerLinks: {
    programs: [
      { label: "Web Development", href: "/programs/frontend-development" },
      { label: "UI/UX Design", href: "/programs/ui-ux-design" },
      { label: "Data Science", href: "/programs/data-analysis" },
      { label: "Digital Marketing", href: "/programs/digital-marketing" },
    ],
    platform: [
      { label: "All Programs", href: "/programs" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "About Internix", href: "/about" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Verify a Certificate", href: "/verify" },
      { label: "Brand & Logo System", href: "/brand" },
    ],
  },
};
