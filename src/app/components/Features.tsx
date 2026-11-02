import { Shield, Zap, Globe, Lock, RefreshCw, Headphones, Building2, Users, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { SectionBadge } from './SectionBadge';
import { StatsBanner } from './StatsBanner';

export function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Zap,
      title: t('features.fast'),
      description: t('features.fastDesc'),
      hoverBorderClass: 'hover:border-[#3FA0D6]',
      hoverStripeClass: 'bg-[#2F80B9]',
      iconClass: 'bg-[#2F80B9]',
      hoverTitleClass: 'group-hover:text-[#2F80B9]',
      hoverSurfaceClass: 'hover:bg-[#F2FAFE] dark:hover:bg-[#102532]'
    },
    {
      icon: Shield,
      title: t('features.secure'),
      description: t('features.secureDesc'),
      hoverBorderClass: 'hover:border-[#DD6B4D]',
      hoverStripeClass: 'bg-[#DD6B4D]',
      iconClass: 'bg-[#DD6B4D]',
      hoverTitleClass: 'group-hover:text-[#DD6B4D]',
      hoverSurfaceClass: 'hover:bg-[#FFF5F1] dark:hover:bg-[#321A16]'
    },
    {
      icon: Globe,
      title: t('features.accessible'),
      description: t('features.accessibleDesc'),
      hoverBorderClass: 'hover:border-[#F28C28]',
      hoverStripeClass: 'bg-[#F28C28]',
      iconClass: 'bg-[#F28C28]',
      hoverTitleClass: 'group-hover:text-[#D97A1F]',
      hoverSurfaceClass: 'hover:bg-[#FFF7EE] dark:hover:bg-[#352313]'
    },
    {
      icon: Lock,
      title: t('features.confidential'),
      description: t('features.confidentialDesc'),
      hoverBorderClass: 'hover:border-[#4DAA57]',
      hoverStripeClass: 'bg-[#4DAA57]',
      iconClass: 'bg-[#4DAA57]',
      hoverTitleClass: 'group-hover:text-[#3E8E48]',
      hoverSurfaceClass: 'hover:bg-[#F2FBF3] dark:hover:bg-[#162A19]'
    },
    {
      icon: RefreshCw,
      title: t('features.updates'),
      description: t('features.updatesDesc'),
      hoverBorderClass: 'hover:border-[#7B61C9]',
      hoverStripeClass: 'bg-[#7B61C9]',
      iconClass: 'bg-[#7B61C9]',
      hoverTitleClass: 'group-hover:text-[#6A50B6]',
      hoverSurfaceClass: 'hover:bg-[#F6F2FE] dark:hover:bg-[#231A34]'
    },
    {
      icon: Headphones,
      title: t('features.support'),
      description: t('features.supportDesc'),
      hoverBorderClass: 'hover:border-[#14A3A5]',
      hoverStripeClass: 'bg-[#14A3A5]',
      iconClass: 'bg-[#14A3A5]',
      hoverTitleClass: 'group-hover:text-[#10898B]',
      hoverSurfaceClass: 'hover:bg-[#EFFCFB] dark:hover:bg-[#142B2B]'
    }
  ];

  const impacts = [
    {
      icon: Building2,
      title: t('features.municipalities'),
      items: [
        t('features.municipal1'),
        t('features.municipal2'),
        t('features.municipal3'),
        t('features.municipal4'),
        t('features.municipal5')
      ]
    },
    {
      icon: Users,
      title: t('features.citizens'),
      items: [
        t('features.citizen1'),
        t('features.citizen2'),
        t('features.citizen3'),
        t('features.citizen4'),
        t('features.citizen5')
      ]
    }
  ];

  return (
    <section id="fonctionnalites" className="py-12 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge label={t('features.badge')} variant="green" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl text-[#2F80B9] dark:text-[#3FA0D6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('features.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#4A4A4A] dark:text-[#a1a1a1] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className={`group relative bg-[#F4F6F8] dark:bg-[#262626] rounded-none p-6 hover:shadow-xl transition-all border border-transparent ${feature.hoverBorderClass} ${feature.hoverSurfaceClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${feature.hoverStripeClass} rounded-none opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className={`w-12 h-12 rounded-none ${feature.iconClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className={`text-xl text-[#2F80B9] dark:text-[#3FA0D6] mb-2 transition-colors ${feature.hoverTitleClass}`}>{feature.title}</h3>
                <p className="text-sm text-[#4A4A4A] dark:text-[#a1a1a1]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="mt-12">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl text-[#2F80B9] dark:text-[#3FA0D6] mb-3">{t('features.impactTitle')}</h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div
                  key={impact.title}
                  className="rounded-none bg-[#F4F6F8] dark:bg-[#262626] p-6 lg:p-8 border border-[#d9e9f4] dark:border-white/10 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-none bg-[#1F6FA5] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl text-[#2F80B9] dark:text-[#3FA0D6]">{impact.title}</h4>
                  </div>

                  <ul className="space-y-3">
                    {impact.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4A4A4A] dark:text-[#d4d4d4]">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2F80B9] dark:text-[#3FA0D6]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
        <StatsBanner />
      </div>
    </section>
  );
}