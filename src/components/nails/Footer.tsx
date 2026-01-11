import { Instagram, Facebook, Mail } from "lucide-react";

type FooterSocialType = "instagram" | "facebook" | "mail";

type Props = {
  content: {
    brandTitle: string;
    brandDescription: string;
    social: { type: FooterSocialType; href: string }[];
    columns: { title: string; links: { label: string; href: string }[] }[];
    copyright: string;
  };
};

const Footer = ({ content }: Props) => {
  const getIcon = (type: FooterSocialType) => {
    if (type === "instagram") return Instagram;
    if (type === "facebook") return Facebook;
    return Mail;
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-wide mb-4">
              {content.brandTitle}
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-6 max-w-md">
              {content.brandDescription}
            </p>

            <div className="flex space-x-4">
              {content.social.map((s, i) => {
                const Icon = getIcon(s.type);
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {content.columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-medium mb-4 tracking-wide">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l.href}
                      className="text-neutral-400 hover:text-white font-light transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <p className="text-neutral-400 font-light text-sm text-center">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
