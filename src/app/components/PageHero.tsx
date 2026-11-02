import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

// Bandeau d'en-tête des pages intérieures : fond plein, libellé, titre et sous-titre
export function PageHero({ icon: Icon, label, title, subtitle }: { icon: LucideIcon; label: string; title: string; subtitle: string }) {
  return (
    <section className="pt-28 pb-12 bg-[#1F6FA5] text-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-2 rounded-none border border-white px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </motion.div>
          <motion.h1
            className="text-4xl lg:text-6xl mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
