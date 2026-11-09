import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { countriesData } from '../data/countries';
import { Mail, Heart, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setRoute, navigateToCountry, navigateToCategory } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#302D28] text-[#F5F0E7] pt-16 pb-12 border-t-4 border-[#B76B4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-[#30483A] rounded-2xl p-8 sm:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#B76B4A]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E7D8C5]">
              NAVI Cooking Community
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Let’s Make Something Delicious.
            </h2>
            <p className="text-sm text-[#E7D8C5]/90 leading-relaxed">
              Receive new recipes, home-cooking techniques, holiday seasonal countdowns, and food traditions from around the world straight to your inbox. No spam, ever.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-sm text-[#E7D8C5] bg-[#30483A]/80 border border-[#E7D8C5]/30 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 text-[#B76B4A]" />
                <span>Thank you for subscribing! Welcome to the NAVI kitchen table.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-4 py-3 text-sm rounded-xl bg-white text-[#302D28] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B76B4A]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white font-medium rounded-xl text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  Join the Table
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#E7D8C5]/60">
              We respect your privacy. You can unsubscribe at any time with one click.
            </p>
          </div>
        </div>

        {/* 4-Column Editorial Links Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-sm">
          
          {/* Brand Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-widest text-white">
              NAVI
            </span>
            <p className="text-xs text-[#B76B4A] uppercase tracking-wider font-semibold">
              Recipes Made With Love • Memories Shared Around the Table
            </p>
            <p className="text-xs text-[#E7D8C5]/80 leading-relaxed">
              NAVI is an international home-cooking magazine founded by <strong>Naveed Afzal</strong>, celebrating food traditions, memories, cultures, and simple homemade recipes. We believe the kitchen is the true heart of the home, where family gatherings turn simple ingredients into lasting memories.
            </p>
            <div className="pt-2 text-xs text-[#E7D8C5]/70 flex items-center gap-1.5">
              <span>Editor & Founder: Naveed Afzal</span>
              <span>•</span>
              <button 
                onClick={() => setRoute('contact')}
                className="underline hover:text-white transition-colors cursor-pointer"
              >
                Afzal460@gmail.com
              </button>
            </div>
          </div>

          {/* Major Recipe Collections */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-white">
              Recipe Collections
            </h3>
            <ul className="space-y-2 text-xs text-[#E7D8C5]/80">
              <li>
                <button onClick={() => setRoute('christmas')} className="hover:text-white transition-colors cursor-pointer">
                  Christmas 2026 Special
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('new-year')} className="hover:text-white transition-colors cursor-pointer">
                  New Year Celebrations
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('desserts-baking')} className="hover:text-white transition-colors cursor-pointer">
                  Desserts & Baking
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('gluten-free')} className="hover:text-white transition-colors cursor-pointer">
                  Gluten-Free Homemade
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('vegetarian-vegan')} className="hover:text-white transition-colors cursor-pointer">
                  Vegetarian & Vegan Table
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('comfort-food')} className="hover:text-white transition-colors cursor-pointer">
                  Homemade Comfort Food
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('recipes')} className="hover:text-white font-medium text-[#B76B4A] transition-colors cursor-pointer">
                  Browse All 48 Recipes →
                </button>
              </li>
            </ul>
          </div>

          {/* Around the World Direct Directory */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-white">
              Around the World
            </h3>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-[#E7D8C5]/80">
              {countriesData.slice(0, 10).map((c) => (
                <button
                  key={c.code}
                  onClick={() => navigateToCountry(c.code)}
                  className="text-left hover:text-white transition-colors cursor-pointer truncate"
                >
                  {c.flag} {c.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => setRoute('countries')}
              className="text-xs text-[#B76B4A] hover:underline pt-1 inline-block cursor-pointer"
            >
              All 12 Cuisines →
            </button>
          </div>

          {/* Editorial & Trust Pages (AdSense Compliance) */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B76B4A]" />
              <span>Trust & Editorial</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#E7D8C5]/80">
              <li>
                <button onClick={() => setRoute('about')} className="hover:text-white transition-colors cursor-pointer">
                  About NAVI & Naveed Afzal
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('editorial-policy')} className="hover:text-white transition-colors cursor-pointer">
                  Editorial Policy
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('testing-policy')} className="hover:text-white transition-colors cursor-pointer">
                  Recipe Development & Testing
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('affiliate-disclosure')} className="hover:text-white transition-colors cursor-pointer">
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('cookies')} className="hover:text-white transition-colors cursor-pointer">
                  Cookie Policy & Consent
                </button>
              </li>
              <li>
                <button onClick={() => setRoute('terms')} className="hover:text-white transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Amazon Associates Legal Disclosure */}
        <div className="pt-8 pb-6 text-[11px] text-[#E7D8C5]/60 leading-relaxed border-b border-white/5 space-y-2">
          <p>
            <strong>Amazon Associates Disclosure:</strong> NAVI is an independent editorial food publication. As an Amazon Associate, NAVI earns from qualifying purchases. We independently recommend kitchen products and equipment that provide genuine value to home cooks. Product prices, ratings, and availability are accurate at time of publication and subject to change.
          </p>
          <p>
            <strong>Editorial Integrity Notice:</strong> All recipe articles on NAVI are original culinary works written with care by Naveed Afzal. We never scrape external recipes or fabricate testing claims. AI-generated photography is clearly categorized and is not presented as evidence of physical recipe testing.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Admin Portal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E7D8C5]/60 gap-4">
          <p>
            © {new Date().getFullYear()} NAVI Magazine. Created and published by <strong>Naveed Afzal</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setRoute('admin')}
              className="text-[#E7D8C5]/50 hover:text-[#B76B4A] transition-colors flex items-center gap-1 cursor-pointer text-[11px]"
              title="Editorial Admin & CMS"
            >
              <Lock className="w-3 h-3" />
              <span>Publisher CMS & Pre-Launch Audit</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
