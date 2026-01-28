import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, ChevronDown } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { useLanguage, LANGUAGES } from '../LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map nav links to translations
  const translatedNavLinks = NAV_LINKS.map((link, index) => {
    const keys = Object.keys(t.nav) as Array<keyof typeof t.nav>;
    // Simple mapping based on index order or known keys. 
    // Since NAV_LINKS is static: Work, Expertise, Insights, Careers, Contact
    // We map them to t.nav.work, t.nav.expertise, etc.
    let label = link.name;
    if (index === 0) label = t.nav.work;
    if (index === 1) label = t.nav.expertise;
    if (index === 2) label = t.nav.insights;
    if (index === 3) label = t.nav.careers;
    if (index === 4) label = t.nav.contact;
    
    return { ...link, label };
  });

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Image */}
        <a href="#" className="flex items-center gap-2 group z-50">
          <img 
            src="https://placehold.co/180x50/000000/DFFF00/png?text=SONO-AMP" 
            alt={COMPANY_NAME} 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {translatedNavLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-yellow transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="relative ml-2">
            <button 
                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors focus:outline-none"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 200)}
            >
                <Globe size={18} />
                <span>{currentLangObj.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full right-0 mt-4 w-40 bg-brand-black/95 backdrop-blur-xl border border-white/10 shadow-2xl transform transition-all duration-300 origin-top-right ${isLangMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between ${language === lang.code ? 'text-brand-yellow bg-white/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsLangMenuOpen(false);
                            }}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
          </div>

          <a href="#contact" className="px-6 py-2 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-300">
            {t.nav.letsTalk}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-8 text-center">
            {translatedNavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-4xl font-display font-bold text-white hover:text-brand-yellow transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Language Selection */}
            <div className="grid grid-cols-3 gap-4 mt-4 px-6">
                {LANGUAGES.map(lang => (
                    <button 
                        key={lang.code}
                        className={`text-sm font-bold uppercase tracking-widest px-3 py-2 border ${language === lang.code ? 'border-brand-yellow text-brand-yellow' : 'border-transparent text-gray-500'}`}
                        onClick={() => setLanguage(lang.code)}
                    >
                        {lang.code}
                    </button>
                ))}
            </div>

            <a 
              href="#contact" 
              className="mt-8 text-brand-yellow text-xl uppercase font-bold tracking-widest flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.startProject} <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;