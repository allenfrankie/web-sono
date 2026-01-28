import React from 'react';
import { INSIGHTS_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Insights: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="insights" className="py-24 bg-brand-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h3 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">{t.insights.eyebrow}</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold">{t.insights.title}</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-6 md:mt-0">
            {t.insights.viewAll} <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_POSTS.map((post, index) => {
             const translatedPost = t.insights.posts[index] || { title: post.title, excerpt: post.excerpt };
             
             return (
                <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                <div className="overflow-hidden mb-6 relative">
                    <img 
                    src={post.image} 
                    alt={translatedPost.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-brand-yellow text-black text-xs font-bold uppercase px-3 py-1">
                    {post.category}
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="text-gray-500 text-sm mb-3 font-mono">{post.date}</div>
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-yellow transition-colors leading-tight">
                    {translatedPost.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                    {translatedPost.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:text-brand-yellow transition-colors">
                    {t.insights.readArticle} <ArrowUpRight size={16} />
                    </div>
                </div>
                </article>
             );
          })}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
                {t.insights.viewAll} <ArrowUpRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;