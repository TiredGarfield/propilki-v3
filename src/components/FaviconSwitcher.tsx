import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const setFaviconHref = (file: string) => {
  const link = document.querySelector<HTMLLinkElement>("link#favicon");
  if (!link) return;

  link.href = `${base}${file}?v=${Date.now()}`;
};

const FaviconSwitcher = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/solo")) {
      setFaviconHref("solo_favicon.svg");
    } else {
      setFaviconHref("propilki_favicon.svg");
    }
  }, [pathname]);

  return null;
};

export default FaviconSwitcher;
