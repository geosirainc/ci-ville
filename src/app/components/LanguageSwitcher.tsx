import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-[#2F80B9]/40 dark:border-[#3FA0D6]/50 rounded-none text-[#2F80B9] dark:text-white hover:border-[#2F80B9] dark:hover:border-[#3FA0D6] transition-all"
        aria-label="Change language"
      >
        <span className="text-sm font-medium uppercase">{currentLanguage.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 bg-white dark:bg-[#262626] rounded-none shadow-xl border border-gray-200 dark:border-[#3FA0D6]/30 overflow-hidden z-50 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'fr' | 'en');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                  language === lang.code
                    ? 'bg-[#1F6FA5] text-white'
                    : 'text-[#4A4A4A] dark:text-[#a1a1a1] hover:bg-[#F4F6F8] dark:hover:bg-[#333]'
                }`}
                aria-label={lang.label}
              >
                <span className="text-sm font-medium uppercase">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}