import { Recipe, RecipeCategory } from '../types';
import { christmasMains } from './recipes/christmasMains';
import { christmasDesserts } from './recipes/christmasDesserts';
import { glutenFreeRecipes } from './recipes/glutenFree';
import { vegetarianVeganRecipes } from './recipes/vegetarianVegan';
import { newYearRecipes } from './recipes/newYear';
import { internationalTraditionsRecipes } from './recipes/internationalTraditions';
import { comfortFoodRecipes } from './recipes/comfortFood';
import { dessertsBakingRecipes } from './recipes/dessertsBaking';

export const initialRecipes: Recipe[] = [
  ...christmasMains,
  ...christmasDesserts,
  ...glutenFreeRecipes,
  ...vegetarianVeganRecipes,
  ...newYearRecipes,
  ...internationalTraditionsRecipes,
  ...comfortFoodRecipes,
  ...dessertsBakingRecipes,
];

export const categoryLabels: Record<RecipeCategory, string> = {
  'christmas-main': 'Christmas Main Courses',
  'christmas-dessert': 'Christmas Desserts',
  'gluten-free': 'Gluten-Free Homemade',
  'vegetarian-vegan': 'Vegetarian & Vegan',
  'new-year': 'New Year Celebrations',
  'international-traditions': 'International Food Traditions',
  'comfort-food': 'Homemade Comfort Food',
  'desserts-baking': 'Easy Desserts & Baking',
};

export function getRecipeBySlug(slug: string, recipes: Recipe[] = initialRecipes): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRecipeById(id: string, recipes: Recipe[] = initialRecipes): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getRecipesByCategory(category: RecipeCategory, recipes: Recipe[] = initialRecipes): Recipe[] {
  return recipes.filter((r) => r.category === category);
}

export function getRecipesByCountry(countryCode: string, recipes: Recipe[] = initialRecipes): Recipe[] {
  return recipes.filter((r) => r.countryCode.toUpperCase() === countryCode.toUpperCase());
}

export function searchRecipes(
  query: string,
  filters?: {
    category?: RecipeCategory | 'all';
    country?: string | 'all';
    dietary?: string | 'all';
    difficulty?: string | 'all';
    maxPrepTime?: number;
  },
  recipes: Recipe[] = initialRecipes
): Recipe[] {
  const q = query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    // Text search in title, summary, cuisine, ingredients
    if (q) {
      const titleMatch = recipe.title.toLowerCase().includes(q);
      const summaryMatch = recipe.summary.toLowerCase().includes(q);
      const cuisineMatch = recipe.cuisine.toLowerCase().includes(q);
      const ingredientMatch = recipe.ingredients.some((ing) => ing.item.toLowerCase().includes(q));
      if (!titleMatch && !summaryMatch && !cuisineMatch && !ingredientMatch) {
        return false;
      }
    }

    // Category filter
    if (filters?.category && filters.category !== 'all') {
      if (recipe.category !== filters.category) return false;
    }

    // Country filter
    if (filters?.country && filters.country !== 'all') {
      if (recipe.countryCode !== filters.country) return false;
    }

    // Dietary filter
    if (filters?.dietary && filters.dietary !== 'all') {
      if (!recipe.dietary.includes(filters.dietary as any)) return false;
    }

    // Difficulty filter
    if (filters?.difficulty && filters.difficulty !== 'all') {
      if (recipe.difficulty !== filters.difficulty) return false;
    }

    // Prep time filter
    if (filters?.maxPrepTime && filters.maxPrepTime > 0) {
      if (recipe.prepTimeMinutes + recipe.cookTimeMinutes > filters.maxPrepTime) return false;
    }

    return true;
  });
}
