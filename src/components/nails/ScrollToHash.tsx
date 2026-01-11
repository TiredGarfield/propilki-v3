import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const getHeaderOffset = (pathname: string) => {
  return 72;
};

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = getHeaderOffset(pathname);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }, [pathname, hash]);

  return null;
}
