import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Cookie, Settings, Check, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { cookieConsent, setCookieConsent, setRoute } = useApp();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(false);

  if (cookieConsent !== 'unset') return null;

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setAdvertisingEnabled(true);
    setCookieConsent('accepted');
  };

  const handleDeclineNonEssential = () => {
    setAnalyticsEnabled(false);
    setAdvertisingEnabled(false);
    setCookieConsent('declined');
  };

  const handleSaveCustom = () => {
    setCookieConsent(advertisingEnabled || analyticsEnabled ? 'accepted' : 'declined');
    setShowPreferences(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 no-print">
      <div className="max-w-4xl mx-auto bg-[#302D28] text-[#F5F0E7] border-2 border-[#B76B4A] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-[#30483A] text-white shrink-0 mt-0.5">
            <Cookie className="w-6 h-6" />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B76B4A]">
                Privacy & Data Governance
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              We Value Your Privacy & Clear Transparency
            </h3>
            <p className="text-xs sm:text-sm text-[#E7D8C5]/90 leading-relaxed font-normal">
              NAVI uses strictly necessary cookies to ensure site functionality, remember your recipe bookmarks, and preserve your unit preferences (Metric / US). With your consent, we may use privacy-compliant analytics and non-intrusive advertising partners.
            </p>
          </div>
        </div>

        {/* Preferences Drawer */}
        {showPreferences && (
          <div className="bg-black/30 p-4 rounded-2xl border border-white/10 space-y-3 text-xs">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div>
                <p className="font-bold text-white">Strictly Necessary Cookies</p>
                <p className="text-gray-400 text-[11px]">Enables navigation, unit preferences, and recipe saves.</p>
              </div>
              <span className="text-[10px] uppercase font-bold text-green-400 bg-green-950/60 px-2.5 py-1 rounded-md">
                Always Active
              </span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div>
                <p className="font-bold text-white">Anonymous Site Analytics</p>
                <p className="text-gray-400 text-[11px]">Helps us understand which recipe guides readers enjoy most.</p>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="w-4 h-4 accent-[#B76B4A] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-white">Google AdSense Advertising</p>
                <p className="text-gray-400 text-[11px]">Enables non-intrusive culinary partner ads (GDPR compliant).</p>
              </div>
              <input
                type="checkbox"
                checked={advertisingEnabled}
                onChange={(e) => setAdvertisingEnabled(e.target.checked)}
                className="w-4 h-4 accent-[#B76B4A] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-3 text-xs text-[#E7D8C5]/70">
            <button
              onClick={() => setRoute('cookies')}
              className="underline hover:text-white transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setRoute('privacy')}
              className="underline hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#E7D8C5] hover:text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{showPreferences ? 'Hide Preferences' : 'Customize'}</span>
            </button>

            {showPreferences ? (
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md"
              >
                Save My Preferences
              </button>
            ) : (
              <>
                <button
                  onClick={handleDeclineNonEssential}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2 bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md"
                >
                  Accept All Cookies
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
