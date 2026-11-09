import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { categoryLabels } from '../data/recipes';
import { countriesData } from '../data/countries';
import { RecipeCategory } from '../types';
import { 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  Globe, 
  Sparkles, 
  UtensilsCrossed, 
  BookOpen, 
  ChevronDown, 
  ShoppingBag,
  Clock,
  Heart
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    route, 
    setRoute, 
    navigateToRecipe, 
    navigateToCountry, 
    navigateToCategory, 
    searchQuery, 
    setSearchQuery,
    unitSystem,
    toggleUnitSystem,
    bookmarkedRecipeIds,
    holidayMode,
    recipes
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [recipesDropdownOpen, setRecipesDropdownOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Autocomplete suggestions
  const autocompleteResults = searchQuery.trim().length > 1
    ? recipes
        .filter((r) => 
          r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.ingredients.some(ing => ing.item.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSelectAutocomplete = (slug: string) => {
    navigateToRecipe(slug);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setRoute('recipes');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E7]/95 backdrop-blur-md border-b border-[#E7D8C5] shadow-xs">
      {/* Top Editorial Announcement Bar */}
      {holidayMode && (
        <div className="bg-[#30483A] text-[#F5F0E7] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B76B4A]" />
          <span>Special Launch Edition: <strong>Christmas 2026 & New Year 2027</strong> Around the World</span>
          <span className="hidden md:inline text-[#E7D8C5]/60">•</span>
          <button 
            onClick={() => setRoute('christmas')}
            className="hidden md:inline underline hover:text-[#B76B4A] transition-colors cursor-pointer"
          >
            Explore Interactive Holiday Countdown
          </button>
        </div>
      )}

      {/* Main Brand & Controls Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#302D28] hover:text-[#30483A] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Central Magazine Masthead */}
          <div className="flex-1 lg:flex-none flex flex-col items-center lg:items-start text-center lg:text-left">
            <button 
              onClick={() => setRoute('home')}
              className="group flex flex-col items-center lg:items-start cursor-pointer text-left"
            >
              <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-widest text-[#30483A] group-hover:text-[#B76B4A] transition-colors">
                NAVI
              </span>
              <span className="text-[10px] sm:text-xs text-[#76543D] tracking-wider uppercase font-medium hidden sm:block">
                Recipes Made With Love • Memories Shared Around the Table
              </span>
            </button>
          </div>

          {/* Right Action Tools: Search, Unit Toggle, Bookmarks */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Toggle / Input */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 48 recipes, ingredients..."
                    className="w-48 sm:w-64 md:w-80 pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-white border border-[#B76B4A] rounded-full focus:outline-none shadow-xs text-[#302D28]"
                  />
                  <Search className="w-4 h-4 text-[#76543D] absolute left-3 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-2.5 p-0.5 text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Autocomplete Dropdown */}
                  {autocompleteResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E7D8C5] rounded-xl shadow-lg overflow-hidden z-50 text-left">
                      <div className="px-3 py-1.5 bg-[#F5F0E7] text-[11px] font-semibold text-[#76543D] uppercase tracking-wider">
                        Suggested Recipes
                      </div>
                      {autocompleteResults.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => handleSelectAutocomplete(r.slug)}
                          className="w-full text-left px-3 py-2 hover:bg-[#F5F0E7] flex items-center gap-3 border-b border-gray-100 last:border-0 cursor-pointer"
                        >
                          <img 
                            src={r.featuredImage} 
                            alt={r.title} 
                            className="w-10 h-10 object-cover rounded-md"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-[#302D28] truncate">{r.title}</p>
                            <div className="flex items-center gap-2 text-[10px] text-[#76543D]">
                              <span>{r.cuisine}</span>
                              <span>•</span>
                              <span>{r.prepTimeMinutes + r.cookTimeMinutes} mins</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#76543D] hover:text-[#30483A] hover:bg-[#E7D8C5]/50 rounded-full transition-colors cursor-pointer"
                  title="Search recipes"
                  aria-label="Search recipes"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Global Metric / US Unit Switcher */}
            <button
              onClick={toggleUnitSystem}
              className="text-xs px-2.5 py-1 rounded-full border border-[#76543D]/30 text-[#76543D] hover:bg-[#76543D] hover:text-white transition-all font-medium cursor-pointer"
              title="Toggle Units (Metric / US Customary)"
            >
              {unitSystem === 'metric' ? 'Metric (g/ml)' : 'US (cups/oz)'}
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={() => {
                setRoute('recipes');
                setSearchQuery('');
              }}
              className="relative p-2 text-[#76543D] hover:text-[#B76B4A] hover:bg-[#E7D8C5]/50 rounded-full transition-colors cursor-pointer"
              title={`Saved Recipes (${bookmarkedRecipeIds.length})`}
            >
              <Bookmark className="w-5 h-5" />
              {bookmarkedRecipeIds.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B76B4A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarkedRecipeIds.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Primary Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-between border-t border-[#E7D8C5]/60 py-2.5 text-xs font-medium tracking-wide">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setRoute('home')}
              className={`hover:text-[#B76B4A] transition-colors cursor-pointer ${
                route === 'home' ? 'text-[#30483A] font-bold border-b-2 border-[#30483A] pb-1' : 'text-[#302D28]'
              }`}
            >
              Home
            </button>

            {/* Recipes Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setRecipesDropdownOpen(true)}
              onMouseLeave={() => setRecipesDropdownOpen(false)}
            >
              <button
                onClick={() => setRoute('recipes')}
                className={`flex items-center gap-1 hover:text-[#B76B4A] transition-colors cursor-pointer ${
                  route === 'recipes' || route === 'category' ? 'text-[#30483A] font-bold border-b-2 border-[#30483A] pb-1' : 'text-[#302D28]'
                }`}
              >
                <span>Recipes</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {recipesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#E7D8C5] shadow-lg rounded-xl py-2 z-50">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-[#76543D] uppercase tracking-wider border-b border-gray-100">
                    Recipe Collections
                  </div>
                  {Object.entries(categoryLabels).map(([catKey, label]) => (
                    <button
                      key={catKey}
                      onClick={() => {
                        navigateToCategory(catKey as RecipeCategory);
                        setRecipesDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-[#302D28] hover:bg-[#F5F0E7] hover:text-[#B76B4A] transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{label}</span>
                      <span className="text-[10px] text-[#76543D]/60">6 recipes</span>
                    </button>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        setRoute('recipes');
                        setRecipesDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-[#30483A] hover:bg-[#F5F0E7] cursor-pointer"
                    >
                      Browse All 48 Recipes →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Christmas Special Link */}
            <button
              onClick={() => setRoute('christmas')}
              className={`flex items-center gap-1 hover:text-[#B76B4A] transition-colors cursor-pointer ${
                route === 'christmas' ? 'text-[#30483A] font-bold border-b-2 border-[#30483A] pb-1' : 'text-[#302D28]'
              }`}
            >
              <span>Christmas Special</span>
              <span className="bg-[#B76B4A] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">2026</span>
            </button>

            {/* New Year Link */}
            <button
              onClick={() => setRoute('new-year')}
              className={`hover:text-[#B76B4A] transition-colors cursor-pointer ${
                route === 'new-year' ? 'text-[#30483A] font-bold border-b-2 border-[#30483A] pb-1' : 'text-[#302D28]'
              }`}
            >
              New Year
            </button>

            {/* Around the World Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCountriesDropdownOpen(true)}
              onMouseLeave={() => setCountriesDropdownOpen(false)}
            >
              <button
                onClick={() => setRoute('countries')}
                className={`flex items-center gap-1 hover:text-[#B76B4A] transition-colors cursor-pointer ${
                  route === 'countries' || route === 'country-detail' ? 'text-[#30483A] font-bold border-b-2 border-[#30483A] pb-1' : 'text-[#302D28]'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#30483A]" />
                <span>Around the World</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {countriesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#E7D8C5] shadow-lg rounded-xl p-3 grid grid-cols-2 gap-1.5 z-50">
                  <div className="col-span-2 px-2 py-1 text-[11px] font-bold text-[#76543D] uppercase tracking-wider border-b border-gray-100 mb-1">
                    12 Global Food Cultures
                  </div>
                  {countriesData.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        navigateToCountry(c.code);
                        setCountriesDropdownOpen(false);
                      }}
                      className="text-left px-2 py-1.5 rounded-md hover:bg-[#F5F0E7] text-xs text-[#302D28] hover:text-[#B76B4A] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <span className="text-base">{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigateToCategory('desserts-baking')}
              className="hover:text-[#B76B4A] transition-colors cursor-pointer text-[#302D28]"
            >
              Desserts & Baking
            </button>

            <button
              onClick={() => navigateToCategory('gluten-free')}
              className="hover:text-[#B76B4A] transition-colors cursor-pointer text-[#302D28]"
            >
              Gluten-Free
            </button>

            <button
              onClick={() => navigateToCategory('vegetarian-vegan')}
              className="hover:text-[#B76B4A] transition-colors cursor-pointer text-[#302D28]"
            >
              Vegetarian & Vegan
            </button>

            <button
              onClick={() => navigateToCategory('comfort-food')}
              className="hover:text-[#B76B4A] transition-colors cursor-pointer text-[#302D28]"
            >
              Comfort Food
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setRoute('essentials')}
              className={`flex items-center gap-1.5 text-[#76543D] hover:text-[#B76B4A] cursor-pointer ${
                route === 'essentials' ? 'font-bold text-[#30483A]' : ''
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Kitchen Essentials</span>
            </button>

            <button
              onClick={() => setRoute('about')}
              className={`hover:text-[#B76B4A] transition-colors cursor-pointer ${
                route === 'about' ? 'font-bold text-[#30483A]' : 'text-[#76543D]'
              }`}
            >
              About NAVI
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F0E7] border-b border-[#E7D8C5] px-4 pt-2 pb-6 space-y-2 shadow-lg max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => {
              setRoute('home');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#302D28] hover:bg-[#E7D8C5]"
          >
            Home
          </button>

          <button
            onClick={() => {
              setRoute('recipes');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#302D28] hover:bg-[#E7D8C5]"
          >
            Browse All 48 Recipes
          </button>

          <button
            onClick={() => {
              setRoute('christmas');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#30483A] bg-[#30483A]/10 flex items-center justify-between"
          >
            <span>Christmas 2026 Special</span>
            <span className="text-xs bg-[#B76B4A] text-white px-2 py-0.5 rounded-full">Edition</span>
          </button>

          <button
            onClick={() => {
              setRoute('new-year');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#302D28] hover:bg-[#E7D8C5]"
          >
            New Year Celebrations
          </button>

          <button
            onClick={() => {
              setRoute('countries');
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#302D28] hover:bg-[#E7D8C5] flex items-center gap-2"
          >
            <Globe className="w-4 h-4 text-[#30483A]" />
            <span>Around the World (12 Countries)</span>
          </button>

          <div className="pt-2 border-t border-[#E7D8C5]/80">
            <p className="px-3 text-[11px] font-bold text-[#76543D] uppercase tracking-wider mb-1">
              Major Collections
            </p>
            {Object.entries(categoryLabels).map(([catKey, label]) => (
              <button
                key={catKey}
                onClick={() => {
                  navigateToCategory(catKey as RecipeCategory);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5 px-3 rounded-lg text-sm text-[#302D28] hover:bg-[#E7D8C5]"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E7D8C5]/80 space-y-1">
            <button
              onClick={() => {
                setRoute('essentials');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#76543D] hover:bg-[#E7D8C5] flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Kitchen Essentials & Buying Guides</span>
            </button>

            <button
              onClick={() => {
                setRoute('about');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#76543D] hover:bg-[#E7D8C5]"
            >
              About NAVI & Naveed Afzal
            </button>

            <button
              onClick={() => {
                setRoute('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg font-medium text-[#76543D] hover:bg-[#E7D8C5]"
            >
              Contact NAVI
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
