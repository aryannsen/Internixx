import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { VerifyPage } from './pages/VerifyPage';
import { getProgramBySlug } from './data/programs';
import { SITE_CONFIG } from './config/site';

const AppContent: React.FC = () => {
  const { path } = useRouter();

  // Dynamic document title update for SEO and clarity
  useEffect(() => {
    if (path === '/') {
      document.title = `${SITE_CONFIG.name} — Learn by Building`;
    } else if (path === '/programs') {
      document.title = `Programs — ${SITE_CONFIG.name}`;
    } else if (path.startsWith('/programs/')) {
      const slug = path.replace('/programs/', '').split('?')[0].split('#')[0];
      const program = getProgramBySlug(slug);
      if (program) {
        document.title = `${program.name} — ${SITE_CONFIG.name}`;
      } else {
        document.title = `Program Details — ${SITE_CONFIG.name}`;
      }
    } else if (path === '/how-it-works') {
      document.title = `How It Works — ${SITE_CONFIG.name}`;
    } else if (path === '/about') {
      document.title = `About — ${SITE_CONFIG.name}`;
    } else if (path === '/faq') {
      document.title = `FAQ — ${SITE_CONFIG.name}`;
    } else if (path === '/verify') {
      document.title = `Verify Certificate — ${SITE_CONFIG.name}`;
    } else {
      document.title = `${SITE_CONFIG.name} — Learn by Building`;
    }
  }, [path]);

  // Route matching logic
  const renderRoute = () => {
    // Normalization
    const cleanPath = path.split('?')[0].split('#')[0] || '/';

    if (cleanPath === '/' || cleanPath === '') {
      return <HomePage />;
    }

    if (cleanPath === '/programs') {
      return <ProgramsPage />;
    }

    if (cleanPath.startsWith('/programs/')) {
      const slug = cleanPath.replace('/programs/', '');
      return <ProgramDetailPage slug={slug} />;
    }

    if (cleanPath === '/how-it-works') {
      return <HowItWorksPage />;
    }

    if (cleanPath === '/about') {
      return <AboutPage />;
    }

    if (cleanPath === '/faq') {
      return <FAQPage />;
    }

    if (cleanPath === '/verify') {
      return <VerifyPage />;
    }

    // Default fallback
    return <HomePage />;
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-clip bg-[#FAFAF9] text-[#111827]">
      <Header />
      <main className="flex-1 w-full max-w-full">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
