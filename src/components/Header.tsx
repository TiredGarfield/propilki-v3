
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light tracking-wide text-neutral-900">
              NAILUXE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#biography" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
              Biography
            </a>
            <a href="#tip-creation" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
              Tip Creation
            </a>
            <a href="#celebrity-works" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
              Celebrity Works
            </a>
            <a href="#championships" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
              Championships
            </a>
            <a href="#competitions" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
              Competitions
            </a>
            <a href="/online-courses" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
              Online Courses
            </a>
          </nav>

          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-neutral-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              <a href="#biography" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
                Biography
              </a>
              <a href="#tip-creation" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
                Tip Creation
              </a>
              <a href="#celebrity-works" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
                Celebrity Works
              </a>
              <a href="#championships" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
                Championships
              </a>
              <a href="#competitions" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
                Competitions
              </a>
              <a href="/online-courses" className="text-neutral-600 hover:text-black text-sm font-medium tracking-wide transition-colors">
                Online Courses
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
