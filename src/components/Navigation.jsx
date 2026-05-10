import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/exhibitions', label: 'Exhibitions', zh: '展览' },
  { path: '/journal', label: 'Journal', zh: '随笔' },
  { path: '/works', label: 'Works', zh: '作品' },
  { path: '/archive', label: 'Archive', zh: '档案' },
  { path: '/about', label: 'About', zh: '关于' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-lg tracking-wide hover:text-sage transition-colors"
          >
            my Archive
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative text-sm tracking-wide transition-colors hover:text-sage ${
                  location.pathname === link.path ? 'text-sage' : ''
                }`}
              >
                <span className="text-xs opacity-60">{link.zh}</span>
                <span className="mx-2">{link.label}</span>
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform ${isMobileMenuOpen ? 'rotate-45' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-sage/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm py-2 transition-colors ${
                  location.pathname === link.path ? 'text-sage' : 'hover:text-sage'
                }`}
              >
                <span className="text-xs opacity-60 mr-2">{link.zh}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />
    </header>
  )
}
