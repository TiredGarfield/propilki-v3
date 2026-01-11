import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  content: {
    logoText: string;
    mobileAriaLabel: string;
  };
};

const navLinkBase =
  "text-neutral-700 hover:text-black text-base font-medium tracking-wide transition-colors py-1";

const navLinkUnderline =
  "text-black font-medium tracking-wide text-base border-b border-black/20 hover:border-black transition-colors";

const mobileLinkBase = "text-lg font-medium text-neutral-800";
const mobileLinkActive = "text-lg font-medium text-black";

const Header = ({ content }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <h1 className="text-xl sm:text-2xl font-light tracking-wide text-neutral-900">
              {content.logoText}
            </h1>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/#catalog" className={navLinkBase}>
              Catalog
            </Link>
            <Link to="/#how-it-works" className={navLinkBase}>
              How it works
            </Link>
            <Link to="/#packaging" className={navLinkBase}>
              Packaging
            </Link>
            <Link to="/#testimonials" className={navLinkBase}>
              Reviews
            </Link>
            <Link to="/#faq" className={navLinkBase}>
              FAQ
            </Link>

            {/* CTA / altă pagină */}
            <Link to="/online-courses" className={navLinkUnderline}>
              Online courses
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={content.mobileAriaLabel}
            type="button"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-100">
            <nav className="flex flex-col space-y-6">
              <Link
                to="/#catalog"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                Catalog
              </Link>
              <Link
                to="/#how-it-works"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                How it works
              </Link>
              <Link
                to="/#packaging"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                Packaging
              </Link>
              <Link
                to="/#testimonials"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                Reviews
              </Link>
              <Link to="/#faq" className={mobileLinkBase} onClick={closeMenu}>
                FAQ
              </Link>

              <Link
                to="/online-courses"
                className={mobileLinkActive}
                onClick={closeMenu}
              >
                Online courses
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
