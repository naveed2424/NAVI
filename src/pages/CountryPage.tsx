import React from 'react';
import { useApp } from '../context/AppContext';
import { countriesData, getCountryByCode } from '../data/countries';
import { RecipeCard } from '../components/RecipeCard';
import { Globe, ArrowLeft, Utensils, Sparkles } from 'lucide-react';

export const CountriesIndexPage: React.FC = () => {
  const { navigateToCountry } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
          International Food Discovery
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#302D28]">
          Around the World on Your Plate
        </h1>
        <p className="text-sm sm:text-base text-[#76543D] leading-relaxed">
          Explore authentic home-cooking heritage and holiday culinary traditions across 12 countries. Learn about signature pantry flavors, time-honored family recipes, and the cultural memories that unite tables across the globe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countriesData.map((country) => (
          <div
            key={country.code}
            onClick={() => navigateToCountry(country.code)}
            className="group bg-white border border-[#E7D8C5] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-[#E7D8C5]">
              <img
                src={country.heroImage}
                alt={country.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#302D28] text-sm font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                <span className="text-xl">{country.flag}</span>
                <span>{country.name}</span>
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#B76B4A] uppercase tracking-wider block">
                  {country.tagline}
                </span>
                <p className="text-xs sm:text-sm text-[#76543D] line-clamp-3 leading-relaxed">
                  {country.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7D8C5] flex items-center justify-between text-xs font-semibold text-[#30483A] group-hover:text-[#B76B4A]">
                <span>Explore {country.name} Recipes</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CountryDetailPage: React.FC = () => {
  const { selectedCountryCode, setRoute, recipes } = useApp();
  const country = getCountryByCode(selectedCountryCode || 'FR') || countriesData[0];

  // Find recipes matching this country code
  const countryRecipes = recipes.filter(
    (r) => r.countryCode.toUpperCase() === country.code.toUpperCase()
  );

  return (
    <div className="space-y-12 pb-20">
      
      {/* Country Hero Header */}
      <div className="bg-[#30483A] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={country.heroImage}
            alt={country.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={() => setRoute('countries')}
            className="inline-flex items-center gap-1.5 text-xs text-[#E7D8C5] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Countries</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl">{country.flag}</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
                {country.tagline}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-0.5">
                {country.name} Cuisine & Traditions
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Cultural Overview & Traditions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#302D28]">
              Culinary Philosophy & Heritage
            </h2>
            <p className="text-sm sm:text-base text-[#302D28]/90 leading-relaxed font-normal">
              {country.description}
            </p>

            <div className="pt-4 border-t border-[#E7D8C5] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A] block">
                Holiday Celebration Customs
              </span>
              <p className="text-sm text-[#76543D] leading-relaxed">
                {country.holidayTraditions}
              </p>
            </div>
          </div>

          <div className="bg-[#F5F0E7] border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 h-fit">
            <h3 className="font-serif text-lg font-bold text-[#30483A]">
              Signature Flavors & Pantry
            </h3>
            <p className="text-xs text-[#76543D]">
              Essential aromatics, herbs, and ingredients central to {country.name} home cooking:
            </p>
            <ul className="space-y-2">
              {country.signatureFlavors.map((flv, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#302D28]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B76B4A] mt-2 shrink-0" />
                  <span>{flv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recipes of this country */}
        <div className="space-y-6">
          <div className="border-b border-[#E7D8C5] pb-4 flex justify-between items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
                The NAVI Collection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28] mt-1">
                Authentic {country.name} Recipes
              </h2>
            </div>
            <span className="text-xs text-[#76543D]">
              {countryRecipes.length} recipes in this collection
            </span>
          </div>

          {countryRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {countryRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#E7D8C5] rounded-3xl p-8 text-center text-sm text-[#76543D]">
              More recipes for {country.name} are currently in development by Naveed Afzal. Check back soon!
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
