import { BarChart3, Map, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import platformImage from '../../assets/45e467468841a7aa366e337a8e80cd030b9b492d.png';
import { SectionBadge } from './SectionBadge';

export function WebPlatform() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Map,
      title: t('web.map'),
      description: t('web.mapDesc')
    },
    {
      icon: BarChart3,
      title: t('web.dashboard'),
      description: t('web.dashboardDesc')
    },
    {
      icon: Users,
      title: t('web.team'),
      description: t('web.teamDesc')
    },
    {
      icon: Calendar,
      title: t('web.planning'),
      description: t('web.planningDesc')
    }
  ];

  return (
    <section id="plateforme" className="py-12 bg-[#F4F6F8] dark:bg-[#262626] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Desktop Mockup */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Browser window */}
              <motion.div 
                className="bg-white dark:bg-[#1a1a1a] rounded-none shadow-2xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {/* Browser header */}
                <div className="bg-gray-200 dark:bg-[#333] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-[#1a1a1a] rounded-none mx-4 px-3 py-1 text-xs text-gray-500 dark:text-gray-300">
                    https://plateforme.ci-ville.com
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="bg-[#F4F6F8] dark:bg-[#1a1a1a] p-3">
                  {/* Stats cards */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <motion.div 
                      className="bg-white dark:bg-[#262626] rounded-none p-3 shadow-sm"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <p className="text-xs text-[#4A4A4A] dark:text-gray-300 mb-1">{t('web.reports')}</p>
                      <p className="text-xl text-[#2F80B9]">247</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white dark:bg-[#262626] rounded-none p-3 shadow-sm"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <p className="text-xs text-[#4A4A4A] dark:text-gray-300 mb-1">{t('web.inProgress')}</p>
                      <p className="text-xl text-[#3FA0D6]">38</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white dark:bg-[#262626] rounded-none p-3 shadow-sm"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <p className="text-xs text-[#4A4A4A] dark:text-gray-300 mb-1">{t('web.resolved')}</p>
                      <p className="text-xl text-[#1F6FA5]">209</p>
                    </motion.div>
                  </div>

                  {/* Platform screenshot */}
                  <motion.div
                    className="rounded-none overflow-hidden shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <img
                      src={platformImage}
                      alt="CI-VILLE Plateforme de Signalement Citoyen"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#2F80B9]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#3FA0D6]/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
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
              <SectionBadge label={t('web.badge')} variant="orange" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl text-[#2F80B9] dark:text-[#3FA0D6] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('web.title')}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-[#4A4A4A] dark:text-[#a1a1a1] mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('web.subtitle')}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-white dark:bg-[#1a1a1a] rounded-none p-4 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1F6FA5] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg text-[#2F80B9] dark:text-[#3FA0D6] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#4A4A4A] dark:text-[#a1a1a1] leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <a href="mailto:infos@ci-ville.ca?subject=Demande%20de%20d%C3%A9monstration%20CI-VILLE" className="px-8 py-3 bg-[#1F6FA5] text-white rounded-none hover:shadow-lg transition-all">
                {t('web.demo')}
              </a>
              <a href="/impact-ci-ville" className="px-8 py-3 bg-white dark:bg-[#262626] border-2 border-[#2F80B9] dark:border-[#3FA0D6] text-[#2F80B9] dark:text-[#3FA0D6] rounded-none hover:bg-white/80 dark:hover:bg-[#2a2a2a] transition-all">
                {t('web.pricing')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}