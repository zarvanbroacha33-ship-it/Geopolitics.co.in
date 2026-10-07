import React from 'react';
import { Chokepoint, CHOKEPOINTS } from '../data/articles';
import { X, ShieldAlert, Anchor } from 'lucide-react';

interface ChokepointDetailModalProps {
  chokepoint: Chokepoint | null;
  onClose: () => void;
}

export const ChokepointDetailModal: React.FC<ChokepointDetailModalProps> = ({
  chokepoint,
  onClose
}) => {
  if (!chokepoint) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="chokepoint-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#faf8f5] border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dossier"
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 font-mono-data text-xs uppercase tracking-wider text-stone-500 mb-2">
          <Anchor className="w-3.5 h-3.5 text-stone-700" />
          <span>Strategic Maritime Corridor</span>
          <span aria-hidden="true">·</span>
          <span>{chokepoint.region}</span>
        </div>

        <h2 id="chokepoint-title" className="font-editorial text-2xl sm:text-3xl font-medium text-stone-950 mb-3">
          {chokepoint.name}
        </h2>

        {/* Status indicator with explicit text */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono-data">
          <span className="text-stone-500 uppercase tracking-wider">Status:</span>
          <span
            className={`font-semibold px-2 py-0.5 rounded-sm ${
              chokepoint.vulnerabilityStatus === 'Active Interruption'
                ? 'bg-rose-100 text-rose-900'
                : chokepoint.vulnerabilityStatus === 'Heightened Risk'
                ? 'bg-amber-100 text-amber-900'
                : 'bg-emerald-100 text-emerald-900'
            }`}
          >
            {chokepoint.vulnerabilityStatus}
          </span>
        </div>

        {/* Detailed parameters */}
        <div className="space-y-4 text-sm text-stone-800 border-t border-b border-stone-200 py-4 mb-6">
          <div>
            <div className="text-xs uppercase font-mono-data text-stone-500 tracking-wider">
              Transit Throughput
            </div>
            <div className="font-mono-data text-stone-900 font-medium mt-0.5">
              {chokepoint.trafficVolume}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase font-mono-data text-stone-500 tracking-wider">
              Primary Maritime Guarantors
            </div>
            <div className="font-medium text-stone-900 mt-0.5">
              {chokepoint.primaryGuarantors}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase font-mono-data text-stone-500 tracking-wider">
              Strategic Geopolitical Role
            </div>
            <div className="text-stone-700 mt-0.5 leading-relaxed">
              {chokepoint.strategicImportance}
            </div>
          </div>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed font-sans mb-6">
          {chokepoint.description}
        </p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
          >
            Dismiss Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

interface ChokepointsMatrixProps {
  onSelectChokepoint: (cp: Chokepoint) => void;
}

export const ChokepointsMatrix: React.FC<ChokepointsMatrixProps> = ({ onSelectChokepoint }) => {
  return (
    <section className="my-16 border-t border-b border-stone-200/90 py-10 bg-[#f7f4ee]/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono-data text-xs uppercase tracking-wider text-stone-500 mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-stone-700" />
              <span>Global Transit Radar</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-stone-950">
              Critical Maritime Chokepoints Monitor
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            Continuous surveillance of key naval narrows, canal locks, and submarine straits governing global supply chain continuity.
          </p>
        </div>

        {/* Tabular Matrix */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-300 text-stone-500 font-mono-data uppercase text-[11px] tracking-wider">
                <th className="py-3 px-3 font-medium">Chokepoint</th>
                <th className="py-3 px-3 font-medium">Strategic Region</th>
                <th className="py-3 px-3 font-medium">Flow / Traffic Volume</th>
                <th className="py-3 px-3 font-medium">Current Status</th>
                <th className="py-3 px-3 font-medium text-right">Dossier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              {CHOKEPOINTS.map((cp) => (
                <tr
                  key={cp.id}
                  onClick={() => onSelectChokepoint(cp)}
                  className="hover:bg-stone-200/40 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-3 font-semibold text-stone-950 group-hover:text-stone-700">
                    {cp.name}
                  </td>
                  <td className="py-3.5 px-3 text-stone-600 font-sans">
                    {cp.region}
                  </td>
                  <td className="py-3.5 px-3 font-mono-data text-stone-700">
                    {cp.trafficVolume}
                  </td>
                  <td className="py-3.5 px-3">
                    <span
                      className={`inline-block text-[11px] font-mono-data px-2 py-0.5 rounded-sm font-medium ${
                        cp.vulnerabilityStatus === 'Active Interruption'
                          ? 'bg-rose-100 text-rose-900'
                          : cp.vulnerabilityStatus === 'Heightened Risk'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-emerald-100 text-emerald-900'
                      }`}
                    >
                      {cp.vulnerabilityStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <span className="text-xs uppercase font-semibold text-stone-600 group-hover:text-stone-900 underline decoration-stone-300">
                      View
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
