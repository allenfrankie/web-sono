import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-brand-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h3 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Capabilities</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold">What We Do Best</h2>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0">
            We offer end-to-end marketing production services that scale with your needs. From concept to delivery, we are your amplifiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group relative overflow-hidden bg-brand-gray/30 border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 rounded-none min-h-[400px] flex flex-col justify-between p-8"
              >
                {/* Hover Background Image Reveal */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                </div>

                <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Learn More</span>
                  <div className="bg-transparent group-hover:bg-white rounded-full p-2 transition-all duration-300 group-hover:translate-x-2">
                    <ArrowRight className="text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;