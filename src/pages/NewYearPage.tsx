import React from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { Sparkles, Wine, GlassWater, Clock, PartyPopper } from 'lucide-react';

export const NewYearPage: React.FC = () => {
  const { recipes } = useApp();

  const newYearRecipes = recipes.filter((r) => r.isNewYear || r.category === 'new-year');
  const cocktailFood = recipes.filter((r) => ['ny-1', 'ny-2', 'ny-3'].includes(r.id));
  const midnightDesserts = recipes.filter((r) => ['ny-4', 'ny-5', 'ny-6'].includes(r.id));

  return (
    <div className="space-y-16 pb-20">
      
      {/* Glamorous Midnight Header */}
      <div className="bg-[#302D28] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1600&q=80"
            alt="New Year party food celebration background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B76B4A]/30 border border-[#B76B4A]/60 text-[#F5F0E7] text-xs font-semibold uppercase tracking-widest backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B76B4A]" />
            <span>Celebrate 2027 In Style</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            New Year Celebrations Around the Table
          </h1>

          <p className="font-editorial text-lg sm:text-xl text-[#E7D8C5] max-w-2xl mx-auto leading-relaxed italic">
            Effortless hot canapés, celebration tapas, pull-apart sliders, and showstopping midnight desserts designed for joyful sharing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Guide to New Year Entertaining */}
        <div className="bg-white border border-[#E7D8C5] rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28]">
            The Stress-Free Party Playbook
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#302D28]">
            <div className="p-4 bg-[#F5F0E7] rounded-2xl border border-[#E7D8C5] space-y-2">
              <span className="font-bold text-[#30483A] text-base block">1. Make-Ahead Canapés</span>
              <p className="text-xs text-[#76543D] leading-relaxed">
                Shape our French feuilleté pinwheels and freeze unbaked. Slide onto trays straight from the freezer for hot, flaky pastry right as guests arrive.
              </p>
            </div>

            <div className="p-4 bg-[#F5F0E7] rounded-2xl border border-[#E7D8C5] space-y-2">
              <span className="font-bold text-[#30483A] text-base block">2. Self-Serve Sliders</span>
              <p className="text-xs text-[#76543D] leading-relaxed">
                Bake a whole slab of sweet Hawaiian pulled beef sliders in a 9x13 dish; let guests pull them apart hot from the oven.
              </p>
            </div>

            <div className="p-4 bg-[#F5F0E7] rounded-2xl border border-[#E7D8C5] space-y-2">
              <span className="font-bold text-[#30483A] text-base block">3. Midnight Showstoppers</span>
              <p className="text-xs text-[#76543D] leading-relaxed">
                Classic Tiramisù tastes exponentially richer when made 24 hours ahead, freeing up your evening for conversation and champagne.
              </p>
            </div>
          </div>
        </div>

        {/* Canapés & Finger Food */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              Cocktail Hour
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28] mt-1">
              Party Bites & Finger Food
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {cocktailFood.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* AdSense Placement */}
        <AdSenseBanner slotId="newyear-landing-ad" format="horizontal" />

        {/* Midnight Desserts */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              Midnight Finale
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28] mt-1">
              Celebration Desserts & Cakes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {midnightDesserts.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
