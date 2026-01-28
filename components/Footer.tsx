import React from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

   // Map nav links to translations
   const translatedNavLinks = NAV_LINKS.map((link, index) => {
    let label = link.name;
    if (index === 0) label = t.nav.work;
    if (index === 1) label = t.nav.expertise;
    if (index === 2) label = t.nav.insights;
    if (index === 3) label = t.nav.careers;
    if (index === 4) label = t.nav.contact;
    return { ...link, label };
  });

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="mb-12 md:mb-0">
            <h2 className="text-5xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 mb-8">
              {COMPANY_NAME}
            </h2>
            <p className="text-xl max-w-sm text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-brand-yellow mb-6 uppercase tracking-widest text-sm">{t.footer.explore}</h4>
              <ul className="space-y-4">
                {translatedNavLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-yellow mb-6 uppercase tracking-widest text-sm">{t.footer.office}</h4>
              <ul className="space-y-4 text-gray-400">
                <li>123 Amplified Way</li>
                <li>New York, NY 10012</li>
                <li>United States</li>
                <li className="pt-4"><a href="mailto:hello@sono-amp.com" className="text-white hover:text-brand-yellow">hello@sono-amp.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-yellow mb-6 uppercase tracking-widest text-sm">{t.footer.social}</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;