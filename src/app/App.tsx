import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { LanguageProvider } from './contexts/LanguageContext';
import { HomePage } from './pages/HomePage';
import { ImpactPage } from './pages/ImpactPage';
import { MobilePage } from './pages/MobilePage';
import { WebPage } from './pages/WebPage';
import { FoundersPage } from './pages/FoundersPage';
import { DocumentsPage } from './pages/DocumentsPage';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  let page = <HomePage />;

  if (pathname === '/application-mobile') {
    page = <MobilePage />;
  } else if (pathname === '/application-web') {
    page = <WebPage />;
  } else if (pathname === '/impact-ci-ville') {
    page = <ImpactPage />;
  } else if (pathname === '/municipalites-fondatrices') {
    page = <FoundersPage />;
  } else if (pathname === '/documents') {
    page = <DocumentsPage />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-[#1a1a1a]">
        <Header currentPath={pathname} />
        {page}
        <Footer currentPath={pathname} />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}