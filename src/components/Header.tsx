import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass =
    "text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors";

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-light tracking-wide text-neutral-900"
            >
              NAILUXE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#biography" className={navLinkClass}>
              Biography
            </a>
            <a href="#tip-creation" className={navLinkClass}>
              Tip Creation
            </a>
            <a href="#celebrity-works" className={navLinkClass}>
              Celebrity Works
            </a>
            <a href="#championships" className={navLinkClass}>
              Championships
            </a>
            <a href="#competitions" className={navLinkClass}>
              Competitions
            </a>

            {/* React Router link */}
            <Link to="/online-courses" className={navLinkClass}>
              Online Courses
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <div className="flex flex-col space-y-4">
              <a href="#biography" className={navLinkClass}>
                Biography
              </a>
              <a href="#tip-creation" className={navLinkClass}>
                Tip Creation
              </a>
              <a href="#celebrity-works" className={navLinkClass}>
                Celebrity Works
              </a>
              <a href="#championships" className={navLinkClass}>
                Championships
              </a>
              <a href="#competitions" className={navLinkClass}>
                Competitions
              </a>

              {/* React Router link */}
              <Link
                to="/online-courses"
                className={navLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Online Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
