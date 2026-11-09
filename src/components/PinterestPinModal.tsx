import React, { useState } from 'react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { X, Download, Share2, Copy, Check, Sparkles } from 'lucide-react';

interface PinterestPinModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const PinterestPinModal: React.FC<PinterestPinModalProps> = ({ recipe, onClose }) => {
  const [pinStyle, setPinStyle] = useState<'editorial' | 'holiday' | 'minimal'>('editorial');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto no-print">
      <div className="bg-[#F5F0E7] border border-[#E7D8C5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E7D8C5] pb-4">
          <div>
            <span className="text-xs font-semibold text-[#B76B4A] uppercase tracking-wider">
              Visual Discovery & Social Studio
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#302D28]">
              Pinterest 2:3 Pin Generator
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-[#E7D8C5] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Style Selector Tabs */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPinStyle('editorial')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
              pinStyle === 'editorial' ? 'bg-[#30483A] text-white' : 'bg-white text-[#76543D]'
            }`}
          >
            Editorial Magazine
          </button>
          <button
            onClick={() => setPinStyle('holiday')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
              pinStyle === 'holiday' ? 'bg-[#B76B4A] text-white' : 'bg-white text-[#76543D]'
            }`}
          >
            Festive Holiday Edition
          </button>
          <button
            onClick={() => setPinStyle('minimal')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
              pinStyle === 'minimal' ? 'bg-[#76543D] text-white' : 'bg-white text-[#76543D]'
            }`}
          >
            Warm Minimalist
          </button>
        </div>

        {/* 2:3 Aspect Ratio Card Preview */}
        <div className="flex justify-center">
          <div className="w-72 sm:w-80 aspect-[2/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex flex-col justify-between bg-black">
            
            {/* Background Image */}
            <img
              src={recipe.featuredImage}
              alt={recipe.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${
              pinStyle === 'holiday'
                ? 'bg-gradient-to-b from-[#30483A]/85 via-transparent to-[#302D28]/95'
                : pinStyle === 'editorial'
                ? 'bg-gradient-to-b from-[#302D28]/80 via-transparent to-[#302D28]/95'
                : 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
            }`} />

            {/* Top Brand Tag */}
            <div className="relative z-10 p-5 text-center">
              <span className="font-serif tracking-widest text-lg font-bold text-[#F5F0E7] uppercase border-b border-[#F5F0E7]/40 pb-1 inline-block">
                NAVI MAGAZINE
              </span>
              <p className="text-[10px] text-[#E7D8C5] tracking-wider uppercase mt-1">
                {pinStyle === 'holiday' ? '🎄 Christmas & Holiday Special' : 'Homemade International Recipes'}
              </p>
            </div>

            {/* Bottom Content Typography Card */}
            <div className="relative z-10 p-5 bg-[#F5F0E7]/95 backdrop-blur-md rounded-t-2xl border-t border-[#E7D8C5] space-y-2 text-center mx-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B76B4A]">
                {recipe.cuisine} • {recipe.prepTimeMinutes + recipe.cookTimeMinutes} Mins • {recipe.servings} Servings
              </span>
              
              <h3 className="font-serif text-lg font-bold text-[#302D28] leading-tight line-clamp-2">
                {recipe.title}
              </h3>

              <p className="text-[11px] text-[#76543D] line-clamp-2">
                {recipe.summary}
              </p>

              <div className="pt-2 border-t border-[#E7D8C5] flex items-center justify-between text-[10px] text-[#30483A] font-semibold">
                <span>By Naveed Afzal</span>
                <span className="bg-[#30483A] text-white px-2 py-0.5 rounded-full text-[9px]">
                  Get Recipe →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#E7D8C5]">
          <p className="text-xs text-[#76543D]">
            Ideal 1000×1500px 2:3 vertical layout optimized for Pinterest feed engagement.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-white border border-[#E7D8C5] text-[#302D28] hover:bg-[#F5F0E7] text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Link Copied!' : 'Copy Share Link'}</span>
            </button>

            <a
              href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(recipe.featuredImage)}&description=${encodeURIComponent(recipe.title + ' — ' + recipe.summary)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#B76B4A] hover:bg-[#B76B4A]/90 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <Share2 className="w-4 h-4" />
              <span>Save to Pinterest</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
