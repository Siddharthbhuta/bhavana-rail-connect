import { useRef, useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import logo from '@/assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = (menuName: string) => {
    cancelScheduledClose();
    setActiveMenu(menuName);
  };

  const scheduleCloseMenu = () => {
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 160);
  };

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'About Us', href: '/about', hasDropdown: true },
    { name: 'Contact', href: '/contact', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Dark Teal Background */}
      <div className="bg-primary py-2">
        <div className="container-custom flex items-center justify-between text-sm">
          <a href="mailto:rksales27@gmail.com" className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">rksales27@gmail.com</span>
          </a>
          <span className="text-primary-foreground font-medium hidden md:block">
            Premium Railway & Bus Components Since 1998
          </span>
        </div>
      </div>

      {/* Main Navigation - White background */}
      <nav className="bg-white border-b border-border">
        <div className="container-custom flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Bhavana Trading Co" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-foreground leading-tight">
                Bhavana Trading Co
              </h1>
              <p className="text-xs text-muted-foreground">Railway & Bus Components</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="nav-item relative"
                 onMouseEnter={() => item.hasDropdown && openMenu(item.name)}
                 onMouseLeave={() => item.hasDropdown && scheduleCloseMenu()}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </div>

          {/* Mega Menu rendered outside nav items */}
          {activeMenu && (
            <MegaMenu
              type={activeMenu}
              onMenuEnter={cancelScheduledClose}
              onMenuLeave={scheduleCloseMenu}
              onClose={() => setActiveMenu(null)}
            />
          )}

          {/* CTA Button - Orange-Red Accent */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-accent">
              Get Quote
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 px-4 text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-accent w-full mt-4">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
