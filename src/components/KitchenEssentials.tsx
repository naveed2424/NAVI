import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { affiliateProducts, buyingGuides } from '../data/affiliateProducts';
import { 
  ShoppingBag, 
  ExternalLink, 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  BookOpen, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const KitchenEssentials: React.FC = () => {
  const { currentMarketplace, setCurrentMarketplace, affiliateTags } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'mixers', label: 'Stand Mixers' },
    { id: 'roasting-pans', label: 'Roasting Pans' },
    { id: 'thermometers', label: 'Thermometers' },
    { id: 'knives', label: 'Knives' },
    { id: 'scales', label: 'Scales' },
    { id: 'baking-tins', label: 'Baking & Stoneware' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? affiliateProducts
    : affiliateProducts.filter((p) => p.category === selectedCategory);

  const activeGuide = buyingGuides.find((g) => g.id === selectedGuideId);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Header */}
      <div className="bg-[#30483A] text-[#F5F0E7] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
            <ShoppingBag className="w-4 h-4" />
            <span>Curated Kitchen Tools</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            NAVI Kitchen Essentials
          </h1>
          <p className="text-sm sm:text-base text-[#E7D8C5] leading-relaxed">
            Honest, independent editorial recommendations for cookware, baking essentials, and kitchen tools. We only feature equipment that genuinely improves home cooking results.
          </p>

          {/* Marketplace Selector Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#E7D8C5] flex items-center gap-1.5 mr-2">
              <Globe className="w-4 h-4 text-[#B76B4A]" />
              <span>Select Amazon Store:</span>
            </span>
            {(['US', 'UK', 'CA', 'FR', 'DE', 'IT', 'ES', 'AU'] as const).map((mp) => (
              <button
                key={mp}
                onClick={() => setCurrentMarketplace(mp)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  currentMarketplace === mp
                    ? 'bg-[#B76B4A] text-white shadow-xs'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Amazon {mp}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prominent Affiliate Disclosure Notice */}
      <div className="bg-[#F5F0E7] border border-[#E7D8C5] rounded-2xl p-5 flex items-start gap-3.5 text-xs text-[#76543D]">
        <ShieldCheck className="w-5 h-5 text-[#30483A] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-[#302D28]">
            Affiliate Transparency & Editorial Standards
          </p>
          <p className="leading-relaxed">
            NAVI participates in the Amazon Services LLC Associates Program for Amazon USA, UK, Canada, France, Germany, Italy, Spain, and Australia. When you make a purchase through our authorized links, we may earn a small commission at no additional cost to you. We never fabricate reviews, accept payment for biased rankings, or recommend items we wouldn't use in our own kitchens.
          </p>
        </div>
      </div>

      {/* Editorial Buying Guides Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              In-Depth Research
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#302D28]">
              Editorial Buying Guides
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buyingGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuideId(selectedGuideId === guide.id ? null : guide.id)}
              className={`bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                selectedGuideId === guide.id ? 'border-[#30483A] ring-2 ring-[#30483A]/20' : 'border-[#E7D8C5]'
              }`}
            >
              <img src={guide.coverImage} alt={guide.title} className="w-full h-44 object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#76543D] tracking-wider block">
                    {guide.readTime}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#302D28] leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#76543D] line-clamp-2">
                    {guide.subtitle}
                  </p>
                </div>
                <button className="text-xs font-bold text-[#30483A] hover:text-[#B76B4A] transition-colors flex items-center gap-1">
                  <span>{selectedGuideId === guide.id ? 'Close Guide' : 'Read Full Buying Guide →'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Guide Drawer */}
        {activeGuide && (
          <div className="bg-white border-2 border-[#30483A] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="border-b border-[#E7D8C5] pb-4 flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
                  NAVI Editorial Guide
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28] mt-1">
                  {activeGuide.title}
                </h3>
                <p className="text-sm text-[#76543D] italic mt-1">{activeGuide.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedGuideId(null)}
                className="text-xs bg-[#F5F0E7] px-3 py-1.5 rounded-lg text-[#76543D] hover:text-[#302D28] font-bold cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="text-sm text-[#302D28] leading-relaxed space-y-3 font-normal">
              <p>{activeGuide.introduction}</p>
            </div>

            <div className="bg-[#F5F0E7] p-6 rounded-2xl border border-[#E7D8C5] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#30483A]">
                Key Factors To Look For Before Buying:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#302D28]">
                {activeGuide.whatToLookFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B76B4A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-green-50/60 border border-green-200 rounded-xl">
                <span className="font-bold text-green-900 block mb-1">Who Truly Needs This:</span>
                <p className="text-green-800 leading-relaxed">{activeGuide.whoNeedsIt}</p>
              </div>
              <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl">
                <span className="font-bold text-amber-900 block mb-1">Common Pitfall To Avoid:</span>
                <p className="text-amber-800 leading-relaxed">{activeGuide.commonMistakes}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-serif text-2xl font-bold text-[#302D28]">
            Recommended Equipment Showcase
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#30483A] text-white shadow-xs'
                    : 'bg-white border border-[#E7D8C5] text-[#76543D] hover:bg-[#F5F0E7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const mpLink = prod.marketplaces[currentMarketplace]?.url || prod.marketplaces.US?.url || '#';
            const fullAffiliateUrl = `${mpLink}?tag=${affiliateTags[currentMarketplace]}`;

            return (
              <div
                key={prod.id}
                className="bg-white border border-[#E7D8C5] rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  {/* Photo & Price Guide */}
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-[#F5F0E7]">
                    <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#30483A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {prod.categoryLabel}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#302D28] text-xs font-bold px-2 py-0.5 rounded-full shadow-2xs">
                      {prod.priceGuide}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#302D28] leading-snug">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#76543D] mt-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {/* Why We Recommend It */}
                  <div className="bg-[#F5F0E7] p-3.5 rounded-xl border border-[#E7D8C5] text-xs text-[#302D28] space-y-1">
                    <span className="font-bold text-[#30483A] block">NAVI Verdict:</span>
                    <p className="text-[#76543D] leading-relaxed">{prod.whyWeRecommendIt}</p>
                  </div>

                  {/* Pros & Considerations Accordion/List */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-emerald-800 flex items-center gap-1 text-[11px] uppercase tracking-wider mb-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Key Advantages
                      </span>
                      <ul className="space-y-1 text-gray-700 pl-4 list-disc text-[11px]">
                        {prod.pros.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-1">
                      <span className="font-bold text-amber-800 flex items-center gap-1 text-[11px] uppercase tracking-wider mb-1">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        Points to Consider
                      </span>
                      <ul className="space-y-1 text-gray-600 pl-4 list-disc text-[11px]">
                        {prod.considerations.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E7D8C5]">
                  <a
                    href={fullAffiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full py-2.5 bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Check Price on Amazon {currentMarketplace}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] text-center text-[#76543D]/70 block mt-1.5">
                    Authorized affiliate link for {currentMarketplace}
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
