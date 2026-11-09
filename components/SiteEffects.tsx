"use client";

import { useEffect } from "react";

type Lang = "fr" | "en";
const STORAGE_KEY = "tengeneza-lang";

/** Language toggle (FR/EN), sticky nav border. */
export default function SiteEffects() {
  useEffect(() => {
    const site = document.getElementById("site");
    if (!site) return;
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>(".lang button"));

    const setLang = (l: Lang) => {
      site.setAttribute("data-lang", l);
      document.documentElement.lang = l;
      buttons.forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === l ? "true" : "false"));
      try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    };

    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
    setLang(saved === "en" ? "en" : "fr");

    const onClick = (e: Event) => setLang(((e.currentTarget as HTMLButtonElement).dataset.l as Lang) ?? "fr");
    buttons.forEach((b) => b.addEventListener("click", onClick));

    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      buttons.forEach((b) => b.removeEventListener("click", onClick));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
