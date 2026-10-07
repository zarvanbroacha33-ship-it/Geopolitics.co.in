import React from 'react';
import { Article } from '../data/articles';
import { Bookmark, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onRead,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <article className="group flex flex-col justify-between border-b border-stone-200/80 pb-6 pt-4 transition-all">
      <div>
        {/* Image Container with 4:3 Ratio */}
        <div
          onClick={() => onRead(article)}
          className="relative overflow-hidden rounded-sm cursor-pointer bg-stone-100 aspect-4/3 mb-4 shadow-xs"
        >
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider text-stone-600 mb-2">
          <span className="font-semibold text-stone-900">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h2
          onClick={() => onRead(article)}
          className="font-editorial text-xl sm:text-2xl font-medium tracking-tight text-stone-950 group-hover:text-stone-700 transition-colors cursor-pointer leading-snug text-balance"
        >
          {article.title}
        </h2>

        {/* Concise Deck */}
        <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
          {article.subtitle}
        </p>
      </div>

      {/* Author and Action Footer */}
      <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
        <div className="truncate max-w-[190px]">
          <span className="font-medium text-stone-900 block truncate">
            {article.author.name}
          </span>
          <span className="text-stone-600 text-[11px] block truncate">
            {article.author.institution}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article);
            }}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              isBookmarked
                ? 'text-stone-900 bg-stone-200'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
            title={isBookmarked ? 'Remove saved' : 'Save article'}
            aria-label="Save article"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>

          <button
            onClick={() => onRead(article)}
            className="p-1.5 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors cursor-pointer flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
          >
            Read
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </article>
  );
};
