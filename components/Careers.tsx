import React from 'react';
import { JOB_OPENINGS } from '../constants';
import Button from './Button';

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-24 bg-brand-gray text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Intro */}
          <div className="lg:col-span-4">
            <h3 className="text-brand-yellow font-bold tracking-widest uppercase mb-4">Join the Noise</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Build the Future with Us</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are a team of amplifiers, creators, and tech-heads. We don't just follow trends; we set the volume. If you're ready to make an impact, we want to hear from you.
            </p>
            <Button variant="outline" className="border-white/30 text-white hover:border-brand-yellow hover:text-brand-yellow">
              View Culture
            </Button>
          </div>

          {/* Right Column: Job List */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {JOB_OPENINGS.map((job) => (
                <div 
                  key={job.id} 
                  className="group bg-black/40 border border-white/5 hover:border-brand-yellow p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:bg-black/60"
                >
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">{job.role}</h4>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-bold uppercase tracking-widest mr-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-yellow hidden md:block">
                        Apply Now
                    </span>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black group-hover:border-brand-yellow transition-all">
                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center md:text-right">
                <a href="#" className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                    See Archived Roles
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;