'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#000000] border-b border-[#2A2A2A]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-bold text-[#D4AF6A] text-2xl tracking-wider">HC</span>
          <span className="text-zinc-400 text-lg">Enterprises</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-zinc-500 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex text-xs font-medium text-[#000000] bg-[#D4AF6A] px-4 py-2 hover:bg-[#E8D5A3] transition-colors"
        >
          {SITE.cta}
        </a>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#000000] border-b border-[#2A2A2A]">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm text-zinc-400 hover:text-white border-b border-[#2A2A2A] last:border-b-0 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-xs font-medium text-[#000000] bg-[#D4AF6A] px-4 py-2.5"
              >
                {SITE.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
