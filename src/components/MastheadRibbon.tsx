import React from 'react';
import { CHOKEPOINTS, Chokepoint } from '../data/articles';

interface MastheadRibbonProps {
  onSelectChokepoint: (chokepoint: Chokepoint) => void;
}

export const MastheadRibbon: React.FC<MastheadRibbonProps> = ({ onSelectChokepoint }) => {
  return (
    <div className="border-b border-stone-200/90 bg-[#f4f0e8]/60 text-stone-700 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        {/* Edition & Location */}
        <div className="flex items-center gap-2 font-mono-data text-[11px] text-stone-600 tracking-wide uppercase">
          <span>VOL. VII</span>
          <span aria-hidden="true">·</span>
          <span>NEW DELHI & GLOBAL DISPATCHES</span>
          <span aria-hidden="true">·</span>
          <span>EST. 2026</span>
        </div>

        {/* Chokepoint Monitor Highlights */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-0.5 no-scrollbar">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 whitespace-nowrap">
            Chokepoints:
          </span>
          <div className="flex items-center gap-2 text-[11px] font-mono-data whitespace-nowrap">
            {CHOKEPOINTS.map((cp, idx) => (
              <React.Fragment key={cp.id}>
                <button
                  onClick={() => onSelectChokepoint(cp)}
                  className="hover:text-stone-950 underline decoration-stone-300 hover:decoration-stone-800 transition-colors cursor-pointer"
                  title={cp.trafficVolume}
                >
                  <span className="font-medium text-stone-800">{cp.name}</span>
                  <span className="ml-1 text-stone-600 font-sans">
                    ({cp.vulnerabilityStatus})
                  </span>
                </button>
                {idx < CHOKEPOINTS.length - 1 && <span className="text-stone-400" aria-hidden="true">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
