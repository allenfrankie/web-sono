import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-yellow selection:text-black">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Insights />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;