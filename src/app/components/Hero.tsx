import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import cityImage from '../../assets/city.jpg';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <img src={cityImage} alt="Ville" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e587a]/65 via-[#2F80B9]/76 to-[#1F6FA5]/82"></div>
        {/* Subtle geometric patterns with animations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 border-2 border-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-white rounded-full animate-float-slow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.title')} <span className="font-bold">{t('hero.titleHighlight')}</span> {t('hero.titleEnd')} <span className="font-bold">{t('hero.titleEndHighlight')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="font-bold">{t('hero.subtitleHighlight')}</span>{t('hero.subtitleEnd')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="/#outils-collaboratifs" className="px-8 py-4 bg-white text-[#1F6FA5] rounded-none border border-white hover:bg-[#F4F6F8] transition-colors flex items-center gap-2 group">
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:infos@ci-ville.ca?subject=Demande%20de%20d%C3%A9monstration%20CI-VILLE" className="px-8 py-4 bg-[#1F6FA5] border border-white text-white rounded-none hover:bg-[#173149] transition-colors">
              {t('hero.demo')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 28L60 31C120 34 240 40 360 43C480 46 600 41 720 38C840 35 960 35 1080 38C1200 41 1320 46 1380 49L1440 52V70H1380C1320 70 1200 70 1080 70C960 70 840 70 720 70C600 70 480 70 360 70C240 70 120 70 60 70H0V28Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}