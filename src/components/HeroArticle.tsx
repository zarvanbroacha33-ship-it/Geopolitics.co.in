import React from 'react';
import { Article } from '../data/articles';
import { ArrowUpRight, Bookmark, Share2 } from 'lucide-react';

interface HeroArticleProps {
  article: Article;
  onRead: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
  onShare: (article: Article) => void;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({
  article,
  onRead,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  return (
    <article className="border-b border-stone-200/90 pb-12 pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Visual Focal Anchor */}
        <div className="lg:col-span-7">
          <div
            onClick={() => onRead(article)}
            className="group block relative overflow-hidden rounded-sm cursor-pointer bg-stone-100 aspect-16/9 shadow-xs"
          >
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
          </div>
          <p className="text-xs font-editorial italic text-stone-600 mt-2.5">
            {article.imageCaption}
          </p>
        </div>

        {/* Right Column: Lead Analysis Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* Unboxed Metadata Line */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-600 mb-3 font-mono-data">
            <span className="font-semibold text-stone-900">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>Lead Investigation</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Headline */}
          <h1
            onClick={() => onRead(article)}
            className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-stone-950 leading-[1.18] hover:text-stone-700 transition-colors cursor-pointer text-balance"
          >
            {article.title}
          </h1>

          {/* Subtitle / Deck */}
          <p className="text-sm sm:text-base text-stone-700 mt-3 leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author Byline */}
          <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-stone-900">
                {article.author.name}
              </div>
              <div className="text-xs text-stone-600">
                {article.author.institution}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(article);
                }}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'text-stone-900 bg-stone-200/80'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
                title={isBookmarked ? 'Remove from saved' : 'Save for later'}
                aria-label="Save analysis"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onShare(article);
                }}
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
                title="Share article"
                aria-label="Share article"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => onRead(article)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
              >
                Read Essay
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
