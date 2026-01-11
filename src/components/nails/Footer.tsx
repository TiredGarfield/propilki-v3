import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-wide mb-4">NAILUXE</h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-6 max-w-md">
              Premium press-on nails, crafted with precision and designed to
              elevate your elegance. Enjoy salon-quality results — effortlessly,
              anytime, anywhere.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#biography"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Biography
                </a>
              </li>
              <li>
                <a
                  href="#tip-creation"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Tip Creation
                </a>
              </li>
              <li>
                <a
                  href="#celebrity-works"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Celebrity Works
                </a>
              </li>
              <li>
                <a
                  href="#championships"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Championships
                </a>
              </li>
              <li>
                <a
                  href="#competitions"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Competitions
                </a>
              </li>
              <li>
                <a
                  href="/online-courses"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Online Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium mb-4 tracking-wide">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white font-light transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <p className="text-neutral-400 font-light text-sm text-center">
            © 2024 Nailuxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
