import { Award, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { SectionBadge } from '../components/SectionBadge';
import { useLanguage } from '../contexts/LanguageContext';

// Version publique du Programme des municipalités fondatrices : aucune information de prix (décision du 2 novembre 2026)
const CONTACT = 'mailto:infos@ci-ville.ca?subject=Programme%20des%20municipalit%C3%A9s%20fondatrices';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export function FoundersPage() {
  const { t } = useLanguage();
  const faits = [1, 2, 3];
  const etapes = [1, 2, 3, 4, 5, 6];
  const avantages = [1, 2, 4];
  const engagements = [1, 2, 3, 4];

  return (
    <main>
      <PageHero icon={Award} label={t('founders.badge')} title={t('founders.pageTitle')} subtitle={t('founders.pageSubtitle')} />

      <section className="py-12 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div className="max-w-3xl mb-10" {...reveal}>
            <SectionBadge label={t('founders.introTitle')} />
            <p className="mt-4 text-lg text-[#4A4A4A] dark:text-[#d4d4d4] leading-relaxed">{t('founders.intro')}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {faits.map((n) => (
              <motion.div key={n} className="rounded-none border border-[#1F6FA5] p-6" {...reveal}>
                <p className="text-4xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-2">{t(`founders.fact${n}Value`)}</p>
                <p className="text-[#4A4A4A] dark:text-[#d4d4d4]">{t(`founders.fact${n}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F6F8] dark:bg-[#262626]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.h2 className="text-3xl lg:text-4xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-8" {...reveal}>
            {t('founders.stepsTitle')}
          </motion.h2>
          <ol className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {etapes.map((n) => (
              <motion.li key={n} className="rounded-none bg-white dark:bg-[#1a1a1a] border border-[#d9e9f4] dark:border-white/10 p-6" {...reveal}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-[#1F6FA5] text-white flex items-center justify-center">{n}</span>
                  <h3 className="text-xl text-[#173149] dark:text-white">{t(`founders.step${n}Title`)}</h3>
                </div>
                <p className="text-[#4A4A4A] dark:text-[#d4d4d4] leading-relaxed">{t(`founders.step${n}`)}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 grid lg:grid-cols-2 gap-10">
          <motion.div {...reveal}>
            <h2 className="text-3xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-6">{t('founders.benefitsTitle')}</h2>
            <div className="space-y-5">
              {avantages.map((n) => (
                <div key={n}>
                  <h3 className="text-lg text-[#173149] dark:text-white mb-1">{t(`founders.benefit${n}Title`)}</h3>
                  <p className="text-[#4A4A4A] dark:text-[#d4d4d4] leading-relaxed">{t(`founders.benefit${n}`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal}>
            <h2 className="text-3xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-6">{t('founders.commitTitle')}</h2>
            <ul className="space-y-4">
              {engagements.map((n) => (
                <li key={n} className="flex items-start gap-3 text-[#4A4A4A] dark:text-[#d4d4d4]">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1F6FA5] dark:text-[#3FA0D6]" />
                  <span className="leading-relaxed">{t(`founders.commit${n}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#173149] text-white">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div className="max-w-3xl" {...reveal}>
            <h2 className="text-3xl lg:text-4xl mb-4">{t('founders.contactTitle')}</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">{t('founders.contact')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONTACT} className="px-8 py-3 rounded-none bg-white text-[#173149] border border-white hover:bg-[#F4F6F8] transition-colors text-center">
                {t('founders.cta')}
              </a>
              <a href="/documents" className="px-8 py-3 rounded-none bg-[#173149] text-white border border-white hover:bg-[#1F6FA5] transition-colors text-center">
                {t('founders.ctaDocs')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
