import React from 'react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { Printer, X } from 'lucide-react';

interface PrintRecipeModalProps {
  recipe: Recipe;
  servings: number;
  onClose: () => void;
}

export const PrintRecipeModal: React.FC<PrintRecipeModalProps> = ({ recipe, servings, onClose }) => {
  const { unitSystem } = useApp();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Controls (Hidden in actual print) */}
        <div className="flex items-center justify-between border-b pb-4 no-print">
          <div>
            <span className="text-xs font-semibold text-[#76543D] uppercase tracking-wider">
              Printable Recipe Card
            </span>
            <h2 className="font-serif text-xl font-bold text-[#302D28]">
              Clean Print Preview
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#30483A] text-white hover:bg-[#30483A]/90 text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print Card</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Card Content */}
        <div className="space-y-6 print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-[#30483A] pb-4 flex justify-between items-start">
            <div>
              <p className="font-serif text-2xl font-bold text-[#30483A] tracking-wider">NAVI</p>
              <p className="text-[10px] text-[#76543D] uppercase tracking-wider">
                Recipes Made With Love • Memories Shared Around the Table
              </p>
              <h1 className="font-serif text-2xl font-bold text-[#302D28] mt-2">
                {recipe.title}
              </h1>
              <p className="text-xs text-gray-600 italic mt-1">{recipe.summary}</p>
            </div>
          </div>

          {/* Key Facts Bar */}
          <div className="grid grid-cols-4 gap-2 bg-[#F5F0E7] p-3 rounded-xl text-center text-xs text-[#302D28] border border-[#E7D8C5]">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#76543D] block">Prep Time</span>
              <span className="font-semibold">{recipe.prepTimeMinutes} mins</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#76543D] block">Cook Time</span>
              <span className="font-semibold">{recipe.cookTimeMinutes} mins</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#76543D] block">Total Time</span>
              <span className="font-semibold">{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#76543D] block">Yield</span>
              <span className="font-semibold">{servings} Servings</span>
            </div>
          </div>

          {/* Two-column layout for Ingredients & Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#30483A] border-b pb-1 mb-3">
                Ingredients ({unitSystem === 'metric' ? 'Metric' : 'US Customary'})
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-800">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B76B4A] mt-1.5 shrink-0" />
                    <span>
                      <strong>{unitSystem === 'metric' ? ing.amountMetric : ing.amountUS}</strong> {ing.item}
                      {ing.notes && <span className="text-gray-500 italic"> ({ing.notes})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-[#30483A] border-b pb-1 mb-3">
                Required Equipment
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-800">
                {recipe.equipment.map((eq, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#76543D] mt-1.5 shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-lg font-bold text-[#30483A] border-b pb-1 mb-2 mt-6">
                Pro Cooking Tips
              </h3>
              <ul className="space-y-1 text-xs text-gray-700 italic">
                {recipe.proTips.map((tip, idx) => (
                  <li key={idx}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#30483A] border-b pb-1 mb-3">
              Step-by-Step Instructions
            </h3>
            <ol className="space-y-3 text-xs text-gray-800">
              {recipe.instructions.map((step) => (
                <li key={step.step} className="pl-6 relative">
                  <span className="absolute left-0 top-0 font-bold text-[#B76B4A]">
                    {step.step}.
                  </span>
                  <p className="font-bold text-gray-900">{step.title}</p>
                  <p className="mt-0.5 leading-relaxed">{step.instruction}</p>
                  {step.sensoryCue && (
                    <p className="text-gray-500 italic text-[11px] mt-0.5">
                      Sensory Cue: {step.sensoryCue}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Footer Card */}
          <div className="border-t pt-4 text-[11px] text-gray-500 flex justify-between items-center">
            <span>Recipe by Naveed Afzal • NAVI International Food Magazine</span>
            <span>https://navi-magazine.com</span>
          </div>

        </div>

      </div>
    </div>
  );
};
