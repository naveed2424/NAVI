import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { categoryLabels } from '../data/recipes';
import { countriesData } from '../data/countries';
import { affiliateProducts } from '../data/affiliateProducts';
import { AdSenseBanner } from './AdSenseBanner';
import { PrintRecipeModal } from './PrintRecipeModal';
import { PinterestPinModal } from './PinterestPinModal';
import { 
  Clock, 
  ChefHat, 
  Bookmark, 
  Printer, 
  Share2, 
  Plus, 
  Minus, 
  Check, 
  CheckSquare, 
  Square, 
  HelpCircle, 
  AlertCircle, 
  ShieldCheck, 
  ChevronRight,
  Flame,
  Utensils,
  ExternalLink,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const { 
    setRoute, 
    navigateToRecipe, 
    navigateToCategory, 
    navigateToCountry,
    unitSystem, 
    toggleUnitSystem, 
    toggleBookmark, 
    isBookmarked,
    currentMarketplace,
    affiliateTags,
    recipes
  } = useApp();

  const [currentServings, setCurrentServings] = useState<number>(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Sync servings when recipe changes
  useEffect(() => {
    setCurrentServings(recipe.servings);
    setCheckedIngredients({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [recipe]);

  const bookmarked = isBookmarked(recipe.id);
  const country = countriesData.find((c) => c.code === recipe.countryCode);
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  // Serving scaling factor
  const servingRatio = currentServings / recipe.servings;

  const handleAdjustServings = (delta: number) => {
    const updated = Math.max(1, Math.min(24, currentServings + delta));
    setCurrentServings(updated);
  };

  const toggleIngredientCheck = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Helper to scale numeric amounts if formatted like "200 g" or "1 cup"
  const getScaledAmount = (amountStr: string): string => {
    if (servingRatio === 1) return amountStr;
    const match = amountStr.match(/^([\d./]+)\s*(.*)$/);
    if (!match) return amountStr;

    const numStr = match[1];
    const unitStr = match[2];

    let num = 0;
    if (numStr.includes('/')) {
      const parts = numStr.split('/');
      num = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      num = parseFloat(numStr);
    }

    if (isNaN(num)) return amountStr;
    const scaled = (num * servingRatio).toFixed(1).replace(/\.0$/, '');
    return `${scaled} ${unitStr}`;
  };

  // Dynamic JSON-LD Structured Data for Google Rich Results
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://navi-magazine.com/#website',
        'url': 'https://navi-magazine.com/',
        'name': 'NAVI Food Magazine',
        'description': 'Recipes Made With Love. Memories Shared Around the Table.',
        'publisher': {
          '@type': 'Organization',
          'name': 'NAVI',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://navi-magazine.com/logo.png'
          }
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://navi-magazine.com/recipes/${recipe.slug}/#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://navi-magazine.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': categoryLabels[recipe.category],
            'item': `https://navi-magazine.com/category/${recipe.category}`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': recipe.title
          }
        ]
      },
      {
        '@type': 'Recipe',
        '@id': `https://navi-magazine.com/recipes/${recipe.slug}/#recipe`,
        'name': recipe.title,
        'image': [recipe.featuredImage],
        'description': recipe.summary,
        'keywords': `${recipe.cuisine}, ${recipe.category}, homemade, authentic recipes, ${recipe.dietary.join(', ')}`,
        'author': {
          '@type': 'Person',
          'name': recipe.author
        },
        'datePublished': recipe.publishedDate,
        'dateModified': recipe.updatedDate,
        'prepTime': `PT${recipe.prepTimeMinutes}M`,
        'cookTime': `PT${recipe.cookTimeMinutes}M`,
        'totalTime': `PT${totalTime}M`,
        'recipeYield': `${currentServings} servings`,
        'recipeCategory': categoryLabels[recipe.category],
        'recipeCuisine': recipe.cuisine,
        'recipeIngredient': recipe.ingredients.map(
          (ing) => `${unitSystem === 'metric' ? ing.amountMetric : ing.amountUS} ${ing.item}`
        ),
        'recipeInstructions': recipe.instructions.map((step) => ({
          '@type': 'HowToStep',
          'name': step.title,
          'text': step.instruction,
          'position': step.step
        }))
      }
    ]
  };

  // Related recipes lookup
  const relatedRecipes = recipes
    .filter((r) => r.id !== recipe.id && (r.category === recipe.category || r.countryCode === recipe.countryCode))
    .slice(0, 3);

  // Recommended products lookup
  const recommendedTools = affiliateProducts.slice(0, 2);

  return (
    <article className="min-h-screen bg-[#F5F0E7] text-[#302D28] pb-24">
      {/* Inject Schema.org JSON-LD Script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <nav className="flex items-center space-x-2 text-xs text-[#76543D]" aria-label="Breadcrumb">
          <button 
            onClick={() => setRoute('home')} 
            className="hover:text-[#30483A] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#E7D8C5]" />
          <button 
            onClick={() => setRoute('recipes')} 
            className="hover:text-[#30483A] transition-colors cursor-pointer"
          >
            Recipes
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#E7D8C5]" />
          <button 
            onClick={() => navigateToCategory(recipe.category)} 
            className="hover:text-[#30483A] transition-colors cursor-pointer"
          >
            {categoryLabels[recipe.category]}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#E7D8C5]" />
          <span className="text-[#30483A] font-semibold truncate max-w-[200px] sm:max-w-xs">
            {recipe.title}
          </span>
        </nav>
      </div>

      {/* Main Article Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Title Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span 
              onClick={() => navigateToCountry(recipe.countryCode)}
              className="px-3 py-1 bg-white border border-[#E7D8C5] rounded-full text-xs font-semibold text-[#302D28] flex items-center gap-1.5 cursor-pointer hover:border-[#B76B4A]"
            >
              <span>{country?.flag || '🌍'}</span>
              <span>{recipe.cuisine} Cuisine</span>
            </span>

            {recipe.isHolidaySpecial && (
              <span className="px-3 py-1 bg-[#30483A] text-white rounded-full text-xs font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B76B4A]" />
                Holiday Special Edition
              </span>
            )}

            {recipe.dietary.map((d) => (
              <span key={d} className="px-3 py-1 bg-[#E7D8C5] text-[#76543D] rounded-full text-xs font-semibold uppercase tracking-wider">
                {d.replace('-', ' ')}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#302D28] leading-tight">
            {recipe.title}
          </h1>

          <p className="font-editorial text-lg sm:text-xl text-[#76543D] leading-relaxed italic">
            {recipe.summary}
          </p>

          {/* Author Editorial Credibility Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E7D8C5] text-xs text-[#76543D]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#30483A] text-white flex items-center justify-center font-serif text-lg font-bold">
                NA
              </div>
              <div>
                <p className="font-bold text-[#302D28]">Written by {recipe.author}</p>
                <div className="flex items-center gap-2 text-[11px] text-[#76543D]/80">
                  <span>Published: {new Date(recipe.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>Updated: {new Date(recipe.updatedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(recipe.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                  bookmarked 
                    ? 'bg-[#B76B4A] text-white border-[#B76B4A]' 
                    : 'bg-white text-[#302D28] border-[#E7D8C5] hover:border-[#B76B4A]'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                <span>{bookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={() => setShowPrintModal(true)}
                className="px-3.5 py-2 bg-white border border-[#E7D8C5] hover:border-[#30483A] text-[#302D28] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#30483A]" />
                <span>Print Card</span>
              </button>

              <button
                onClick={() => setShowPinModal(true)}
                className="px-3.5 py-2 bg-[#B76B4A]/10 border border-[#B76B4A]/30 hover:bg-[#B76B4A] hover:text-white text-[#B76B4A] rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Pinterest</span> Pin
              </button>
            </div>
          </div>
        </div>

        {/* Hero Photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video max-h-[500px] w-full bg-[#E7D8C5]">
          <img
            src={recipe.featuredImage}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Recipe Overview Metrics Bar */}
        <div className="bg-white border border-[#E7D8C5] rounded-2xl p-6 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#76543D] tracking-wider block">
              Prep Time
            </span>
            <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-[#302D28]">
              <Clock className="w-4 h-4 text-[#B76B4A]" />
              <span>{recipe.prepTimeMinutes} mins</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#76543D] tracking-wider block">
              Cook Time
            </span>
            <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-[#302D28]">
              <Flame className="w-4 h-4 text-[#B76B4A]" />
              <span>{recipe.cookTimeMinutes} mins</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#76543D] tracking-wider block">
              Difficulty
            </span>
            <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-[#302D28]">
              <ChefHat className="w-4 h-4 text-[#30483A]" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          {/* Interactive Servings Scaler */}
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#76543D] tracking-wider block">
              Servings (Scale)
            </span>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handleAdjustServings(-1)}
                className="w-7 h-7 rounded-full bg-[#F5F0E7] text-[#76543D] hover:bg-[#30483A] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                title="Decrease servings"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-base sm:text-lg font-bold text-[#302D28] min-w-[2rem]">
                {currentServings}
              </span>
              <button
                onClick={() => handleAdjustServings(1)}
                className="w-7 h-7 rounded-full bg-[#F5F0E7] text-[#76543D] hover:bg-[#30483A] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                title="Increase servings"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* The Story Behind the Recipe */}
        <section className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B76B4A]">
            <Utensils className="w-4 h-4" />
            <span>Culinary Heritage & Story</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28]">
            The Story Behind the Recipe
          </h2>
          <div className="text-sm sm:text-base text-[#302D28]/90 leading-relaxed space-y-3 font-normal">
            <p>{recipe.story}</p>
          </div>
        </section>

        {/* Why Readers Will Love It */}
        <section className="bg-[#30483A]/5 border border-[#30483A]/20 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30483A]">
            Why You’ll Love Making This
          </h2>
          <ul className="space-y-2.5">
            {recipe.whyYouWillLoveIt.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#302D28]">
                <span className="w-5 h-5 rounded-full bg-[#30483A] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Ingredients & Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ingredients Column (2 Cols on Desktop) */}
          <section className="lg:col-span-2 bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E7D8C5] pb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#302D28]">
                  Ingredients
                </h2>
                <p className="text-xs text-[#76543D]">
                  Scaled for {currentServings} servings • Tap items to check off while cooking
                </p>
              </div>

              {/* Metric vs US Customary Toggle */}
              <div className="flex items-center bg-[#F5F0E7] p-1 rounded-xl border border-[#E7D8C5]">
                <button
                  onClick={() => toggleUnitSystem()}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    unitSystem === 'metric'
                      ? 'bg-[#30483A] text-white shadow-xs'
                      : 'text-[#76543D] hover:text-[#302D28]'
                  }`}
                >
                  Metric (g/ml)
                </button>
                <button
                  onClick={() => toggleUnitSystem()}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    unitSystem === 'us'
                      ? 'bg-[#30483A] text-white shadow-xs'
                      : 'text-[#76543D] hover:text-[#302D28]'
                  }`}
                >
                  US (cups/lbs)
                </button>
              </div>
            </div>

            {/* Checkable List */}
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                const amount = unitSystem === 'metric' ? ing.amountMetric : ing.amountUS;
                const scaledAmount = getScaledAmount(amount);

                return (
                  <li
                    key={idx}
                    onClick={() => toggleIngredientCheck(idx)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer border ${
                      isChecked
                        ? 'bg-[#F5F0E7]/60 border-transparent text-gray-400 line-through'
                        : 'bg-white border-[#E7D8C5]/60 hover:border-[#B76B4A] text-[#302D28]'
                    }`}
                  >
                    <div className="mt-0.5 text-[#B76B4A]">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 text-sm leading-snug">
                      <span className="font-bold">{scaledAmount}</span> {ing.item}
                      {ing.notes && (
                        <span className="text-xs text-[#76543D] italic block mt-0.5">
                          Note: {ing.notes}
                        </span>
                      )}
                      {ing.substitutions && (
                        <span className="text-[11px] text-[#B76B4A] block mt-0.5">
                          Substitution: {ing.substitutions}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Equipment Column */}
          <section className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 h-fit">
            <h2 className="font-serif text-xl font-bold text-[#302D28] border-b border-[#E7D8C5] pb-3">
              Kitchen Equipment
            </h2>
            <p className="text-xs text-[#76543D]">
              Practical tools required for this recipe. We prioritize tools already in standard home kitchens.
            </p>
            <ul className="space-y-2.5">
              {recipe.equipment.map((eq, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#302D28]">
                  <span className="w-2 h-2 rounded-full bg-[#76543D] mt-1.5 shrink-0" />
                  <span>{eq}</span>
                </li>
              ))}
            </ul>

            {/* Quick Kitchen Tip callout */}
            <div className="bg-[#F5F0E7] p-4 rounded-2xl border border-[#E7D8C5] space-y-1 text-xs">
              <span className="font-bold text-[#30483A] block">Chef’s Rule:</span>
              <p className="text-[#76543D]">
                Measure ingredients with a digital kitchen scale when baking for consistent bakery perfection.
              </p>
            </div>
          </section>
        </div>

        {/* Step-by-Step Instructions */}
        <section className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="border-b border-[#E7D8C5] pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302D28]">
              Step-by-Step Preparation
            </h2>
            <p className="text-xs sm:text-sm text-[#76543D] mt-1">
              Follow these numbered instructions carefully. Pay special attention to sensory cues indicating when each stage is complete.
            </p>
          </div>

          <div className="space-y-8">
            {recipe.instructions.map((step) => (
              <div key={step.step} className="flex items-start gap-4 sm:gap-6 group">
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#30483A] text-white font-serif text-base sm:text-lg font-bold flex items-center justify-center shrink-0 shadow-xs">
                  {step.step}
                </span>

                <div className="flex-1 space-y-2 pt-0.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#302D28]">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#302D28]/90 leading-relaxed font-normal">
                    {step.instruction}
                  </p>

                  {step.sensoryCue && (
                    <div className="bg-[#F5F0E7] border-l-4 border-[#B76B4A] p-3 rounded-r-xl text-xs sm:text-sm text-[#76543D]">
                      <strong>Sensory Cue:</strong> {step.sensoryCue}
                    </div>
                  )}

                  {step.tip && (
                    <p className="text-xs text-[#30483A] italic">
                      💡 Tip: {step.tip}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-Article AdSense Placement */}
        <AdSenseBanner slotId="recipe-mid-article" format="horizontal" />

        {/* Pro Tips & Common Mistakes */}
        <section className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#302D28] flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-[#B76B4A]" />
            <span>Professional Cooking Tips</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipe.proTips.map((tip, idx) => (
              <div key={idx} className="bg-[#F5F0E7] p-4 rounded-2xl border border-[#E7D8C5] text-xs sm:text-sm text-[#302D28] leading-relaxed">
                <p>• {tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dietary Adaptations & Variations */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E7D8C5] rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#302D28]">
              Dietary Adaptations
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-[#76543D]">
              {recipe.dietaryAdaptations.glutenFree && (
                <p><strong>Gluten-Free:</strong> {recipe.dietaryAdaptations.glutenFree}</p>
              )}
              {recipe.dietaryAdaptations.vegetarian && (
                <p><strong>Vegetarian:</strong> {recipe.dietaryAdaptations.vegetarian}</p>
              )}
              {recipe.dietaryAdaptations.vegan && (
                <p><strong>Vegan:</strong> {recipe.dietaryAdaptations.vegan}</p>
              )}
              {recipe.dietaryAdaptations.dairyFree && (
                <p><strong>Dairy-Free:</strong> {recipe.dietaryAdaptations.dairyFree}</p>
              )}
            </div>
          </div>

          <div className="bg-white border border-[#E7D8C5] rounded-3xl p-6 shadow-sm space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#302D28]">
              Flavor Variations
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#76543D]">
              {recipe.variations.map((v, idx) => (
                <li key={idx}>• {v}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Storage and Reheating */}
        <section className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#302D28]">
            Storage & Reheating Guidelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
              <span className="font-bold text-[#30483A] block mb-1">Refrigeration</span>
              <p className="text-[#76543D]">{recipe.storageAndReheating.refrigeration}</p>
            </div>
            <div className="p-3 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
              <span className="font-bold text-[#30483A] block mb-1">Freezing</span>
              <p className="text-[#76543D]">{recipe.storageAndReheating.freezing}</p>
            </div>
            <div className="p-3 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
              <span className="font-bold text-[#30483A] block mb-1">Shelf Life</span>
              <p className="text-[#76543D]">{recipe.storageAndReheating.shelfLife}</p>
            </div>
            <div className="p-3 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
              <span className="font-bold text-[#30483A] block mb-1">Safe Reheating</span>
              <p className="text-[#76543D]">{recipe.storageAndReheating.reheating}</p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        {recipe.faqs.length > 0 && (
          <section className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#302D28] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#30483A]" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4">
              {recipe.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-[#E7D8C5] pb-3 last:border-0 last:pb-0">
                  <p className="font-bold text-sm text-[#302D28]">{faq.question}</p>
                  <p className="text-xs sm:text-sm text-[#76543D] mt-1 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recommended Kitchen Equipment (Amazon Affiliate with Transparent Disclosure) */}
        <section className="bg-gradient-to-br from-white to-[#F5F0E7] border border-[#E7D8C5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7D8C5] pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B76B4A]">
                NAVI Kitchen Essentials
              </span>
              <h2 className="font-serif text-xl font-bold text-[#302D28]">
                Recommended Tools For This Recipe
              </h2>
            </div>
            <span className="text-[11px] text-[#76543D] italic">
              Marketplace: {currentMarketplace} (Tag: {affiliateTags[currentMarketplace]})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendedTools.map((tool) => {
              const mpLink = tool.marketplaces[currentMarketplace]?.url || tool.marketplaces.US?.url || '#';
              const fullAffiliateUrl = `${mpLink}?tag=${affiliateTags[currentMarketplace]}`;

              return (
                <div key={tool.id} className="bg-white p-4 rounded-2xl border border-[#E7D8C5] flex gap-3 shadow-2xs">
                  <img src={tool.image} alt={tool.title} className="w-20 h-20 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xs text-[#302D28] line-clamp-1">{tool.title}</h3>
                      <p className="text-[11px] text-[#76543D] line-clamp-2 mt-0.5">{tool.description}</p>
                    </div>
                    <a
                      href={fullAffiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-xs font-semibold text-[#B76B4A] hover:underline flex items-center gap-1 mt-2"
                    >
                      <span>View on Amazon</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[10px] text-[#76543D]/70 pt-2 border-t border-[#E7D8C5]/60">
            <strong>Affiliate Disclosure:</strong> NAVI is an independent publication. As an Amazon Associate, NAVI earns from qualifying purchases. We only recommend equipment we believe offers genuine utility to home cooks.
          </p>
        </section>

        {/* Related NAVI Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl font-bold text-[#302D28]">
              Related NAVI Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedRecipes.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigateToRecipe(rel.slug)}
                  className="bg-white border border-[#E7D8C5] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <img src={rel.featuredImage} alt={rel.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#B76B4A]">{rel.cuisine}</span>
                    <h3 className="font-serif text-sm font-bold text-[#302D28] group-hover:text-[#B76B4A] transition-colors line-clamp-1">
                      {rel.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Modals */}
      {showPrintModal && (
        <PrintRecipeModal 
          recipe={recipe} 
          servings={currentServings} 
          onClose={() => setShowPrintModal(false)} 
        />
      )}

      {showPinModal && (
        <PinterestPinModal 
          recipe={recipe} 
          onClose={() => setShowPinModal(false)} 
        />
      )}
    </article>
  );
};
