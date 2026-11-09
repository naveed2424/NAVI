export type DietaryPreference = 'gluten-free' | 'vegetarian' | 'vegan' | 'dairy-free' | 'nut-free';

export type RecipeCategory = 
  | 'christmas-main'
  | 'christmas-dessert'
  | 'gluten-free'
  | 'vegetarian-vegan'
  | 'new-year'
  | 'international-traditions'
  | 'comfort-food'
  | 'desserts-baking';

export type DifficultyLevel = 'Easy' | 'Intermediate' | 'Special Occasion';

export interface Ingredient {
  item: string;
  amountMetric: string;
  amountUS: string;
  notes?: string;
  substitutions?: string;
}

export interface InstructionStep {
  step: number;
  title: string;
  instruction: string;
  sensoryCue?: string; // what it should look/smell like
  tip?: string;
}

export interface RecipeFAQ {
  question: string;
  answer: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  category: RecipeCategory;
  cuisine: string; // e.g. "French", "Italian", "American", "Canadian", "British", "German", "Australian", etc.
  countryCode: string; // e.g. "FR", "IT", "US", "CA", "GB", "DE", "AU", "ES", "PT", "SE", "GR", "JP"
  difficulty: DifficultyLevel;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  featuredImage: string;
  stageImages?: string[];
  summary: string;
  story: string;
  whyYouWillLoveIt: string[];
  dietary: DietaryPreference[];
  isHolidaySpecial?: boolean;
  isChristmas?: boolean;
  isNewYear?: boolean;
  author: string;
  publishedDate: string;
  updatedDate: string;
  ingredients: Ingredient[];
  equipment: string[];
  instructions: InstructionStep[];
  proTips: string[];
  variations: string[];
  dietaryAdaptations: {
    glutenFree?: string;
    vegetarian?: string;
    vegan?: string;
    dairyFree?: string;
    nutFree?: string;
  };
  storageAndReheating: {
    refrigeration: string;
    freezing: string;
    shelfLife: string;
    reheating: string;
  };
  faqs: RecipeFAQ[];
  relatedRecipeIds: string[];
  recommendedEquipmentIds?: string[];
  status?: 'published' | 'draft' | 'scheduled';
}

export interface AffiliateProduct {
  id: string;
  title: string;
  category: 'mixers' | 'baking-tins' | 'roasting-pans' | 'thermometers' | 'knives' | 'scales' | 'utensils' | 'cookbooks';
  categoryLabel: string;
  description: string;
  whyWeRecommendIt: string;
  pros: string[];
  considerations: string[];
  image: string;
  marketplaces: {
    [key in 'US' | 'UK' | 'CA' | 'FR' | 'DE' | 'IT' | 'ES' | 'AU']?: {
      asin: string;
      url: string;
    };
  };
  priceGuide: '$' | '$$' | '$$$';
}

export interface BuyingGuide {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  readTime: string;
  introduction: string;
  whatToLookFor: string[];
  topRecommendations: string[]; // product IDs
  whoNeedsIt: string;
  commonMistakes: string;
}

export interface ChristmasCalendarStage {
  id: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: {
    id: string;
    task: string;
    detail: string;
    recipeSlug?: string;
    recipeName?: string;
  }[];
}

export interface CountryCuisine {
  code: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  heroImage: string;
  holidayTraditions: string;
  signatureFlavors: string[];
  featuredRecipeIds: string[];
}

export interface AffiliateMarketplaceConfig {
  US: string;
  UK: string;
  CA: string;
  FR: string;
  DE: string;
  IT: string;
  ES: string;
  AU: string;
}

export interface AdSenseConfig {
  enabled: boolean;
  publisherId: string; // e.g. "ca-pub-XXXXXXXXXXXXXXXX"
  testMode: boolean;
}
