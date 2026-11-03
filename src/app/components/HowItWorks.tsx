import { BellRing, CheckCircle2, MapPinned, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';

export function HowItWorks() {
  const { t } = useLanguage();

  const cardBorderClasses = [
    'border-[#B8D3FF] dark:border-[#34577A]',
    'border-[#E6B9C5] dark:border-[#6D3948]',
    'border-[#EAC7AF] dark:border-[#6F4B35]',
    'border-[#BEE0CC] dark:border-[#456B53]'
  ];

  const steps = [
    {
      icon: MapPinned,
      title: t('how.step1Title'),
      description: t('how.step1Desc')
    },
    {
      icon: BellRing,
      title: t('how.step2Title'),
      description: t('how.step2Desc')
    },
    {
      icon: Wrench,
      title: t('how.step3Title'),
      description: t('how.step3Desc')
    },
    {
      icon: CheckCircle2,
      title: t('how.step4Title'),
      description: t('how.step4Desc')
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-12 bg-[#F4F6F8] dark:bg-[#262626]">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t('how.badge')} variant="blue" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl text-[#2F80B9] dark:text-[#3FA0D6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('how.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-[#4A4A4A] dark:text-[#a1a1a1] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('how.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className={`rounded-none bg-white dark:bg-[#1a1a1a] p-6 shadow-sm border-2 ${cardBorderClasses[index]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#1F6FA5] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-[#2F80B9] dark:text-[#3FA0D6]">0{index + 1}</span>
                </div>
                <h3 className="text-xl text-[#2F80B9] dark:text-[#3FA0D6] mb-3">{step.title}</h3>
                <p className="text-[#4A4A4A] dark:text-[#a1a1a1] leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}