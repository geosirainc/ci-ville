import androidIcon from '../../assets/android.png';
import appleIcon from '../../assets/apple.png';
import { useLanguage } from '../contexts/LanguageContext';

type StoreButtonsProps = {
  className?: string;
  imageClassName?: string;
};

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.civille.ca';
const APP_STORE_URL = 'https://apps.apple.com/app/ci-ville/id6795759527';

const linkClass =
  'group inline-flex justify-center rounded-none bg-transparent p-0 transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA0D6] focus-visible:ring-offset-2';
const imageBaseClass =
  'w-full max-w-[276px] h-auto object-contain drop-shadow-[0_16px_30px_rgba(47,128,185,0.2)] group-hover:drop-shadow-[0_20px_34px_rgba(47,128,185,0.28)] transition-all';

export function StoreButtons({ className = '', imageClassName = '' }: StoreButtonsProps) {
  const { t } = useLanguage();
  const stores = [
    { href: PLAY_STORE_URL, icon: androidIcon, label: t('tools.android') },
    { href: APP_STORE_URL, icon: appleIcon, label: t('tools.apple') },
  ];

  return (
    <div className={className}>
      {stores.map(({ href, icon, label }) => (
        <div key={href} className="relative inline-flex justify-center">
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={linkClass}>
            <img src={icon} alt={label} className={`${imageBaseClass} ${imageClassName}`.trim()} />
          </a>
        </div>
      ))}
    </div>
  );
}
