import React, { useState, useEffect } from 'react';
import { ARTICLES, Article, Chokepoint } from './data/articles';
import { Header } from './components/Header';
import { MastheadRibbon } from './components/MastheadRibbon';
import { HeroArticle } from './components/HeroArticle';
import { ArticleCard } from './components/ArticleCard';
import { ChokepointsMatrix, ChokepointDetailModal } from './components/ChokepointDetailModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { SearchModal } from './components/SearchModal';
import { BookmarksModal } from './components/BookmarksModal';
import { SubscribeModal } from './components/SubscribeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeChokepoint, setActiveChokepoint] = useState<Chokepoint | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [shareToast, setShareToast] = useState<string | null>(null);

  // Load bookmarks on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('geopolitics_bookmarks');
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const toggleBookmark = (article: Article) => {
    setBookmarkedIds((prev) => {
      const isAlready = prev.includes(article.id);
      const next = isAlready ? prev.filter((id) => id !== article.id) : [...prev, article.id];
      try {
        localStorage.setItem('geopolitics_bookmarks', JSON.stringify(next));
      } catch {
        // safe fallback
      }
      return next;
    });
  };

  const handleShare = (article: Article) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(`Link copied for "${article.title.slice(0, 32)}..."`);
      setTimeout(() => setShareToast(null), 3000);
    }
  };

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  const heroArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const secondaryArticles = ARTICLES.filter((a) => a.id !== heroArticle.id);

  const bookmarkedArticles = ARTICLES.filter((a) => bookmarkedIds.includes(a.id));

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col antialiased selection:bg-stone-800 selection:text-white">
      {/* Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-md shadow-lg font-mono-data animate-in fade-in slide-in-from-bottom-2">
          {shareToast}
        </div>
      )}

      {/* Header (Top Bar Contract) */}
      <Header
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Masthead Operational Ribbon */}
      <MastheadRibbon onSelectChokepoint={setActiveChokepoint} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {selectedCategory === 'all' ? (
          <>
            {/* Lead Story Hero */}
            <HeroArticle
              article={heroArticle}
              onRead={setActiveArticle}
              isBookmarked={bookmarkedIds.includes(heroArticle.id)}
              onToggleBookmark={toggleBookmark}
              onShare={handleShare}
            />

            {/* Department Section Header */}
            <div className="mt-14 mb-8 flex items-baseline justify-between border-b border-stone-200 pb-3">
              <div>
                <span className="font-mono-data text-xs uppercase tracking-wider text-stone-600 font-semibold">
                  Section II
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-stone-950 mt-0.5">
                  Strategic Theatres & Industrial Sovereignty
                </h2>
              </div>
              <span className="text-xs font-mono-data text-stone-600">
                {secondaryArticles.length} In-Depth Dispatches
              </span>
            </div>

            {/* 3-Column Secondary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {secondaryArticles.slice(0, 3).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onRead={setActiveArticle}
                  isBookmarked={bookmarkedIds.includes(article.id)}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>

            {/* Global Chokepoints Radar Matrix */}
            <ChokepointsMatrix onSelectChokepoint={setActiveChokepoint} />

            {/* Section III: Extended Briefings & Diplomatic Architecture */}
            {secondaryArticles.length > 3 && (
              <div className="mt-12">
                <div className="mb-6 border-b border-stone-200 pb-3">
                  <span className="font-mono-data text-xs uppercase tracking-wider text-stone-600 font-semibold">
                    Section III
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-stone-950 mt-0.5">
                    Diplomatic Architecture & Global South Dynamics
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {secondaryArticles.slice(3).map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onRead={setActiveArticle}
                      isBookmarked={bookmarkedIds.includes(article.id)}
                      onToggleBookmark={toggleBookmark}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Filtered Category View */
          <div>
            <div className="mb-8 border-b border-stone-200 pb-4 flex items-center justify-between">
              <div>
                <span className="font-mono-data text-xs uppercase tracking-wider text-stone-600">
                  Regional Archive
                </span>
                <h1 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-950 mt-1">
                  {selectedCategory}
                </h1>
              </div>
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs uppercase font-mono-data text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                Back to All Dispatches
              </button>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-20 text-stone-500">
                No analyses currently filed under this desk.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onRead={setActiveArticle}
                    isBookmarked={bookmarkedIds.includes(article.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals & Portals */}
      <ArticleReaderModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        isBookmarked={activeArticle ? bookmarkedIds.includes(activeArticle.id) : false}
        onToggleBookmark={toggleBookmark}
      />

      <ChokepointDetailModal
        chokepoint={activeChokepoint}
        onClose={() => setActiveChokepoint(null)}
      />

      <SearchModal
        articles={ARTICLES}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={setActiveArticle}
      />

      <BookmarksModal
        bookmarkedArticles={bookmarkedArticles}
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        onSelectArticle={setActiveArticle}
        onRemoveBookmark={toggleBookmark}
      />

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
      />
    </div>
  );
}
