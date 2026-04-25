import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.mobile': 'Application Mobile',
    'nav.web': 'Application Web',
    'nav.features': 'Fonctionnalités',
    'nav.impact': 'Impact CI-VILLE',
    'nav.contact': 'Nous Contacter',
    
    // Hero
    'hero.badge': 'Solution de Signalements Citoyens',
    'hero.title': 'Rapprochez Votre',
    'hero.titleHighlight': 'Municipalité',
    'hero.titleEnd': 'de Ses',
    'hero.titleEndHighlight': 'Citoyens',
    'hero.subtitleStart': '',
    'hero.subtitleHighlight': 'CI-VILLE',
    'hero.subtitleEnd': ' est une plateforme complète permettant aux citoyens de signaler facilement les problèmes urbains et aux municipalités de les gérer efficacement.',
    'hero.cta': 'Découvrir les outils',
    'hero.demo': 'Demander une Démo',

    // Collaborative tools
    'tools.badge': 'Un puissant outil de travail collaboratif',
    'tools.title': 'Deux environnements, une seule vision terrain',
    'tools.subtitle': 'CI-VILLE réunit une application mobile pensée pour les citoyens et une plateforme web conçue pour les équipes municipales.',
    'tools.mobileTitle': 'Application mobile CI-VILLE',
    'tools.mobileSubtitle': 'Une expérience terrain rapide, intuitive et visuelle pour signaler les incidents en quelques gestes.',
    'tools.mobileHoverIntro': 'Un design simple, intuitif et immersif facilitant l’utilisation même pour des non habitués d’outils numériques.',
    'tools.mobileHoverCategories': 'Choisissez une catégorie, affinez votre signalement en sélectionnant une ou plusieurs sous-catégories.',
    'tools.mobileHoverPhotos': 'Poursuivez en ajoutant jusqu’à 3 images depuis votre appareil photo ou votre galerie.',
    'tools.mobileHoverSubmit': 'Décrivez le problème et envoyez votre contribution au bien-être de votre environnement. Recevez des notifications pour suivre le statut de vos signalements et suivez votre impact dans la section Mon profil.',
    'tools.webTitle': 'Application web CI-VILLE',
    'tools.webSubtitle': 'Un cockpit opérationnel pour suivre, prioriser et résoudre les signalements avec méthode.',
    'tools.webHoverIntro': 'Localisez et consultez tous les signalements, tracez des itinéraires et organisez vos opérations de terrain.',
    'tools.webHoverStats': 'Consultez les statistiques et tendances dans un dashboard interactif et imprimez des rapports précis.',
    'tools.webHoverManagers': 'Créez et attribuez des gestionnaires par catégorie et suivez les taux de prise en charge.',
    'tools.webHoverData': 'Téléchargez et intégrez vos données dans vos processus internes.',
    'tools.android': 'Télécharger l’application Android',
    'tools.apple': 'Télécharger l’application Apple',
    'tools.comingSoon': 'Bientôt disponible sur cette plateforme',
    'tools.mobilePage': 'Voir la page Application mobile',
    'tools.webPage': 'Voir la page Application web',

    // Get started
    'start.badge': 'Commencez l’aventure',
    'start.title': 'Téléchargez l’application et passez à l’action',
    'start.subtitle': 'Rejoignez l’expérience CI-VILLE sur mobile et donnez plus de portée à chaque signalement citoyen.',

    // How it works
    'how.badge': 'Comment ça marche',
    'how.title': 'Un parcours simple du signalement à la résolution',
    'how.subtitle': 'Chaque étape fluidifie la collaboration entre citoyens, gestionnaires municipaux et équipes terrain.',
    'how.step1Title': 'Le citoyen signale',
    'how.step1Desc': 'Une photo, une géolocalisation et une courte description suffisent pour transmettre l’information utile.',
    'how.step2Title': 'La ville qualifie',
    'how.step2Desc': 'Les gestionnaires reçoivent, catégorisent et priorisent les signalements dans la plateforme web.',
    'how.step3Title': 'Les équipes interviennent',
    'how.step3Desc': 'Les interventions sont organisées plus efficacement avec une meilleure visibilité sur le terrain.',
    'how.step4Title': 'Tout le monde suit l’avancement',
    'how.step4Desc': 'Le statut est mis à jour, l’action est tracée et le citoyen est informé de l’évolution.',
    
    // Mobile App
    'mobile.badge': 'Application Mobile',
    'mobile.title': 'Signalez les Incidents de Votre Ville',
    'mobile.subtitle': 'L\'application mobile CI-VILLE permet aux citoyens de signaler rapidement et facilement tous types d\'incidents urbains : nids-de-poule, éclairage défectueux, graffitis, déchets encombrants et bien plus encore.',
    'mobile.photo': 'Signalement Photo',
    'mobile.photoDesc': 'Prenez une photo du problème directement depuis votre téléphone',
    'mobile.geo': 'Géolocalisation',
    'mobile.geoDesc': 'Localisation automatique et précise du signalement sur la carte',
    'mobile.desc': 'Description Rapide',
    'mobile.descDesc': 'Ajoutez une description et catégorisez le type de problème',
    'mobile.notif': 'Suivi en Temps Réel',
    'mobile.notifDesc': 'Recevez des notifications sur l\'état de votre signalement',
    'mobile.history': 'Historique',
    'mobile.historyDesc': 'Consultez tous vos signalements et leur statut de résolution',
    'mobile.impact': 'Mon Impact',
    'mobile.impactDesc': 'Construisez votre profil citoyen en cumulant des points et en collectant des badges de citoyen',
    'mobile.download': 'Télécharger l\'App',
    'mobile.downloadAndroid': 'Télécharger sur Android',
    'mobile.downloadApple': 'Télécharger sur Apple',
    'mobile.learnMore': 'En Savoir Plus',
    'mobile.headerTitle': 'Signalement Citoyen',
    'mobile.headerSubtitle': 'Ton geste compte, ta voix change',
    'mobile.notification': 'Nouveau signalement',
    'mobile.location': 'Rue Saint-Denis, Montreal',
    'mobile.pageTitle': 'Application mobile pour signaler, suivre et mobiliser',
    'mobile.pageSubtitle': 'Signalez en quelques gestes, suivez chaque intervention en temps reel et transformez chaque contribution citoyenne en action concrete pour votre ville.',
    
    // Web Platform
    'web.badge': 'Application Web',
    'web.title': 'Gérez Efficacement Votre Municipalité',
    'web.subtitle': 'La plateforme web CI-VILLE offre aux municipalités un outil puissant pour centraliser, prioriser et gérer tous les signalements citoyens avec une efficacité maximale.',
    'web.map': 'Cartographie Interactive',
    'web.mapDesc': 'Visualisez tous les signalements sur une carte en temps réel',
    'web.dashboard': 'Tableaux de Bord',
    'web.dashboardDesc': 'Suivez les statistiques et les tendances de votre municipalité',
    'web.team': 'Gestion d\'Équipe',
    'web.teamDesc': 'Organisez votre équipe de gestionnaires par catégorie de signalement',
    'web.planning': 'Planification',
    'web.planningDesc': 'Planifiez vos journées d\'intervention en traçant des itinéraires de plusieurs signalements.',
    'web.analytics': 'Analyses Avancées',
    'web.analyticsDesc': 'Identifiez les zones problématiques et optimisez les ressources',
    'web.config': 'Configuration',
    'web.configDesc': 'Personnalisez les catégories et les flux de travail',
    'web.demo': 'Demander une Démo',
    'web.pricing': 'Tarification',
    'web.reports': 'Signalements',
    'web.inProgress': 'En cours',
    'web.resolved': 'Résolus',
    'web.pageTitle': 'Application web pour piloter les opérations municipales',
    'web.pageSubtitle': 'La plateforme web centralise les signalements, accélère la coordination et améliore la prise de décision des équipes municipales.',

    // Impact page
    'impact.pageTitle': 'Impact CI-VILLE pour les villes et leurs citoyens',
    'impact.pageSubtitle': 'Une page dédiée pour présenter clairement les avantages de la solution et les gains concrets pour chaque partie prenante.',
    
    // Features
    'features.fast': 'Rapide et Simple',
    'features.fastDesc': 'Interface intuitive pour citoyens et gestionnaires municipaux',
    'features.secure': 'Sécurisé',
    'features.secureDesc': 'Données protégées avec les plus hauts standards de sécurité',
    'features.accessible': 'Accessible 24/7',
    'features.accessibleDesc': 'Disponible à tout moment, sur tous les appareils',
    'features.confidential': 'Confidentiel',
    'features.confidentialDesc': 'Respect de la vie privée et conformité RGPD',
    'features.updates': 'Mise à jour',
    'features.updatesDesc': 'Évolution continue avec nouvelles fonctionnalités',
    'features.support': 'Support Dédié',
    'features.supportDesc': 'Équipe disponible pour accompagner les municipalités',
    'features.why': 'Pourquoi Choisir CI-VILLE',
    'features.badge': 'Avantages',
    'features.title': 'Impact CI-VILLE',
    'features.subtitle': 'Des avantages immédiats et un impact concret pour les municipalités comme pour les citoyens.',
    'features.impactTitle': 'Pour qui et pour quoi',
    'features.municipalities': 'Pour les municipalités',
    'features.citizens': 'Pour les citoyens',
    'features.municipal1': 'Amélioration de la gestion opérationnelle',
    'features.municipal2': 'Meilleure prise de décision',
    'features.municipal3': 'Renforcement de la relation citoyenne',
    'features.municipal4': 'Transparence et traçabilité',
    'features.municipal5': 'Optimisation des coûts',
    'features.citizen1': 'Une voix plus forte et plus directe',
    'features.citizen2': 'Gain de temps',
    'features.citizen3': 'Transparence totale',
    'features.citizen4': 'Amélioration du cadre de vie',
    'features.citizen5': 'Engagement citoyen facilité',
    'features.stat1': 'Signalements Traités',
    'features.stat2': 'Municipalités Partenaires',
    'features.stat3': 'Taux de Satisfaction',
    'features.stat4': 'Temps de Réponse Moyen',
    
    // Footer
    'footer.about': 'À Propos',
    'footer.aboutDesc': 'La solution complète de gestion des signalements citoyens pour des villes plus réactives et connectées.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Ressources',
    'footer.documentation': 'Documentation',
    'footer.help': 'Centre d\'Aide',
    'footer.pricing': 'Tarification',
    'footer.privacy': 'Confidentialité',
    'footer.contact': 'Contact',
    'footer.phone': 'Téléphone',
    'footer.email': 'Email',
    'footer.address': 'Adresse',
    'footer.copyright': '© 2026 CI-VILLE. Tous droits réservés.',
    'footer.ownership': 'CI-VILLE est une solution développée et détenue par',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.mobile': 'Mobile App',
    'nav.web': 'Web App',
    'nav.features': 'Features',
    'nav.impact': 'CI-VILLE Impact',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.badge': 'Citizen Reporting Solution',
    'hero.title': 'Bring Your',
    'hero.titleHighlight': 'Municipality',
    'hero.titleEnd': 'Closer to Its',
    'hero.titleEndHighlight': 'Citizens',
    'hero.subtitleStart': '',
    'hero.subtitleHighlight': 'CI-VILLE',
    'hero.subtitleEnd': ' is a comprehensive platform that allows citizens to easily report urban issues and municipalities to manage them efficiently.',
    'hero.cta': 'Explore the tools',
    'hero.demo': 'Request a Demo',

    // Collaborative tools
    'tools.badge': 'A powerful collaborative workflow tool',
    'tools.title': 'Two environments, one shared field vision',
    'tools.subtitle': 'CI-VILLE brings together a mobile application for citizens and a web platform designed for municipal teams.',
    'tools.mobileTitle': 'CI-VILLE mobile app',
    'tools.mobileSubtitle': 'A fast, intuitive, visual field experience to report incidents in just a few taps.',
    'tools.mobileHoverIntro': 'A simple, intuitive, immersive design that stays easy to use even for people less familiar with digital tools.',
    'tools.mobileHoverCategories': 'Start a report by choosing from available categories, for example Water and Sanitation, then refine it with one or more subcategories such as sewer overflow, water contamination, or blocked pipes.',
    'tools.mobileHoverPhotos': 'Continue your report by adding up to 3 photos from your camera or gallery.',
    'tools.mobileHoverSubmit': 'Add a short description and send your contribution to the wellbeing of your environment.',
    'tools.webTitle': 'CI-VILLE web application',
    'tools.webSubtitle': 'An operational cockpit to track, prioritize, and resolve reports with consistency.',
    'tools.webHoverIntro': 'Locate and review all reports, plan routes, and organize your field operations.',
    'tools.webHoverStats': 'Review statistics and trends in an interactive dashboard and print accurate reports.',
    'tools.webHoverManagers': 'Create and assign managers by category and track response and handling rates.',
    'tools.webHoverData': 'Download and integrate your data into your internal processes.',
    'tools.android': 'Download the Android app',
    'tools.apple': 'Download the Apple app',
    'tools.comingSoon': 'Coming soon to this platform',
    'tools.mobilePage': 'View the mobile app page',
    'tools.webPage': 'View the web app page',

    // Get started
    'start.badge': 'Start the journey',
    'start.title': 'Download the app and take action',
    'start.subtitle': 'Join the CI-VILLE mobile experience and give every citizen report more reach.',

    // How it works
    'how.badge': 'How it works',
    'how.title': 'A simple journey from report to resolution',
    'how.subtitle': 'Each step improves collaboration between citizens, municipal managers, and field teams.',
    'how.step1Title': 'Citizens report',
    'how.step1Desc': 'A photo, a location, and a short description are enough to submit the right information.',
    'how.step2Title': 'The city qualifies',
    'how.step2Desc': 'Managers receive, categorize, and prioritize reports in the web platform.',
    'how.step3Title': 'Teams intervene',
    'how.step3Desc': 'Field operations are organized more efficiently with better visibility on what needs attention.',
    'how.step4Title': 'Everyone tracks progress',
    'how.step4Desc': 'Statuses are updated, actions are traceable, and citizens stay informed.',
    
    // Mobile App
    'mobile.badge': 'Mobile App',
    'mobile.title': 'Report Incidents in Your City',
    'mobile.subtitle': 'The CI-VILLE mobile app allows citizens to quickly and easily report all types of urban incidents: potholes, defective lighting, graffiti, bulky waste, and much more.',
    'mobile.photo': 'Photo Reporting',
    'mobile.photoDesc': 'Take a photo of the problem directly from your phone',
    'mobile.geo': 'Geolocation',
    'mobile.geoDesc': 'Automatic and precise location of the report on the map',
    'mobile.desc': 'Quick Description',
    'mobile.descDesc': 'Add a description and categorize the type of problem',
    'mobile.notif': 'Real-time Tracking',
    'mobile.notifDesc': 'Receive notifications on the status of your report',
    'mobile.history': 'History',
    'mobile.historyDesc': 'Check all your reports and their resolution status',
    'mobile.impact': 'My Impact',
    'mobile.impactDesc': 'Build your citizen profile by accumulating points and collecting citizen badges',
    'mobile.download': 'Download the App',
    'mobile.downloadAndroid': 'Download on Android',
    'mobile.downloadApple': 'Download on Apple',
    'mobile.learnMore': 'Learn More',
    'mobile.headerTitle': 'Citizen Reporting',
    'mobile.headerSubtitle': 'Your action counts, your voice matters',
    'mobile.notification': 'New report',
    'mobile.location': 'Saint-Denis Street, Montreal',
    'mobile.pageTitle': 'Mobile app to report, track, and engage',
    'mobile.pageSubtitle': 'Report issues in just a few taps, track every intervention in real time, and turn each citizen contribution into concrete action for your city.',
    
    // Web Platform
    'web.badge': 'Web App',
    'web.title': 'Manage Your Municipality Efficiently',
    'web.subtitle': 'The CI-VILLE web platform offers municipalities a powerful tool to centralize, prioritize, and manage all citizen reports with maximum efficiency.',
    'web.map': 'Interactive Mapping',
    'web.mapDesc': 'View all reports on a real-time map',
    'web.dashboard': 'Dashboards',
    'web.dashboardDesc': 'Track statistics and trends for your municipality',
    'web.team': 'Team Management',
    'web.teamDesc': 'Organize your team of managers by report category',
    'web.planning': 'Planning',
    'web.planningDesc': 'Plan your intervention days by plotting routes of multiple reports.',
    'web.analytics': 'Advanced Analytics',
    'web.analyticsDesc': 'Identify problem areas and optimize resources',
    'web.config': 'Configuration',
    'web.configDesc': 'Customize categories and workflows',
    'web.demo': 'Request a Demo',
    'web.pricing': 'Pricing',
    'web.reports': 'Reports',
    'web.inProgress': 'In Progress',
    'web.resolved': 'Resolved',
    'web.pageTitle': 'Web application to run municipal operations',
    'web.pageSubtitle': 'The web platform centralizes reports, improves coordination, and supports stronger municipal decision-making.',

    // Impact page
    'impact.pageTitle': 'CI-VILLE impact for cities and citizens',
    'impact.pageSubtitle': 'A dedicated page to clearly present the solution benefits and the concrete gains for each stakeholder.',
    
    // Features
    'features.badge': 'Benefits',
    'features.title': 'CI-VILLE Impact',
    'features.subtitle': 'Immediate advantages and concrete impact for municipalities as well as citizens.',
    'features.fast': 'Fast and Simple',
    'features.fastDesc': 'Intuitive interface for citizens and municipal managers',
    'features.secure': 'Secure',
    'features.secureDesc': 'Data protected with the highest security standards',
    'features.accessible': 'Accessible 24/7',
    'features.accessibleDesc': 'Available at any time, on all devices',
    'features.confidential': 'Confidential',
    'features.confidentialDesc': 'Respect for privacy and GDPR compliance',
    'features.updates': 'Updates',
    'features.updatesDesc': 'Continuous evolution with new features',
    'features.support': 'Dedicated Support',
    'features.supportDesc': 'Team available to support municipalities',
    'features.why': 'Why Choose CI-VILLE',
    'features.impactTitle': 'Who benefits and how',
    'features.municipalities': 'For municipalities',
    'features.citizens': 'For citizens',
    'features.municipal1': 'Improved operational management',
    'features.municipal2': 'Better decision-making',
    'features.municipal3': 'Stronger citizen relationships',
    'features.municipal4': 'Transparency and traceability',
    'features.municipal5': 'Cost optimization',
    'features.citizen1': 'A stronger, more direct voice',
    'features.citizen2': 'Time savings',
    'features.citizen3': 'Full transparency',
    'features.citizen4': 'Improved living environment',
    'features.citizen5': 'Easier citizen engagement',
    'features.stat1': 'Reports Processed',
    'features.stat2': 'Partner Municipalities',
    'features.stat3': 'Satisfaction Rate',
    'features.stat4': 'Average Response Time',
    
    // Footer
    'footer.about': 'About',
    'footer.aboutDesc': 'The complete citizen reporting management solution for more responsive and connected cities.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Resources',
    'footer.documentation': 'Documentation',
    'footer.help': 'Help Center',
    'footer.pricing': 'Pricing',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contact',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address',
    'footer.copyright': '© 2026 CI-VILLE. All rights reserved.',
    'footer.ownership': 'CI-VILLE is a solution developed and owned by',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}