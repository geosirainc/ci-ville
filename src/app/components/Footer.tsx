import { Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import logoComplete from '../../assets/1a73cb7aee8529059d3ebc897eca7cef8ed70b09.png';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export function Footer({ currentPath }: { currentPath: string }) {
  const { t } = useLanguage();
  const homeHref = currentPath === '/' ? '#accueil' : '/';

  return (
    <footer className="bg-[#1F6FA5] text-white">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <img src={logoComplete} alt="CI-VILLE" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 leading-relaxed">
              {t('footer.aboutDesc')}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <a href={homeHref} className="text-white/80 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/application-mobile" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.mobile')}
                </a>
              </li>
              <li>
                <a href="/application-web" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.web')}
                </a>
              </li>
              <li>
                <a href="/impact-ci-ville" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.impact')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/municipalites-fondatrices" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.founders')}
                </a>
              </li>
              <li>
                <a href="/documents" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
              <li>
                <a href={t('footer.privacyUrl')} className="text-white/80 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href={t('footer.termsUrl')} className="text-white/80 hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:infos@ci-ville.ca" className="text-white/80 hover:text-white transition-colors">
                  infos@ci-ville.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+14383572118" className="text-white/80 hover:text-white transition-colors">
                  +1 438 357 2118
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61591631753943" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="w-9 h-9 rounded-none border border-white text-white flex items-center justify-center hover:bg-white hover:text-[#1F6FA5] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/ci-villepage/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="w-9 h-9 rounded-none border border-white text-white flex items-center justify-center hover:bg-white hover:text-[#1F6FA5] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-6 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <p className="text-white/80 text-sm text-center md:text-right">
              {t('footer.ownership')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}