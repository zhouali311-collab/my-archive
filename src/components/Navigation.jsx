import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
  { path: '/', label: 'Home', labelCn: '首页' },
  { path: '/exhibitions', label: 'Exhibitions', labelCn: '展览' },
  { path: '/journal', label: 'Journal', labelCn: '随笔' },
  { path: '/works', label: 'Works', labelCn: '作品' },
  { path: '/about', label: 'About', labelCn: '关于' },
  { path: '/archive', label: 'Archive', labelCn: '档案' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/80 backdrop-blur-md border-b border-border-light'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <NavLink
              to="/"
              className="font-display text-xl md:text-2xl tracking-wide text-text-primary hover:text-sage transition-colors duration-300"
            >
              my Archive
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative group font-sans text-sm tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'text-text-primary'
                        : 'text-text-muted hover:text-text-primary'
                    }`
                  }
                  end={item.path === '/'}
                >
                  <span className="flex flex-col items-center gap-0.5">
                    <span>{item.label}</span>
                    <span className="text-2xs text-text-muted font-body">{item.labelCn}</span>
                  </span>
                  {/* Active Indicator */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-sage scale-100'
                        : 'bg-transparent scale-0 group-hover:scale-50'
                    }`}
                  />
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-16">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-display text-3xl transition-all duration-300 ${
                  isActive ? 'text-text-primary' : 'text-text-muted'
                }`
              }
              style={{
                animationDelay: isMobileMenuOpen ? `${index * 0.1}s` : '0s',
              }}
            >
              {item.label}
              <span className="block text-sm font-body text-text-muted text-center mt-1">
                {item.labelCn}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
