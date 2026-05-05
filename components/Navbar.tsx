'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Galerie', href: '#galerie' },
  { label: 'Moje služby', href: '#kamenne-prace' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'Často kladené otázky', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#" aria-label="Grainform – domů">
          <Image
            src="/images/logo.svg"
            alt="Grainform logo"
            width={140}
            height={40}
            priority
          />
        </a>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary/60 ${
                  activeSection === link.href.slice(1)
                    ? 'border-b border-primary pb-0.5'
                    : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#444A3E] text-white text-sm font-medium rounded transition-opacity hover:opacity-75"
        >
          Poptat realizaci
        </a>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="block w-6 h-0.5 bg-primary transition-transform duration-300 origin-center"
            style={{ transform: isOpen ? 'translateY(6px) rotate(45deg)' : '' }}
          />
          <span
            className="block w-6 h-0.5 bg-primary my-1.5 transition-opacity duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-primary transition-transform duration-300 origin-center"
            style={{ transform: isOpen ? 'translateY(-6px) rotate(-45deg)' : '' }}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen bg-cream border-t border-primary/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 pt-4 pb-2 gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-base font-medium border-b border-primary/5 hover:text-primary/60 transition-colors"
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-6 pt-4">
          <a
            href="#kontakt"
            className="block text-center px-5 py-3.5 bg-[#444A3E] text-white text-sm font-medium rounded"
            onClick={close}
          >
            Poptat realizaci
          </a>
        </div>
      </div>
    </header>
  )
}
