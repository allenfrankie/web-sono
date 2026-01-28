import React from 'react';
import Button from './Button';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-32 bg-brand-yellow text-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute -top-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full border-[50px] border-black/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
          {t.contact.title}
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
          {t.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black">
            {t.contact.startProject}
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white hover:border-transparent">
            {t.contact.scheduleCall}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;