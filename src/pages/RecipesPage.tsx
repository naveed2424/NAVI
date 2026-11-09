import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { categoryLabels } from '../data/recipes';
import { countriesData } from '../data/countries';
import { RecipeCategory } from '../types';
import { Search, Filter, RotateCcw, Clock, ChefHat, Sparkles } from 'lucide-react';

export const RecipesPage: React.FC = () => {
  const { 
    recipes, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory 
  } = useApp();

  const [filterCategory, setFilterCategory] = useState<string>(selectedCategory || 'all');
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [filterDietary, setFilterDietary] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterMaxTime, setFilterMaxTime] = useState<number>(0);

  // Sync if category arrived from context
  React.useEffect(() => {
    if (selectedCategory) {
      setFilterCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return recipes.filter((r) => {
      // Search text
      if (q) {
        const titleMatch = r.title.toLowerCase().includes(q);
        const summaryMatch = r.summary.toLowerCase().includes(q);
        const cuisineMatch = r.cuisine.toLowerCase().includes(q);
        const ingredientMatch = r.ingredients.some((ing) => ing.item.toLowerCase().includes(q));
        if (!titleMatch && !summaryMatch && !cuisineMatch && !ingredientMatch) {
          return false;
        }
      }

      // Category
      if (filterCategory !== 'all' && r.category !== filterCategory) {
        return false;
      }

      // Country
      if (filterCountry !== 'all' && r.countryCode !== filterCountry) {
        return false;
      }

      // Dietary
      if (filterDietary !== 'all' && !r.dietary.includes(filterDietary as any)) {
        return false;
      }

      // Difficulty
      if (filterDifficulty !== 'all' && r.difficulty !== filterDifficulty) {
        return false;
      }

      // Max Time
      if (filterMaxTime > 0 && r.prepTimeMinutes + r.cookTimeMinutes > filterMaxTime) {
        return false;
      }

      return true;
    });
  }, [recipes, searchQuery, filterCategory, filterCountry, filterDietary, filterDifficulty, filterMaxTime]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setFilterCategory('all');
    setFilterCountry('all');
    setFilterDietary('all');
    setFilterDifficulty('all');
    setFilterMaxTime(0);
    setSelectedCategory(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Title & Introduction */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
          NAVI Recipe Library
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#302D28]">
          Browse All Homemade Recipes
        </h1>
        <p className="text-sm sm:text-base text-[#76543D] max-w-3xl leading-relaxed">
          Filter through our 48 original recipes by ingredients, country of origin, dietary preferences, or preparation time. Every recipe includes clear instructions, metric/US measurements, and tips.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white border border-[#E7D8C5] rounded-3xl p-6 shadow-sm space-y-6">
        
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by recipe name, ingredient (e.g. cinnamon, mushrooms, scallops)..."
            className="w-full pl-11 pr-4 py-3 bg-[#F5F0E7] border border-[#E7D8C5] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#B76B4A] text-[#302D28] placeholder-gray-500"
          />
          <Search className="w-5 h-5 text-[#76543D] absolute left-4 top-3.5 pointer-events-none" />
        </div>

        {/* Dropdown Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          
          {/* Category Filter */}
          <div>
            <label className="block font-bold text-[#302D28] mb-1">Category</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-[#302D28] cursor-pointer"
            >
              <option value="all">All Categories</option>
              {Object.entries(categoryLabels).map(([catKey, label]) => (
                <option key={catKey} value={catKey}>{label}</option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div>
            <label className="block font-bold text-[#302D28] mb-1">Country / Cuisine</label>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-[#302D28] cursor-pointer"
            >
              <option value="all">All Countries (12)</option>
              {countriesData.map((c) => (
                <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>

          {/* Dietary Filter */}
          <div>
            <label className="block font-bold text-[#302D28] mb-1">Dietary Preference</label>
            <select
              value={filterDietary}
              onChange={(e) => setFilterDietary(e.target.value)}
              className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-[#302D28] cursor-pointer"
            >
              <option value="all">All Dietary</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="dairy-free">Dairy-Free</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block font-bold text-[#302D28] mb-1">Difficulty</label>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-[#302D28] cursor-pointer"
            >
              <option value="all">All Levels</option>
              <option value="Easy">Easy (Beginners)</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Special Occasion">Special Occasion</option>
            </select>
          </div>

          {/* Total Time Filter */}
          <div>
            <label className="block font-bold text-[#302D28] mb-1">Max Total Time</label>
            <select
              value={filterMaxTime}
              onChange={(e) => setFilterMaxTime(Number(e.target.value))}
              className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-[#302D28] cursor-pointer"
            >
              <option value={0}>Any Time</option>
              <option value={30}>Under 30 Minutes</option>
              <option value={60}>Under 60 Minutes</option>
              <option value={120}>Under 2 Hours</option>
            </select>
          </div>

        </div>

        {/* Results Counter & Reset Button */}
        <div className="flex items-center justify-between text-xs text-[#76543D] pt-2 border-t border-[#E7D8C5]/60">
          <span>
            Showing <strong>{filteredRecipes.length}</strong> of {recipes.length} recipes
          </span>

          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1 font-semibold text-[#B76B4A] hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>

      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#E7D8C5] rounded-3xl p-12 text-center space-y-4 max-w-xl mx-auto">
          <ChefHat className="w-12 h-12 text-[#76543D] mx-auto opacity-50" />
          <h3 className="font-serif text-xl font-bold text-[#302D28]">No Recipes Found</h3>
          <p className="text-xs sm:text-sm text-[#76543D]">
            We couldn’t find any recipes matching your current search terms and filters. Try clearing your search or selecting "All Categories".
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 bg-[#30483A] text-white rounded-xl text-xs font-bold hover:bg-[#30483A]/90 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
