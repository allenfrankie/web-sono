import React from 'react';
import Button from './Button';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=99" 
          alt="Abstract Creative Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="animate-fade-in-up text-brand-yellow font-bold tracking-[0.2em] uppercase text-sm mb-6">
            {t.hero.weAre}
          </h2>
          <h1 className="animate-fade-in-up font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-white mb-10 opacity-0" style={{ animationDelay: '0.2s' }}>
            {t.hero.titleLine1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">{t.hero.titleLine2}</span>
          </h1>
          <p className="animate-fade-in-up opacity-0 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed" style={{ animationDelay: '0.4s' }}>
            {t.hero.description}
          </p>
          <div className="animate-fade-in-up opacity-0 flex flex-col md:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
            <Button arrow>{t.hero.ctaWork}</Button>
            <Button variant="outline">{t.hero.ctaExpertise}</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-brand-yellow to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;