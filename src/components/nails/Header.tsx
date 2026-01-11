import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinkClass =
  "text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <h1 className="text-2xl font-light tracking-wide text-neutral-900">
              NAILUXE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#biography" className={navLinkClass}>
              Biography
            </Link>
            <Link to="/#tip-creation" className={navLinkClass}>
              Tip Creation
            </Link>
            <Link to="/#celebrity-works" className={navLinkClass}>
              Celebrity Works
            </Link>
            <Link to="/#championships" className={navLinkClass}>
              Championships
            </Link>
            <Link to="/#competitions" className={navLinkClass}>
              Competitions
            </Link>
            <Link to="/online-courses" className={navLinkClass}>
              Online Courses
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/#biography"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Biography
              </Link>
              <Link
                to="/#tip-creation"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Tip Creation
              </Link>
              <Link
                to="/#celebrity-works"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Celebrity Works
              </Link>
              <Link
                to="/#championships"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Championships
              </Link>
              <Link
                to="/#competitions"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Competitions
              </Link>
              <Link
                to="/online-courses"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Online Courses
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
