import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe, RecipeCategory, AffiliateMarketplaceConfig, AdSenseConfig } from '../types';
import { initialRecipes } from '../data/recipes';

export type AppRoute = 
  | 'home'
  | 'recipes'
  | 'christmas'
  | 'new-year'
  | 'countries'
  | 'country-detail'
  | 'category'
  | 'essentials'
  | 'recipe-detail'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'cookies'
  | 'terms'
  | 'affiliate-disclosure'
  | 'editorial-policy'
  | 'testing-policy'
  | 'admin';

interface AppContextType {
  route: AppRoute;
  setRoute: (route: AppRoute) => void;
  selectedRecipeSlug: string | null;
  setSelectedRecipeSlug: (slug: string | null) => void;
  selectedCountryCode: string | null;
  setSelectedCountryCode: (code: string | null) => void;
  selectedCategory: RecipeCategory | null;
  setSelectedCategory: (cat: RecipeCategory | null) => void;
  
  // Navigation helper
  navigateToRecipe: (slug: string) => void;
  navigateToCountry: (code: string) => void;
  navigateToCategory: (cat: RecipeCategory) => void;

  // Search & Global Filters
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedDietaryFilter: string;
  setSelectedDietaryFilter: (diet: string) => void;

  // Unit preferences
  unitSystem: 'metric' | 'us';
  setUnitSystem: (system: 'metric' | 'us') => void;
  toggleUnitSystem: () => void;

  // Bookmarks
  bookmarkedRecipeIds: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  // Christmas Calendar Checked Tasks
  calendarCheckedTasks: Record<string, boolean>;
  toggleCalendarTask: (taskId: string) => void;
  isCalendarTaskChecked: (taskId: string) => boolean;
  clearCalendarTasks: () => void;

  // Affiliate Marketplace
  currentMarketplace: 'US' | 'UK' | 'CA' | 'FR' | 'DE' | 'IT' | 'ES' | 'AU';
  setCurrentMarketplace: (mp: 'US' | 'UK' | 'CA' | 'FR' | 'DE' | 'IT' | 'ES' | 'AU') => void;
  affiliateTags: AffiliateMarketplaceConfig;
  updateAffiliateTag: (mp: keyof AffiliateMarketplaceConfig, tag: string) => void;

  // AdSense configuration
  adSenseConfig: AdSenseConfig;
  updateAdSenseConfig: (config: Partial<AdSenseConfig>) => void;

  // Seasonal Edition
  holidayMode: boolean;
  setHolidayMode: (enabled: boolean) => void;

  // CMS Recipes Storage
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  resetRecipesToDefault: () => void;

  // Cookie Consent
  cookieConsent: 'accepted' | 'declined' | 'unset';
  setCookieConsent: (val: 'accepted' | 'declined') => void;

  // Interactive Pin Modal
  pinModalRecipe: Recipe | null;
  setPinModalRecipe: (recipe: Recipe | null) => void;

  // Print Recipe Modal
  printRecipe: Recipe | null;
  setPrintRecipe: (recipe: Recipe | null) => void;
}

const defaultAffiliateTags: AffiliateMarketplaceConfig = {
  US: 'navi-kitchen-20',
  UK: 'navi-kitchen-uk-21',
  CA: 'navi-kitchen-ca-20',
  FR: 'navi-kitchen-fr-21',
  DE: 'navi-kitchen-de-21',
  IT: 'navi-kitchen-it-21',
  ES: 'navi-kitchen-es-21',
  AU: 'navi-kitchen-au-22'
};

