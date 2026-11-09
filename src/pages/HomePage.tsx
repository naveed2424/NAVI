import React from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { countriesData } from '../data/countries';
import { AdSenseBanner } from '../components/AdSenseBanner';
import { 
  Sparkles, 
  ArrowRight, 
  Globe, 
  BookOpen, 
  ShoppingBag, 
  Calendar, 
  Heart,
  ChefHat
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    setRoute, 
    navigateToCountry, 
    navigateToCategory, 
    recipes 
  } = useApp();

  // Curated collections
  const christmasMains = recipes.filter((r) => r.category === 'christmas-main').slice(0, 6);
  const christmasDesserts = recipes.filter((r) => r.category === 'christmas-dessert').slice(0, 6);
  const comfortMeals = recipes.filter((r) => r.category === 'comfort-food').slice(0, 6);
  const glutenFreeMeals = recipes.filter((r) => r.category === 'gluten-free').slice(0, 6);
  const vegetarianMeals = recipes.filter((r) => r.category === 'vegetarian-vegan').slice(0, 6);
  const newYearMeals = recipes.filter((r) => r.category === 'new-year').slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[580px] sm:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#302D28] text-white">
        {/* Background Image with warm kitchen atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=80"
            alt="Warm home kitchen with natural wood and fresh ingredients"
            className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#302D28] via-[#302D28]/60 to-[#30483A]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-12 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B76B4A]/30 border border-[#B76B4A]/50 text-[#F5F0E7] text-xs font-semibold uppercase tracking-widest backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B76B4A]" />
            <span>Launch Edition: Christmas 2026 & New Year 2027</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Good Food Begins at Home.
          </h1>

          <p className="font-editorial text-lg sm:text-xl md:text-2xl text-[#E7D8C5] max-w-2xl mx-auto leading-relaxed italic">
            Discover homemade recipes, family favourites and food traditions from around the world. From comforting everyday meals to unforgettable Christmas celebrations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setRoute('recipes')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white font-bold rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              Explore 48 Recipes
            </button>

            <button
              onClick={() => setRoute('christmas')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#30483A] hover:bg-[#30483A]/90 border border-[#E7D8C5]/30 text-[#F5F0E7] font-bold rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Discover Christmas</span>
              <Sparkles className="w-4 h-4 text-[#B76B4A]" />
            </button>
          </div>
        </div>
      </section>

      {/* EDITOR'S NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#E7D8C5] rounded-3xl p-8 sm:p-12 shadow-sm relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-[#E7D8C5]">
            <div className="w-16 h-16 rounded-2xl bg-[#30483A] text-white flex items-center justify-center font-serif text-2xl font-bold shrink-0 shadow-md">
              NA
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
                Editor’s Welcome Note
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28] mt-0.5">
                The Table Where Everyone Belongs
              </h2>
              <p className="text-xs text-[#76543D]">
                By Naveed Afzal • Publisher & Culinary Director
              </p>
            </div>
          </div>

          <div className="pt-6 space-y-4 font-normal text-sm sm:text-base text-[#302D28]/90 leading-relaxed">
            <p>
              "Some recipes have a special place in our kitchens. They are the dishes we prepare when the house fills with family, when the weather becomes colder, or when we simply want something comforting and homemade."
            </p>
            <p>
              Food is more than a meal. It connects people, cultures, traditions and memories. In founding NAVI, my goal was to create an authentic international cooking publication: one that feels like entering a real, warm family kitchen with wooden countertops, fresh herbs, flour on the table, and the aroma of something delicious simmering on the stove.
            </p>
            <p>
              Whether you are preparing a traditional Christmas roast, mastering gluten-free baking, or pulling together an effortless weeknight pasta, welcome to our table. Let’s make something delicious together.
            </p>
          </div>
        </div>
      </section>

      {/* CHRISTMAS 2026 SPECIAL FEATURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Launch Feature</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#302D28] mt-1">
              Christmas Around the Table
            </h2>
            <p className="text-sm text-[#76543D] max-w-2xl mt-1">
              Celebrate the season with traditional festive showstoppers from around the world — from American cider glazed ham and French stuffed poularde to British beef wellington.
            </p>
          </div>

          <button
            onClick={() => setRoute('christmas')}
            className="text-xs font-bold text-[#30483A] hover:text-[#B76B4A] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>View Full Christmas Edition & Countdown</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Christmas Main Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {christmasMains.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* THE WORLD ON YOUR PLATE (12 COUNTRIES) */}
      <section className="bg-[#30483A] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
              Global Food Discoveries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              The World on Your Plate
            </h2>
            <p className="text-sm sm:text-base text-[#E7D8C5]">
              Explore authentic home-cooking traditions and signature flavors across 12 countries. Each country features dedicated regional dishes and food culture insights.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {countriesData.map((country) => (
              <button
                key={country.code}
                onClick={() => navigateToCountry(country.code)}
                className="group bg-white/10 hover:bg-white text-white hover:text-[#302D28] p-4 rounded-2xl border border-white/20 hover:border-transparent transition-all duration-300 text-left cursor-pointer flex flex-col justify-between h-36"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{country.flag}</span>
                  <span className="text-[10px] font-bold text-[#B76B4A] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold truncate">
                    {country.name}
                  </h3>
                  <p className="text-[10px] text-[#E7D8C5] group-hover:text-[#76543D] truncate mt-0.5">
                    {country.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setRoute('countries')}
              className="px-6 py-2.5 rounded-full bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Explore All 12 International Food Cultures
            </button>
          </div>
        </div>
      </section>

      {/* HOMEMADE DESSERTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              Sweet Baking Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#302D28] mt-1">
              Festive & Homemade Desserts
            </h2>
            <p className="text-sm text-[#76543D] max-w-2xl mt-1">
              From French Chocolate Bûche de Noël and Milanese Panettone to Australian Berry Pavlova and German Stollen.
            </p>
          </div>

          <button
            onClick={() => navigateToCategory('christmas-dessert')}
            className="text-xs font-bold text-[#30483A] hover:text-[#B76B4A] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>View All Desserts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {christmasDesserts.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* AD PLACEMENT 1 */}
      <AdSenseBanner slotId="homepage-middle" format="horizontal" />

      {/* EASY FAMILY MEALS / HOMEMADE COMFORT FOOD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              Weeknight Kitchen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#302D28] mt-1">
              Homemade Comfort Food
            </h2>
            <p className="text-sm text-[#76543D] max-w-2xl mt-1">
              Affordable, reliable everyday meals: rustic no-knead bread, French vegetable soup, classic tomato pasta, and French braised chicken casserole.
            </p>
          </div>

          <button
            onClick={() => navigateToCategory('comfort-food')}
            className="text-xs font-bold text-[#30483A] hover:text-[#B76B4A] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>View Comfort Foods</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {comfortMeals.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* GLUTEN-FREE KITCHEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              Inclusive Baking
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#302D28] mt-1">
              The Gluten-Free Kitchen
            </h2>
            <p className="text-sm text-[#76543D] max-w-2xl mt-1">
              Zero dryness or compromise: flourless Italian almond tortes, chewy gingerbread cookies, and luscious festive cheesecakes.
            </p>
          </div>

          <button
            onClick={() => navigateToCategory('gluten-free')}
            className="text-xs font-bold text-[#30483A] hover:text-[#B76B4A] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Explore Gluten-Free Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {glutenFreeMeals.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* VEGETARIAN TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
              Plant-Powered Dining
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#302D28] mt-1">
              The Vegetarian & Vegan Table
            </h2>
            <p className="text-sm text-[#76543D] max-w-2xl mt-1">
              Hearty centerpieces with deep umami richness: wild mushroom chestnut wellington, butternut squash white lasagna, and rustic galettes.
            </p>
          </div>

          <button
            onClick={() => navigateToCategory('vegetarian-vegan')}
            className="text-xs font-bold text-[#30483A] hover:text-[#B76B4A] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>View Plant-Based Recipes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {vegetarianMeals.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* NEW YEAR CELEBRATIONS PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B76B4A] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F5F0E7]/80">
              New Year 2027 Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Celebrate Around the Table
            </h2>
            <p className="text-sm text-[#F5F0E7]/90 leading-relaxed">
              Ring in the New Year with French savoury puff pastry bites, hot honey party sliders, Spanish tapas trio, authentic Italian tiramisù, and double-decker Champagne pavlova.
            </p>
          </div>

          <button
            onClick={() => setRoute('new-year')}
            className="px-8 py-3.5 bg-white text-[#B76B4A] hover:bg-[#F5F0E7] font-bold rounded-2xl text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer whitespace-nowrap"
          >
            Explore New Year Food →
          </button>
        </div>
      </section>

      {/* KITCHEN ESSENTIALS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E7D8C5] rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#30483A]">
              <ShoppingBag className="w-4 h-4 text-[#B76B4A]" />
              <span>Independent Buying Guides</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#302D28]">
              NAVI Kitchen Essentials
            </h2>
            <p className="text-sm text-[#76543D] leading-relaxed">
              Equip your kitchen with honest, durable tools. We independently review roasting pans, precision scales, knives, and stand mixers across 8 international Amazon stores.
            </p>
          </div>

          <button
            onClick={() => setRoute('essentials')}
            className="px-8 py-3.5 bg-[#30483A] text-white hover:bg-[#30483A]/90 font-bold rounded-2xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Browse Kitchen Essentials →
          </button>
        </div>
      </section>

    </div>
  );
};
