import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 🟢 CAZ 1: NU există hash → scroll sus
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 🟢 CAZ 2: există hash → scroll la secțiune
    requestAnimationFrame(() => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const yOffset = 0; // header fix
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }, [pathname, hash]);

  return null;
}
