import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-yellow selection:text-black">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;