import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { ChristmasCountdown } from '../components/ChristmasCountdown';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { Sparkles, Calendar, Utensils, Heart, Clock, ArrowRight } from 'lucide-react';

export const ChristmasPage: React.FC = () => {
  const { recipes, setRoute } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'mains' | 'desserts' | 'plant' | 'gluten-free' | 'traditions'>('all');

  // Filter recipes based on Christmas sub-themes
  const christmasRecipes = recipes.filter((r) => r.isChristmas || r.category.includes('christmas'));
  const christmasMains = recipes.filter((r) => r.category === 'christmas-main');
  const christmasDesserts = recipes.filter((r) => r.category === 'christmas-dessert');
  const plantBasedHoliday = recipes.filter((r) => r.category === 'vegetarian-vegan');
  const glutenFreeHoliday = recipes.filter((r) => r.category === 'gluten-free' && r.isHolidaySpecial);
  const internationalTraditions = recipes.filter((r) => r.category === 'international-traditions');

  const displayedRecipes = 
    activeTab === 'mains' ? christmasMains :
    activeTab === 'desserts' ? christmasDesserts :
    activeTab === 'plant' ? plantBasedHoliday :
    activeTab === 'gluten-free' ? glutenFreeHoliday :
    activeTab === 'traditions' ? internationalTraditions :
    christmasRecipes;

  return (
    <div className="space-y-16 pb-20">
      
      {/* Festive Hero Banner */}
      <div className="bg-[#30483A] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
            alt="Warm Christmas dining table background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B76B4A]/30 border border-[#B76B4A]/60 text-[#F5F0E7] text-xs font-semibold uppercase tracking-widest backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B76B4A]" />
            <span>NAVI Major Special Edition • Christmas 2026</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Christmas Around the Table
          </h1>

          <p className="font-editorial text-lg sm:text-xl text-[#E7D8C5] max-w-2xl mx-auto leading-relaxed italic">
            "The recipes we prepare when the house fills with family, when winter settles outside, and the warmth of the oven fills the kitchen."
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Interactive Preparation Countdown Calendar */}
        <section id="countdown-calendar">
          <ChristmasCountdown />
        </section>

        {/* AdSense Placement */}
        <AdSenseBanner slotId="christmas-landing-ad" format="horizontal" />

        {/* Recipe Collection Filter Tabs */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E7D8C5] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
                The Christmas Collection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28] mt-1">
                Festive Recipes & Menus
              </h2>
            </div>

            {/* Sub-theme Tabs */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-[#30483A] text-white' : 'bg-white border border-[#E7D8C5] text-[#76543D]'
                }`}
              >
                All Christmas ({christmasRecipes.length})
              </button>
              <button
                onClick={() => setActiveTab('mains')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'mains' ? 'bg-[#30483A] text-white' : 'bg-white border border-[#E7D8C5] text-[#76543D]'
                }`}
              >
                Main Courses
              </button>
              <button
                onClick={() => setActiveTab('desserts')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'desserts' ? 'bg-[#30483A] text-white' : 'bg-white border border-[#E7D8C5] text-[#76543D]'
                }`}
              >
                Desserts & Baking
              </button>
              <button
                onClick={() => setActiveTab('plant')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'plant' ? 'bg-[#30483A] text-white' : 'bg-white border border-[#E7D8C5] text-[#76543D]'
                }`}
              >
                Vegetarian & Vegan
              </button>
              <button
                onClick={() => setActiveTab('gluten-free')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'gluten-free' ? 'bg-[#30483A] text-white' : 'bg-white border border-[#E7D8C5] text-[#76543D]'
                }`}
              >
                Gluten-Free Holiday
              </button>
              <button
                onClick={() => setActiveTab('traditions')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'traditions' ? 'bg-[#30483A] text-white' : 'bg-white border border-[#E7D8C5] text-[#76543D]'
                }`}
              >
                Global Traditions
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
