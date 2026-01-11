import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  content: {
    brandTitle: string;
    brandDescription: string;
    copyright: string;
  };
};

const Footer = ({ content }: Props) => {
  const nav = [
    { label: "Catalog", to: "/solo#catalog" },
    { label: "How it works", to: "/solo#how-it-works" },
    { label: "Packaging", to: "/solo#packaging" },
    { label: "Reviews", to: "/solo#testimonials" },
    { label: "FAQ", to: "/solo#faq" },
    { label: "Online courses", to: "/" },
  ];

  const base =
    "text-neutral-400 hover:text-white font-light transition-colors text-sm sm:text-base";

  const underline =
    "underline underline-offset-4 decoration-neutral-700 hover:decoration-white";

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-wide mb-4">
              {content.brandTitle}
            </h3>

            <p className="text-neutral-400 font-light leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              {content.brandDescription}
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/solo.lo_nails/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="mailto:propilki@gmail.com"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-medium mb-4 tracking-wide">Navigation</h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {nav.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={`${base} ${l.to === "/" ? underline : ""}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <p className="text-neutral-400 font-light text-xs sm:text-sm text-center">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
