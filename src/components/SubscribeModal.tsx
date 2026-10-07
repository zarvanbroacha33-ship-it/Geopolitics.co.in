import React, { useState } from 'react';
import { X, Check, Mail, ShieldCheck } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState<'weekly' | 'breaking'>('weekly');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    try {
      const existing = JSON.parse(localStorage.getItem('geopolitics_subscribers') || '[]');
      existing.push({ email, frequency, date: new Date().toISOString() });
      localStorage.setItem('geopolitics_subscribers', JSON.stringify(existing));
    } catch {
      // safe fallback
    }
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-lg bg-[#faf8f5] border border-stone-300 rounded-lg shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-medium text-stone-950 mb-2">
              Subscription Confirmed
            </h3>
            <p className="text-sm text-stone-600 mb-6 leading-relaxed">
              You are now subscribed to the <strong>Geopolitics.in Strategic Dispatch</strong>. A confirmation digest has been queued for <code>{email}</code>.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
            >
              Back to Dispatches
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 font-mono-data text-xs uppercase tracking-wider text-stone-500 mb-2">
              <Mail className="w-3.5 h-3.5 text-stone-700" />
              <span>Intelligence Briefing</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-stone-950 mb-2">
              Receive the Weekly Strategic Briefing
            </h3>

            <p className="text-sm text-stone-600 mb-6 leading-relaxed">
              Curated assessments on maritime chokepoints, Eurasian energy architectures, semiconductor sovereignty, and grand strategy. Unbiased and advertising-free.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-data uppercase tracking-wider text-stone-700 mb-1.5">
                  Institutional Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="analyst@institute.org"
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-md text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-data uppercase tracking-wider text-stone-700 mb-1.5">
                  Dispatch Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFrequency('weekly')}
                    className={`py-2 px-3 border rounded-md text-center transition-colors cursor-pointer ${
                      frequency === 'weekly'
                        ? 'border-stone-900 bg-stone-900 text-white font-medium'
                        : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Weekly Curated Digest
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('breaking')}
                    className={`py-2 px-3 border rounded-md text-center transition-colors cursor-pointer ${
                      frequency === 'breaking'
                        ? 'border-stone-900 bg-stone-900 text-white font-medium'
                        : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Real-time Crisis Bulletins
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-stone-600 shrink-0" />
                <span>Zero telemetry or spam. Unsubscribe at any moment.</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer mt-2"
              >
                Join the Strategic Reader Circle
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
