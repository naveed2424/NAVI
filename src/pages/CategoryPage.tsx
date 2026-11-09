import React from 'react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { categoryLabels } from '../data/recipes';
import { ArrowLeft, ChefHat, Sparkles } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { selectedCategory, setRoute, recipes } = useApp();
  const currentCategory = selectedCategory || 'christmas-main';
  const categoryTitle = categoryLabels[currentCategory];

  const categoryRecipes = recipes.filter((r) => r.category === currentCategory);

  const categoryDescriptions: Record<string, string> = {
    'christmas-main': 'Showstopping holiday centerpieces crafted for joyous family gatherings, from American cider glazed ham to Canadian roast turkey and British beef wellington.',
    'christmas-dessert': 'Artisanal seasonal desserts and festive baking, featuring Milanese Panettone, French Bûche de Noël, German Stollen, and Australian pavlova.',
    'gluten-free': 'Decadent homemade recipes created without wheat, providing zero dryness or compromise for sensitive dietary needs.',
    'vegetarian-vegan': 'Vibrant, hearty plant-powered dining loaded with savory umami, rich winter squashes, roasted chestnuts, and caramelized root vegetables.',
    'new-year': 'Cocktail hour puff pastries, hot honey party sliders, Spanish tapas, and celebration cakes made to ring in the New Year with loved ones.',
    'international-traditions': 'Time-honored recipes that celebrate the culinary customs and holiday rituals of families across the globe.',
    'comfort-food': 'Wholesome, budget-friendly everyday favorites: no-knead artisan bread, rich tomato pasta, French vegetable soup, and apple crumble.',
    'desserts-baking': 'Reliable, comforting bakery favorites: double-crust apple pie, chocolate fudge cake, cinnamon rolls, crêpes, and chewy chocolate chip cookies.'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-20">
      
      {/* Header */}
      <div className="space-y-4 border-b border-[#E7D8C5] pb-6">
        <button
          onClick={() => setRoute('recipes')}
          className="inline-flex items-center gap-1.5 text-xs text-[#76543D] hover:text-[#30483A] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Recipes</span>
        </button>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
            Editorial Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#302D28]">
            {categoryTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#76543D] max-w-3xl leading-relaxed">
            {categoryDescriptions[currentCategory] || 'Explore authentic recipes crafted with care by Naveed Afzal.'}
          </p>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categoryRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

    </div>
  );
};
