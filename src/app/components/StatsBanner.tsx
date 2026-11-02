import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

// Faits vérifiables seulement : aucune statistique d'utilisation tant qu'aucune municipalité n'est en production
const FAITS = ['features.stat1', 'features.stat2', 'features.stat3', 'features.stat4'];

export function StatsBanner({ className = 'mt-12' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className={`${className} bg-[#1F6FA5] rounded-none p-8`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {FAITS.map((cle, index) => (
          <motion.div
            key={cle}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <p className="text-4xl lg:text-5xl text-white mb-2">{t(`${cle}Value`)}</p>
            <p className="text-white/90">{t(cle)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
