import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { RecipesPage } from './pages/RecipesPage';
import { ChristmasPage } from './pages/ChristmasPage';
import { NewYearPage } from './pages/NewYearPage';
import { CountriesIndexPage, CountryDetailPage } from './pages/CountryPage';
import { CategoryPage } from './pages/CategoryPage';
import { KitchenEssentials } from './components/KitchenEssentials';
import { RecipeDetail } from './components/RecipeDetail';
import { AdminCMS } from './components/AdminCMS';
import {
  AboutPage,
  ContactPage,
  PrivacyPolicyPage,
  CookiePolicyPage,
  TermsConditionsPage,
  AffiliateDisclosurePage,
  EditorialPolicyPage,
  TestingPolicyPage
} from './pages/TrustPages';

const MainContent: React.FC = () => {
  const { route, selectedRecipeSlug, recipes } = useApp();

  const currentRecipe = recipes.find((r) => r.slug === selectedRecipeSlug) || recipes[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E7]">
      <Header />
      
      <main className="flex-1">
        {route === 'home' && <HomePage />}
        {route === 'recipes' && <RecipesPage />}
        {route === 'christmas' && <ChristmasPage />}
        {route === 'new-year' && <NewYearPage />}
        {route === 'countries' && <CountriesIndexPage />}
        {route === 'country-detail' && <CountryDetailPage />}
        {route === 'category' && <CategoryPage />}
        {route === 'essentials' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <KitchenEssentials />
          </div>
        )}
        {route === 'recipe-detail' && <RecipeDetail recipe={currentRecipe} />}
        {route === 'about' && <AboutPage />}
        {route === 'contact' && <ContactPage />}
        {route === 'privacy' && <PrivacyPolicyPage />}
        {route === 'cookies' && <CookiePolicyPage />}
        {route === 'terms' && <TermsConditionsPage />}
        {route === 'affiliate-disclosure' && <AffiliateDisclosurePage />}
        {route === 'editorial-policy' && <EditorialPolicyPage />}
        {route === 'testing-policy' && <TestingPolicyPage />}
        {route === 'admin' && <AdminCMS />}
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
