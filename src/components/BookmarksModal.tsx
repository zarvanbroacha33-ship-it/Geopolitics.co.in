import React from 'react';
import { Article } from '../data/articles';
import { X, Bookmark, ArrowUpRight, Trash2 } from 'lucide-react';

interface BookmarksModalProps {
  bookmarkedArticles: Article[];
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (article: Article) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  bookmarkedArticles,
  isOpen,
  onClose,
  onSelectArticle,
  onRemoveBookmark
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-xl bg-[#faf8f5] border border-stone-300 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#f4f0e8]/80">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-stone-800" />
            <h3 className="font-editorial text-xl font-medium text-stone-900">
              Saved Analyses ({bookmarkedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-4">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-sm">
              <Bookmark className="w-8 h-8 mx-auto mb-2 text-stone-400 stroke-1" />
              You haven't saved any analyses yet. Click the bookmark icon on any dispatch to read offline or later.
            </div>
          ) : (
            bookmarkedArticles.map((art) => (
              <div
                key={art.id}
                className="p-4 rounded-md border border-stone-200 bg-white flex flex-col justify-between hover:border-stone-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono-data text-stone-500 uppercase">
                    <span>{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="font-editorial text-lg text-stone-900 hover:text-stone-700 cursor-pointer transition-colors mt-1 font-medium"
                  >
                    {art.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {art.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
                  <span className="text-xs text-stone-500">By {art.author.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveBookmark(art)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 rounded-md transition-colors cursor-pointer"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
                    >
                      Read <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
