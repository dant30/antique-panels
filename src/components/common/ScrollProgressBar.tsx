import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset to 0 on route change
    setScrollProgress(0);

    const updateScrollProgress = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [pathname]);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollProgress)}
      aria-label="Reading Scroll Progress"
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.8)] transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};
