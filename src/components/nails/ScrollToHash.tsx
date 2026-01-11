import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    requestAnimationFrame(() => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const yOffset = 0;
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }, [pathname, hash]);

  return null;
}
