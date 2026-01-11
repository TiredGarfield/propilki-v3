import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  content?: {
    mobileAriaLabel?: string;
  };
};

const navLinkBase =
  "text-neutral-600 hover:text-black text-base font-medium tracking-wide transition-colors";

const pressOnLinkClass =
  "text-neutral-600 hover:text-black text-base font-medium tracking-wide transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900";

const mobileLinkBase = "text-lg font-medium text-neutral-800";
const mobilePressOnLink =
  "text-lg font-medium text-neutral-800 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900";

const Header = ({ content }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  const mobileLabel = content?.mobileAriaLabel ?? "Open menu";

  const onCoursesPage = pathname.startsWith("/online-courses");

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/online-courses"
            className="flex-shrink-0"
            onClick={closeMenu}
          >
            <h1 className="text-xl sm:text-2xl font-light tracking-wide text-neutral-900">
              PROPILKI
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/online-courses#about" className={navLinkBase}>
              About
            </Link>
            <Link to="/online-courses#courses" className={navLinkBase}>
              Courses
            </Link>
            <Link to="/online-courses#reviews" className={navLinkBase}>
              Reviews
            </Link>
            <Link to="/online-courses#faq" className={navLinkBase}>
              FAQ
            </Link>

            <Link
              to="/"
              className={`${pressOnLinkClass} ${
                !onCoursesPage ? "text-black" : ""
              }`}
              onClick={closeMenu}
            >
              Press-on Nails
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-neutral-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={mobileLabel}
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
              <Link
                to="/online-courses#courses"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                Courses
              </Link>
              <Link
                to="/online-courses#about"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/online-courses#reviews"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                Reviews
              </Link>
              <Link
                to="/online-courses#faq"
                className={mobileLinkBase}
                onClick={closeMenu}
              >
                FAQ
              </Link>

              <Link to="/" className={mobilePressOnLink} onClick={closeMenu}>
                Press-on Nails
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
