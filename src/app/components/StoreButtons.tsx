import { useEffect, useRef, useState } from 'react';
import androidIcon from '../../assets/android.png';
import appleIcon from '../../assets/apple.png';
import { useLanguage } from '../contexts/LanguageContext';

type StoreButtonsProps = {
  className?: string;
  imageClassName?: string;
};

type ActiveStore = 'android' | 'apple' | null;

// L'application iOS n'est pas encore publiée : le bouton Apple garde le message « bientôt disponible »
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.civille.ca';

export function StoreButtons({ className = '', imageClassName = '' }: StoreButtonsProps) {
  const { t } = useLanguage();
  const [activeStore, setActiveStore] = useState<ActiveStore>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = (store: Exclude<ActiveStore, null>) => {
    setActiveStore(store);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveStore((current) => (current === store ? null : current));
    }, 3000);
  };

  const renderTooltip = (store: Exclude<ActiveStore, null>) => (
    <span
      role="status"
      aria-live="polite"
      className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-none bg-[#2F80B9] px-4 py-2 text-sm text-white shadow-lg transition-all duration-200 ${
        activeStore === store ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
      }`}
    >
      {t('tools.comingSoon')}
    </span>
  );

  return (
    <div className={className}>
      <div className="relative inline-flex justify-center">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('tools.android')}
          className="group inline-flex justify-center rounded-none bg-transparent p-0 transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA0D6] focus-visible:ring-offset-2"
        >
          <img
            src={androidIcon}
            alt={t('tools.android')}
            className={`w-full max-w-[276px] h-auto object-contain drop-shadow-[0_16px_30px_rgba(47,128,185,0.2)] group-hover:drop-shadow-[0_20px_34px_rgba(47,128,185,0.28)] transition-all ${imageClassName}`.trim()}
          />
        </a>
      </div>

      <div className="relative inline-flex justify-center">
        <button
          type="button"
          onClick={() => handleClick('apple')}
          aria-label={t('tools.apple')}
          className="group inline-flex justify-center rounded-none bg-transparent p-0 transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA0D6] focus-visible:ring-offset-2"
        >
          <img
            src={appleIcon}
            alt={t('tools.apple')}
            className={`w-full max-w-[276px] h-auto object-contain drop-shadow-[0_16px_30px_rgba(47,128,185,0.2)] group-hover:drop-shadow-[0_20px_34px_rgba(47,128,185,0.28)] transition-all ${imageClassName}`.trim()}
          />
        </button>
        {renderTooltip('apple')}
      </div>
    </div>
  );
}