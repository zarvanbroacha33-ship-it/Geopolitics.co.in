import React, { useState } from 'react';
import { Article } from '../data/articles';
import { Search, X, ArrowUpRight } from 'lucide-react';

interface SearchModalProps {
  articles: Article[];
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  articles,
  isOpen,
  onClose,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = articles.filter((art) => {
    const q = query.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.subtitle.toLowerCase().includes(q) ||
      art.author.name.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q) ||
      art.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-2xl bg-[#faf8f5] border border-stone-300 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 bg-white">
          <Search className="w-5 h-5 text-stone-500 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic, corridor, author, or keyword (e.g., Malacca, 2nm, SAGAR)..."
            className="w-full bg-transparent border-none text-stone-900 placeholder-stone-400 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 space-y-3 divide-y divide-stone-100">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-sm">
              No strategic dispatches found matching "{query}".
            </div>
          ) : (
            filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="pt-3 first:pt-0 group cursor-pointer hover:bg-stone-100/60 p-2.5 rounded-md transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] font-mono-data text-stone-500 uppercase">
                  <span>{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h4 className="font-editorial text-lg text-stone-900 group-hover:text-stone-600 transition-colors mt-1 font-medium">
                  {art.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-1 mt-0.5">
                  {art.subtitle}
                </p>
                <div className="flex items-center justify-between mt-2 text-xs text-stone-500">
                  <span>By {art.author.name}</span>
                  <span className="flex items-center gap-1 font-semibold text-stone-800 uppercase tracking-wider text-[11px]">
                    Read <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
