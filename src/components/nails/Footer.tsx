import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  content: {
    logoText: string;
    mobileAriaLabel: string;
  };
};

const navLinkClass =
  "text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors";

const Header = ({ content }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // ✅ dacă ești deja pe "/" putem folosi doar "#..."
  // ✅ dacă ești pe altă pagină, mergem către "/#..."
  const homeHash = (hash: string) =>
    location.pathname === "/" ? `/${hash}` : `/${hash}`;

  const links = [
    { label: "Catalog", to: homeHash("#catalog") },
    { label: "How it works", to: homeHash("#how-it-works") },
    { label: "Packaging", to: homeHash("#packaging") },
    { label: "Reviews", to: homeHash("#testimonials") },
    { label: "FAQ", to: homeHash("#faq") },
    { label: "Online courses", to: "/online-courses" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <h1 className="text-xl sm:text-2xl font-light tracking-wide text-neutral-900">
              {content.logoText}
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={navLinkClass}
                onClick={closeMenu}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-neutral-600 hover:text-black transition-colors"
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

        {isMenuOpen ? (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <nav className="flex flex-col space-y-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
