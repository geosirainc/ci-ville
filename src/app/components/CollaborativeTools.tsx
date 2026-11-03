import { ArrowRight, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import logoComplete from '../../assets/1a73cb7aee8529059d3ebc897eca7cef8ed70b09.png';
import appImage from '../../assets/app.jpg';
import webImage from '../../assets/45e467468841a7aa366e337a8e80cd030b9b492d.png';
import { SectionBadge } from './SectionBadge';

export function CollaborativeTools() {
  const { t } = useLanguage();

  return (
    <section id="outils-collaboratifs" className="py-12 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t('tools.badge')} variant="blue" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl text-[#2F80B9] dark:text-[#3FA0D6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('tools.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-[#4A4A4A] dark:text-[#a1a1a1] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('tools.subtitle')}
          </motion.p>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          <motion.article
            className="group relative overflow-hidden rounded-none min-h-[420px] p-6 lg:p-8 flex flex-col justify-between text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <img src={appImage} alt="Application mobile CI-VILLE" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/62 to-[#1F6FA5]/88"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)] opacity-0 scale-100 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-[#0f2433]/0 transition-colors duration-500 group-hover:bg-[#0f2433]/45"></div>
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between gap-4 mb-6">
                <img src={logoComplete} alt="CI-VILLE" className="h-10 w-auto brightness-0 invert" />
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 flex-shrink-0">
                  <Smartphone className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl mb-3 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">{t('tools.mobileTitle')}</h3>
              <p className="text-white/85 text-base lg:text-lg max-w-xl leading-relaxed transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">{t('tools.mobileSubtitle')}</p>
              <p className="absolute left-0 right-0 top-18 lg:top-22 max-w-[90%] text-sm lg:text-[15px] leading-relaxed text-white/92 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="block">{t('tools.mobileHoverIntro')}</span>
                <span className="block mt-3">{t('tools.mobileHoverCategories')}</span>
                <span className="block mt-3">{t('tools.mobileHoverPhotos')}</span>
                <span className="block mt-3">{t('tools.mobileHoverSubmit')}</span>
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 items-center w-full justify-end">
              <a
                href="/application-mobile"
                className="ml-auto inline-flex items-center gap-2 rounded-none bg-white/14 border border-white/25 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-[#1F6FA5]"
              >
                <span>{t('mobile.learnMore')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>

          <motion.article
            className="group relative overflow-hidden rounded-none min-h-[420px] p-6 lg:p-8 flex flex-col justify-between text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={webImage} alt="Application web CI-VILLE" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/68 to-[#2F80B9]/88"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)] opacity-0 scale-100 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-[#102432]/0 transition-colors duration-500 group-hover:bg-[#102432]/45"></div>
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between gap-4 mb-6">
                <img src={logoComplete} alt="CI-VILLE" className="h-10 w-auto brightness-0 invert" />
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 flex-shrink-0">
                  <Monitor className="w-7 h-7" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl mb-3 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">{t('tools.webTitle')}</h3>
              <p className="text-white/85 text-base lg:text-lg max-w-xl leading-relaxed transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">{t('tools.webSubtitle')}</p>
              <p className="absolute left-0 right-0 top-18 lg:top-22 max-w-[90%] text-sm lg:text-[15px] leading-relaxed text-white/92 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="block">{t('tools.webHoverIntro')}</span>
                <span className="block mt-3">{t('tools.webHoverStats')}</span>
                <span className="block mt-3">{t('tools.webHoverManagers')}</span>
                <span className="block mt-3">{t('tools.webHoverData')}</span>
              </p>
            </div>

            <div className="relative z-10 flex w-full justify-end">
              <a href="/application-web" className="inline-flex items-center gap-2 rounded-none bg-white/14 border border-white/25 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-[#1F6FA5]">
                <span>{t('mobile.learnMore')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}