const defaultAdSenseConfig: AdSenseConfig = {
  enabled: false, // Disabled until approved by Google AdSense
  publisherId: 'ca-pub-0000000000000000',
  testMode: true
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<AppRoute>('home');
  const [selectedRecipeSlug, setSelectedRecipeSlug] = useState<string | null>(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDietaryFilter, setSelectedDietaryFilter] = useState<string>('all');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'us'>('metric');

  const [pinModalRecipe, setPinModalRecipe] = useState<Recipe | null>(null);
  const [printRecipe, setPrintRecipe] = useState<Recipe | null>(null);

  // Bookmarks persistence
  const [bookmarkedRecipeIds, setBookmarkedRecipeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('navi_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('navi_bookmarks', JSON.stringify(bookmarkedRecipeIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedRecipeIds]);

  // Calendar tasks persistence
  const [calendarCheckedTasks, setCalendarCheckedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('navi_calendar_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('navi_calendar_tasks', JSON.stringify(calendarCheckedTasks));
    } catch (e) {
      console.error(e);
    }
  }, [calendarCheckedTasks]);

  // Affiliate Marketplace
  const [currentMarketplace, setCurrentMarketplace] = useState<'US' | 'UK' | 'CA' | 'FR' | 'DE' | 'IT' | 'ES' | 'AU'>('US');
  const [affiliateTags, setAffiliateTags] = useState<AffiliateMarketplaceConfig>(() => {
    try {
      const saved = localStorage.getItem('navi_affiliate_tags');
      return saved ? JSON.parse(saved) : defaultAffiliateTags;
    } catch {
      return defaultAffiliateTags;
    }
  });

  const updateAffiliateTag = (mp: keyof AffiliateMarketplaceConfig, tag: string) => {
    setAffiliateTags((prev) => {
      const updated = { ...prev, [mp]: tag };
      try {
        localStorage.setItem('navi_affiliate_tags', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // AdSense Config
  const [adSenseConfig, setAdSenseConfig] = useState<AdSenseConfig>(() => {
    try {
      const saved = localStorage.getItem('navi_adsense_config');
      return saved ? JSON.parse(saved) : defaultAdSenseConfig;
    } catch {
      return defaultAdSenseConfig;
    }
  });

  const updateAdSenseConfig = (newConfig: Partial<AdSenseConfig>) => {
    setAdSenseConfig((prev) => {
      const updated = { ...prev, ...newConfig };
      try {
        localStorage.setItem('navi_adsense_config', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Holiday Special Edition
  const [holidayMode, setHolidayMode] = useState<boolean>(true);

  // Recipes persistence (with CMS modifications)
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    try {
      const saved = localStorage.getItem('navi_recipes_cms');
      return saved ? JSON.parse(saved) : initialRecipes;
    } catch {
      return initialRecipes;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('navi_recipes_cms', JSON.stringify(recipes));
    } catch (e) {
      console.error(e);
    }
  }, [recipes]);

  // Cookie Consent
  const [cookieConsent, setCookieConsentState] = useState<'accepted' | 'declined' | 'unset'>(() => {
    try {
      const saved = localStorage.getItem('navi_cookie_consent');
      return (saved as any) || 'unset';
    } catch {
      return 'unset';
    }
  });

  const setCookieConsent = (val: 'accepted' | 'declined') => {
    setCookieConsentState(val);
    try {
      localStorage.setItem('navi_cookie_consent', val);
    } catch (e) {
      console.error(e);
    }
  };

  // Navigation handlers
  const navigateToRecipe = (slug: string) => {
    setSelectedRecipeSlug(slug);
    setRoute('recipe-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCountry = (code: string) => {
    setSelectedCountryCode(code);
    setRoute('country-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (cat: RecipeCategory) => {
    setSelectedCategory(cat);
    setRoute('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleUnitSystem = () => {
    setUnitSystem((prev) => (prev === 'metric' ? 'us' : 'metric'));
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedRecipeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarkedRecipeIds.includes(id);

  const toggleCalendarTask = (taskId: string) => {
    setCalendarCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const isCalendarTaskChecked = (taskId: string) => !!calendarCheckedTasks[taskId];

  const clearCalendarTasks = () => {
    setCalendarCheckedTasks({});
  };

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [recipe, ...prev]);
  };

  const updateRecipe = (updated: Recipe) => {
    setRecipes((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
  };

  const deleteRecipe = (id: string) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id));
  };

  const resetRecipesToDefault = () => {
    setRecipes(initialRecipes);
    localStorage.removeItem('navi_recipes_cms');
  };

  return (
    <AppContext.Provider
      value={{
        route,
        setRoute,
        selectedRecipeSlug,
        setSelectedRecipeSlug,
        selectedCountryCode,
        setSelectedCountryCode,
        selectedCategory,
        setSelectedCategory,
        navigateToRecipe,
        navigateToCountry,
        navigateToCategory,
        searchQuery,
        setSearchQuery,
        selectedDietaryFilter,
        setSelectedDietaryFilter,
        unitSystem,
        setUnitSystem,
        toggleUnitSystem,
        bookmarkedRecipeIds,
        toggleBookmark,
        isBookmarked,
        calendarCheckedTasks,
        toggleCalendarTask,
        isCalendarTaskChecked,
        clearCalendarTasks,
        currentMarketplace,
        setCurrentMarketplace,
        affiliateTags,
        updateAffiliateTag,
        adSenseConfig,
        updateAdSenseConfig,
        holidayMode,
        setHolidayMode,
        recipes,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        resetRecipesToDefault,
        cookieConsent,
        setCookieConsent,
        pinModalRecipe,
        setPinModalRecipe,
        printRecipe,
        setPrintRecipe,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
