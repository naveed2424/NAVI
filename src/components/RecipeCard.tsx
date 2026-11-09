import React from 'react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { Clock, ChefHat, Bookmark, Sparkles } from 'lucide-react';
import { countriesData } from '../data/countries';

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
  const { navigateToRecipe, toggleBookmark, isBookmarked } = useApp();
  const bookmarked = isBookmarked(recipe.id);
  const country = countriesData.find((c) => c.code === recipe.countryCode);

  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <article 
      onClick={() => navigateToRecipe(recipe.slug)}
      className={`group relative bg-white border border-[#E7D8C5] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:items-center' : ''
      }`}
    >
      {/* Recipe Photo */}
      <div className={`relative overflow-hidden bg-[#E7D8C5] ${featured ? 'h-64 sm:h-80 md:h-full' : 'h-52 sm:h-60'}`}>
        <img
          src={recipe.featuredImage}
          alt={recipe.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark(recipe.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all cursor-pointer ${
            bookmarked 
              ? 'bg-[#B76B4A] text-white' 
              : 'bg-white/80 backdrop-blur-xs text-[#302D28] hover:bg-white hover:text-[#B76B4A]'
          }`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Save recipe'}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
        </button>

        {/* Holiday Special Badge */}
        {recipe.isHolidaySpecial && (
          <span className="absolute top-3 left-3 bg-[#30483A]/90 backdrop-blur-xs text-[#F5F0E7] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#B76B4A]" />
            Holiday Special
          </span>
        )}

        {/* Country Flag Pill */}
        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#302D28] text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
          <span>{country?.flag || '🌍'}</span>
          <span>{recipe.cuisine}</span>
        </span>
      </div>

      {/* Content Info */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Dietary tags */}
          <div className="flex flex-wrap gap-1.5">
            {recipe.dietary.map((d) => (
              <span
                key={d}
                className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-md bg-[#F5F0E7] text-[#76543D]"
              >
                {d.replace('-', ' ')}
              </span>
            ))}
            <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-md bg-[#30483A]/10 text-[#30483A]">
              {recipe.difficulty}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#302D28] group-hover:text-[#B76B4A] transition-colors leading-snug">
            {recipe.title}
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-[#76543D] line-clamp-2 leading-relaxed">
            {recipe.summary}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-4 mt-4 border-t border-[#E7D8C5]/60 flex items-center justify-between text-xs text-[#76543D]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#B76B4A]" />
            <span>{totalTime} mins</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ChefHat className="w-4 h-4 text-[#30483A]" />
            <span>{recipe.servings} Servings</span>
          </div>

          <span className="font-semibold text-[#30483A] group-hover:text-[#B76B4A] transition-colors text-xs">
            View Recipe →
          </span>
        </div>
      </div>
    </article>
  );
};
