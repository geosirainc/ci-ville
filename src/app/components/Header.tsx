import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoComplete from '../../assets/1a73cb7aee8529059d3ebc897eca7cef8ed70b09.png';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export function Header({ currentPath }: { currentPath: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    {
      href: '/',
      label: t('nav.home'),
      isActive: currentPath === '/',
      activeClassName: 'border-[#4A90E2] text-[#4A90E2] dark:border-[#4A90E2] dark:text-[#8AB8FF]'
    },
    {
      href: '/application-mobile',
      label: t('nav.mobile'),
      isActive: currentPath === '/application-mobile',
      activeClassName: 'border-[#B44D68] text-[#B44D68] dark:border-[#C96A81] dark:text-[#D9879C]'
    },
    {
      href: '/application-web',
      label: t('nav.web'),
      isActive: currentPath === '/application-web',
      activeClassName: 'border-[#B97A56] text-[#B97A56] dark:border-[#C99271] dark:text-[#D8AB8F]'
    },
    {
      href: '/impact-ci-ville',
      label: t('nav.impact'),
      isActive: currentPath === '/impact-ci-ville',
      activeClassName: 'border-[#4E9A72] text-[#4E9A72] dark:border-[#67B48B] dark:text-[#8FD0AC]'
    }
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinkClassName = (isActive: boolean, activeClassName: string) =>
    [
      'rounded-full border px-4 py-2 transition-colors',
      isActive
        ? activeClassName
        : 'border-transparent text-[#4A4A4A] dark:text-[#e5e5e5] hover:border-[#2F80B9]/35 hover:text-[#2F80B9] dark:hover:border-[#3FA0D6]/40 dark:hover:text-[#3FA0D6]'
    ].join(' ');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={currentPath === '/' ? '#accueil' : '/'} className="flex items-center" aria-label="Retour a l'accueil">
            <img src={logoComplete} alt="CI-VILLE" className="h-12 w-auto dark:brightness-0 dark:invert" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={item.isActive ? 'page' : undefined}
                className={navLinkClassName(item.isActive, item.activeClassName)}
              >
                {item.label}
              </a>
            ))}
            <a href="mailto:infos@ci-ville.ca" className="px-6 py-2.5 bg-gradient-to-r from-[#3FA0D6] to-[#2F80B9] text-white rounded-lg hover:shadow-lg transition-all">
              {t('nav.contact')}
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2F80B9] dark:text-[#3FA0D6]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`${navLinkClassName(item.isActive, item.activeClassName)} text-left`}
                >
                  {item.label}
                </a>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <a href="mailto:infos@ci-ville.ca" onClick={closeMobileMenu} className="px-6 py-2.5 bg-gradient-to-r from-[#3FA0D6] to-[#2F80B9] text-white rounded-lg hover:shadow-lg transition-all mt-2 text-center">
                {t('nav.contact')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}