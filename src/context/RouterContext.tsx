import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  goBack: () => {},
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    // Handle anchor links like /#how-it-works or #how-it-works
    if (to.includes('#')) {
      const [targetPath, hash] = to.split('#');
      const normalizedTarget = targetPath === '' ? '/' : targetPath;
      const currentClean = path.split('?')[0].split('#')[0] || '/';

      if (normalizedTarget === currentClean || (normalizedTarget === '/' && currentClean === '/')) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      window.history.pushState({}, '', to);
      setPath(normalizedTarget);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    if (to === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate('/programs');
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
