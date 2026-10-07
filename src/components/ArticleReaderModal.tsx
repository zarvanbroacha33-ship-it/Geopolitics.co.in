import React, { useState, useEffect } from 'react';
import { Article } from '../data/articles';
import { X, Bookmark, Share2, Volume2, VolumeX, Check, BookOpen, Quote } from 'lucide-react';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'compact'>('standard');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  // Audio simulator: stops on modal close or unmount
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        // Simple ambient audio progress simulator
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  if (!article) return null;

  const fontClasses = {
    compact: 'text-base leading-relaxed',
    standard: 'text-lg leading-[1.8]',
    large: 'text-xl leading-[1.9]',
  }[fontSize];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-reader-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Scrollable Reader Container */}
      <div
        onScroll={handleScroll}
        className="relative w-full max-w-4xl h-full max-h-[96vh] bg-[#faf8f5] text-stone-900 rounded-lg shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Reading Progress Bar */}
        <div className="sticky top-0 z-30 w-full bg-stone-200/80 h-1">
          <div
            className="h-full bg-stone-900 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Reader Top Utility Bar */}
        <div className="sticky top-1 z-20 flex items-center justify-between px-6 py-3.5 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200">
          <div className="flex items-center gap-3 text-xs font-mono-data uppercase tracking-wider text-stone-600">
            <BookOpen className="w-4 h-4 text-stone-700" />
            <span className="font-semibold text-stone-900">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Reader Controls */}
          <div className="flex items-center gap-2">
            {/* Audio narration simulator */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-2 rounded-md transition-colors cursor-pointer text-xs flex items-center gap-1.5 ${
                isPlayingAudio ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-200'
              }`}
              title={isPlayingAudio ? 'Pause Narration' : 'Listen to Article (Audio)'}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline font-mono-data uppercase text-[11px]">
                {isPlayingAudio ? 'Playing' : 'Audio Brief'}
              </span>
            </button>

            {/* Type Size Adjuster */}
            <div className="flex items-center border border-stone-200 rounded-md overflow-hidden bg-stone-100/50">
              <button
                onClick={() => setFontSize('compact')}
                className={`px-2.5 py-1 text-xs font-serif transition-colors ${
                  fontSize === 'compact' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Compact font"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('standard')}
                className={`px-2.5 py-1 text-xs font-serif transition-colors ${
                  fontSize === 'standard' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Standard font"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 text-xs font-serif transition-colors ${
                  fontSize === 'large' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Large font"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                isBookmarked ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-200'
              }`}
              title={isBookmarked ? 'Remove saved' : 'Save article'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 text-stone-600 hover:bg-stone-200 rounded-md transition-colors cursor-pointer relative"
              title="Copy article link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-md transition-colors cursor-pointer ml-1"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="px-6 sm:px-12 py-10 max-w-3xl mx-auto w-full">
          {/* Header Metadata */}
          <div className="text-center mb-8">
            <div className="font-mono-data text-xs uppercase tracking-widest text-stone-500 mb-3">
              Special Dossier · Published {article.date}
            </div>

            <h1
              id="article-reader-title"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-950 leading-[1.18] text-balance mb-4"
            >
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
              {article.subtitle}
            </p>

            {/* Curatorial Byline */}
            <div className="mt-6 pt-4 border-t border-b border-stone-200/80 inline-block text-center px-8">
              <div className="text-sm font-semibold text-stone-900">
                {article.author.name}
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                {article.author.title} — {article.author.institution}
              </div>
            </div>
          </div>

          {/* Lead Image & Caption */}
          <div className="mb-10">
            <div className="rounded-sm overflow-hidden bg-stone-100 aspect-16/9 shadow-xs">
              <img
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs font-editorial italic text-stone-600 mt-2 text-center">
              {article.imageCaption}
            </p>
          </div>

          {/* Key Strategic Takeaways Box */}
          <div className="bg-[#f3efe6]/70 border-l-3 border-stone-800 p-5 rounded-r-md mb-10">
            <div className="text-xs font-mono-data uppercase tracking-wider font-semibold text-stone-900 mb-2">
              Strategic Invariants & Core Takeaways
            </div>
            <ul className="space-y-2 text-sm text-stone-700 list-disc list-inside">
              {article.takeaways.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Longform Prose with Drop Cap */}
          <div className={`font-serif text-stone-800 space-y-6 ${fontClasses}`}>
            {article.paragraphs.map((p, index) => {
              if (index === 0) {
                return (
                  <p
                    key={index}
                    className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-950"
                  >
                    {p}
                  </p>
                );
              }

              // Embed pull quote after second paragraph if available
              if (index === 2 && article.pullQuote) {
                return (
                  <React.Fragment key={index}>
                    <p>{p}</p>
                    <blockquote className="my-8 py-6 px-8 border-y border-stone-300 bg-[#f7f4ee]/40 relative">
                      <Quote className="w-8 h-8 text-stone-300 absolute top-3 left-2 -z-10" />
                      <p className="font-editorial italic text-xl sm:text-2xl text-stone-900 leading-snug text-center">
                        "{article.pullQuote}"
                      </p>
                    </blockquote>
                  </React.Fragment>
                );
              }

              return <p key={index}>{p}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2 text-xs font-mono-data text-stone-600">
            <span className="uppercase tracking-wider font-semibold text-stone-700">Subject Tags:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="text-stone-700">
                #{tag}
              </span>
            ))}
          </div>

          {/* Citations & Institutional References */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <div className="text-xs font-mono-data uppercase tracking-wider font-semibold text-stone-900 mb-3">
              Institutional Citations & Documentation
            </div>
            <ol className="space-y-2 text-xs text-stone-600 list-decimal list-inside font-mono-data">
              {article.citations.map((cite, idx) => (
                <li key={idx} className="leading-relaxed">
                  {cite}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="mt-auto px-6 py-4 bg-[#f4f0e8]/80 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span>Published under the editorial charter of Geopolitics.in</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
