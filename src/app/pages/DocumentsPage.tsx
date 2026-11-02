import { Download, FileText, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { useLanguage } from '../contexts/LanguageContext';

// Seuls les documents classés « Public » et sans information de prix sont téléchargeables ;
// les autres sont remis sur demande aux municipalités (décision du 2 novembre 2026).
const PUBLICS = [
  { n: 1, fichier: '/telechargements/CI-VILLE_explique_simplement.pdf' },
  { n: 2, fichier: '/telechargements/Manuel_application_mobile_CI-VILLE.pdf' },
];
const SUR_DEMANDE = [1, 2, 3, 4, 5, 6, 7, 8];
const DEMANDE = 'mailto:infos@ci-ville.ca?subject=Demande%20de%20document%20CI-VILLE';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export function DocumentsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero icon={FileText} label={t('docs.badge')} title={t('docs.pageTitle')} subtitle={t('docs.pageSubtitle')} />

      <section className="py-12 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.h2 className="text-3xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-6" {...reveal}>
            {t('docs.publicTitle')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PUBLICS.map(({ n, fichier }) => (
              <motion.article key={n} className="rounded-none border border-[#d9e9f4] dark:border-white/10 p-6 flex flex-col" {...reveal}>
                <h3 className="text-xl text-[#173149] dark:text-white mb-2">{t(`docs.doc${n}Title`)}</h3>
                <p className="text-[#4A4A4A] dark:text-[#d4d4d4] leading-relaxed mb-6 flex-1">{t(`docs.doc${n}`)}</p>
                <a
                  href={fichier}
                  download
                  className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-none bg-[#1F6FA5] text-white hover:bg-[#173149] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('docs.download')}</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F6F8] dark:bg-[#262626]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 grid lg:grid-cols-2 gap-10">
          <motion.div {...reveal}>
            <h2 className="text-3xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-4">{t('docs.requestTitle')}</h2>
            <p className="text-[#4A4A4A] dark:text-[#d4d4d4] leading-relaxed mb-6">{t('docs.request')}</p>
            <a
              href={DEMANDE}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-[#1F6FA5] text-white hover:bg-[#173149] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{t('docs.requestCta')}</span>
            </a>
          </motion.div>
          <motion.ul className="divide-y divide-[#d9e9f4] dark:divide-white/10 border-y border-[#d9e9f4] dark:border-white/10" {...reveal}>
            {SUR_DEMANDE.map((n) => (
              <li key={n} className="py-3 text-[#173149] dark:text-[#e5e5e5]">{t(`docs.req${n}`)}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <h2 className="text-2xl text-[#1F6FA5] dark:text-[#3FA0D6] mb-4">{t('docs.legalTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={t('footer.privacyUrl')} className="px-6 py-3 rounded-none border border-[#1F6FA5] text-[#1F6FA5] dark:text-[#3FA0D6] dark:border-[#3FA0D6] hover:bg-[#1F6FA5] hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href={t('footer.termsUrl')} className="px-6 py-3 rounded-none border border-[#1F6FA5] text-[#1F6FA5] dark:text-[#3FA0D6] dark:border-[#3FA0D6] hover:bg-[#1F6FA5] hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
