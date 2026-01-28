import React from 'react';
import { FEATURED_WORK } from '../constants';
import Button from './Button';
import { useLanguage } from '../LanguageContext';

const Work: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="work" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-brand-black font-display font-bold text-5xl md:text-6xl mb-6">{t.work.title}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {t.work.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FEATURED_WORK.map((item) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer relative ${item.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'} overflow-hidden bg-black`}
            >
              <img 
                src={item.image} 
                alt={item.project} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-brand-yellow text-sm font-bold tracking-widest uppercase mb-2">{item.client}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-2">{item.project}</h3>
                <p className="text-gray-300">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" className="border-2 border-black">{t.work.viewAll}</Button>
        </div>
      </div>
    </section>
  );
};

export default Work;