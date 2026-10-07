import React, { useState } from 'react';
import { Search, Mail, Bookmark, X } from 'lucide-react';

interface HeaderProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenSubscribe: () => void;
  onOpenSearch: () => void;
  savedCount: number;
  onOpenBookmarks: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenSubscribe,
  onOpenSearch,
  savedCount,
  onOpenBookmarks
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navCategories = [
    { label: 'All Dispatches', value: 'all' },
    { label: 'Indo-Pacific', value: 'Indo-Pacific' },
    { label: 'Eurasia', value: 'Eurasia' },
    { label: 'Strategic Tech', value: 'Strategic Tech' },
    { label: 'Defense & Space', value: 'Defense & Space' },
    { label: 'Global Diplomacy', value: 'Global Diplomacy' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Bar 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectCategory('all')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
              Geopolitics.in
            </span>
          </button>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-stone-600 pl-3 border-l border-stone-300">
            Strategic Intelligence & Affairs
          </span>
        </div>

        {/* Zone 2: Navigation Links (Clean text with subtle underline) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
          {navCategories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`transition-colors cursor-pointer py-1 text-xs uppercase tracking-wider relative ${
                  isActive
                    ? 'text-stone-950 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-stone-900'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (1-2 items) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            aria-label="Search dispatches"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBookmarks}
            aria-label="Saved analyses"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors relative cursor-pointer"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-stone-900 ring-2 ring-[#faf8f5]" />
            )}
          </button>

          <button
            onClick={onOpenSubscribe}
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Dispatch Brief
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
          {navCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                onSelectCategory(cat.value);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-colors ${
                activeCategory === cat.value
                  ? 'bg-stone-200/70 font-semibold text-stone-950'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
