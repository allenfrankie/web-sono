import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-50">
          <div className="w-10 h-10 bg-brand-yellow rounded-none flex items-center justify-center">
            <span className="text-black font-black text-xl">S</span>
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter uppercase ${isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
            {COMPANY_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-yellow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-2 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-300">
            Let's Talk
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
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-4xl font-display font-bold text-white hover:text-brand-yellow transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-8 text-brand-yellow text-xl uppercase font-bold tracking-widest flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;