import { ArrowUp, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Action Buttons - Bottom Right */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-14 h-14 rounded-none bg-[#1F6FA5] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          ) : (
            <Moon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </button>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-none bg-[#1F6FA5] text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group animate-in fade-in slide-in-from-bottom-5 duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </>
  );
}