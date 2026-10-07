import React from 'react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenSubscribe: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenSubscribe }) => {
  return (
    <footer className="border-t border-stone-300 bg-[#f4f0e8]/80 text-stone-700 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-200">
        {/* Brand & Editorial Charter */}
        <div className="md:col-span-5 space-y-4">
          <span className="font-editorial text-2xl font-medium tracking-tight text-stone-950 block">
            Geopolitics.in
          </span>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md font-sans">
            Independent strategic intelligence and geoeconomic research on the Indo-Pacific, Eurasian transit geography, critical technology corridors, and national security doctrine.
          </p>
          <div className="text-xs font-mono-data text-stone-500">
            Published from New Delhi, India · Global Readership across 60+ Nations
          </div>
        </div>

        {/* Thematic Sectors */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-mono-data uppercase tracking-wider text-stone-900 font-semibold">
            Regional Desks
          </div>
          <ul className="space-y-2 text-xs text-stone-600 font-sans">
            <li>
              <button
                onClick={() => onSelectCategory('Indo-Pacific')}
                className="hover:text-stone-950 transition-colors cursor-pointer text-left"
              >
                Indo-Pacific & Maritime Mandala
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Eurasia')}
                className="hover:text-stone-950 transition-colors cursor-pointer text-left"
              >
                Eurasia & INSTC Connectivity
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Strategic Tech')}
                className="hover:text-stone-950 transition-colors cursor-pointer text-left"
              >
                Semiconductor & Mineral Sovereignty
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Defense & Space')}
                className="hover:text-stone-950 transition-colors cursor-pointer text-left"
              >
                C4ISR, NavIC & Space Awareness
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Global Diplomacy')}
                className="hover:text-stone-950 transition-colors cursor-pointer text-left"
              >
                Multi-Alignment & Global South
              </button>
            </li>
          </ul>
        </div>

        {/* Intelligence Briefing Callout */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-xs font-mono-data uppercase tracking-wider text-stone-900 font-semibold">
            Institutional Circulation
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Receive our unclassified intelligence dossiers directly to your inbox every Thursday evening.
          </p>
          <button
            onClick={onOpenSubscribe}
            className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
          >
            Request Dispatch Access
          </button>
        </div>
      </div>

      {/* Quiet Legal & Copyright Strip */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-data text-stone-500">
        <div>
          © {new Date().getFullYear()} Geopolitics.in. All rights reserved. Non-partisan research.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-stone-800 cursor-pointer">Editorial Ethics</span>
          <span>·</span>
          <span className="hover:text-stone-800 cursor-pointer">Research Independence</span>
          <span>·</span>
          <span className="hover:text-stone-800 cursor-pointer">Archival Index</span>
        </div>
      </div>
    </footer>
  );
};
