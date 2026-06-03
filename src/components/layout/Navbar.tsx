'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import Button from '@/components/ui/Button'

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
        scrolled
          ? 'bg-[#050A18]/90 backdrop-blur-md border-b border-[#1A2540]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF6A] to-[#C9972A] flex items-center justify-center">
            <span className="text-[#050A18] font-black text-sm leading-none">HC</span>
          </div>
          <span className="font-semibold text-white text-sm tracking-wide hidden sm:block">
            {SITE.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            {SITE.cta}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#080F24]/95 backdrop-blur-md border-b border-[#1A2540]">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-slate-300 hover:text-white border-b border-[#1A2540]/50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button href="#contact" className="w-full" onClick={() => setMobileOpen(false)}>
                {SITE.cta}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
