import React from 'react';
import { useApp } from '../context/AppContext';

interface AdSenseBannerProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'in-feed';
  label?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ 
  slotId = 'navi-slot-default', 
  format = 'horizontal',
  label = 'Advertisement'
}) => {
  const { adSenseConfig } = useApp();

  // If owner has not enabled AdSense yet, we show a clean, non-intrusive reserved editorial sponsor space
  return (
    <div className="my-8 mx-auto w-full max-w-4xl text-center no-print">
      <div className="text-[10px] uppercase font-bold tracking-widest text-[#76543D]/60 mb-1.5 flex items-center justify-center gap-2">
        <span className="w-6 h-px bg-[#E7D8C5]"></span>
        <span>{label}</span>
        <span className="w-6 h-px bg-[#E7D8C5]"></span>
      </div>

      <div className={`mx-auto bg-gradient-to-r from-[#F5F0E7] via-white to-[#F5F0E7] border border-[#E7D8C5] rounded-xl flex flex-col items-center justify-center p-6 text-center shadow-2xs ${
        format === 'horizontal' ? 'min-h-[110px]' : 'min-h-[250px]'
      }`}>
        {adSenseConfig.enabled ? (
          <div className="space-y-1 text-xs text-[#76543D]">
            {adSenseConfig.testMode ? (
              <div className="bg-[#30483A]/10 border border-[#30483A]/30 rounded-lg p-3 text-xs text-[#30483A]">
                <p className="font-semibold">Google AdSense Test Placement ({slotId})</p>
                <p className="text-[11px] text-[#76543D]">Publisher ID: {adSenseConfig.publisherId} • Ready for live Google crawler</p>
              </div>
            ) : (
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={adSenseConfig.publisherId}
                data-ad-slot={slotId}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            )}
          </div>
        ) : (
          <div className="space-y-1 text-xs text-[#76543D]">
            <p className="font-serif text-sm font-semibold text-[#30483A]">
              NAVI Cooking Gazette • Independent Food Journal
            </p>
            <p className="text-[11px] text-[#76543D]/70 max-w-md">
              Ethical advertising space reserved for approved culinary partners. NAVI never allows deceptive downloads or forced clicks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
