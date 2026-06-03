'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const COOKIE_KEY = 'hc_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = (all: boolean) => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({ analytics: all, marketing: all, timestamp: Date.now() })
    )
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
        >
          <div className="max-w-5xl mx-auto bg-[#0D1630] border border-[#1A2540] rounded-2xl shadow-2xl shadow-black/40 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🍪</span>
                <h2 className="text-white font-semibold text-base">We use cookies</h2>
              </div>
              <button
                onClick={() => accept(false)}
                aria-label="Dismiss and decline non-essential cookies"
                className="text-slate-500 hover:text-white transition-colors shrink-0 mt-0.5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              HC Enterprises uses essential cookies to keep our site running and, with your consent,
              analytics and marketing cookies to improve your experience and show relevant content.
              You can manage your preferences at any time in our{' '}
              <a href="/cookies" className="text-[#D4AF6A] hover:underline">
                Cookie Policy
              </a>
              .
            </p>

            {showDetails && (
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                {[
                  {
                    name: 'Essential',
                    desc: 'Required for the site to function. Cannot be disabled.',
                    always: true,
                  },
                  {
                    name: 'Analytics',
                    desc: 'Help us understand how visitors use the site (e.g. Google Analytics).',
                    always: false,
                  },
                  {
                    name: 'Marketing',
                    desc: 'Used to show personalised ads and measure campaign performance.',
                    always: false,
                  },
                ].map((cat) => (
                  <div
                    key={cat.name}
                    className="rounded-xl border border-[#1A2540] bg-[#080F24] p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{cat.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          cat.always
                            ? 'bg-[#D4AF6A]/10 text-[#D4AF6A] border border-[#D4AF6A]/20'
                            : 'bg-slate-700/30 text-slate-400 border border-slate-700/40'
                        }`}
                      >
                        {cat.always ? 'Always on' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => accept(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF6A] to-[#C9972A] text-[#050A18] text-sm font-semibold hover:scale-105 transition-transform cursor-pointer"
              >
                Accept All
              </button>
              <button
                onClick={() => accept(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#1A2540] text-slate-300 text-sm hover:border-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                Essential Only
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full sm:w-auto text-slate-500 text-sm hover:text-slate-300 transition-colors cursor-pointer"
              >
                {showDetails ? 'Hide details' : 'Manage preferences'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
