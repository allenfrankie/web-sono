import React from 'react';
import { useLanguage } from '../LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();
  const words = t.marquee;
  
  return (
    <div className="bg-brand-yellow py-6 overflow-hidden flex border-y border-black">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-4xl md:text-6xl font-display font-bold text-black uppercase">{word}</span>
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;