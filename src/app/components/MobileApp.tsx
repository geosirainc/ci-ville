import { Camera, MapPin, Bell, MessageSquare, CheckCircle, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import animationGif from '../../assets/8b422f17b1323b90d217fcfb3b0f05c447675672.png';
import { motion } from 'motion/react';
import { SectionBadge } from './SectionBadge';
import { StoreButtons } from './StoreButtons';

export function MobileApp() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Camera,
      title: t('mobile.photo'),
      description: t('mobile.photoDesc')
    },
    {
      icon: MapPin,
      title: t('mobile.geo'),
      description: t('mobile.geoDesc')
    },
    {
      icon: MessageSquare,
      title: t('mobile.desc'),
      description: t('mobile.descDesc')
    },
    {
      icon: Bell,
      title: t('mobile.notif'),
      description: t('mobile.notifDesc')
    },
    {
      icon: CheckCircle,
      title: t('mobile.history'),
      description: t('mobile.historyDesc')
    },
    {
      icon: Trophy,
      title: t('mobile.impact'),
      description: t('mobile.impactDesc')
    }
  ];

  return (
    <section id="application" className="py-12 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionBadge label={t('mobile.badge')} variant="red" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl text-[#2F80B9] dark:text-[#3FA0D6] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('mobile.title')}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-[#4A4A4A] dark:text-[#a1a1a1] mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('mobile.subtitle')}
            </motion.p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#1F6FA5] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[#2F80B9] dark:text-[#3FA0D6] mb-0.5">{feature.title}</h3>
                      <p className="text-sm text-[#4A4A4A] dark:text-[#a1a1a1]">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <StoreButtons className="grid gap-4 sm:grid-cols-2 sm:items-center" />
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup with Animation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <motion.div 
                className="relative rounded-[3rem] border-[14px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-10"></div>
                <div className="relative bg-white aspect-[9/19] flex flex-col items-center justify-center">
                  {/* Animation and texts inside phone screen */}
                  <motion.div 
                    className="text-center space-y-4 px-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <img 
                      src={animationGif} 
                      alt="Animation" 
                      className="w-40 h-40 mx-auto object-contain"
                    />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#2F80B9]">
                        {t('mobile.headerTitle')}
                      </h3>
                      <p className="text-base text-[#4A4A4A]">
                        {t('mobile.headerSubtitle')}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#3FA0D6]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#2F80B9]/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}