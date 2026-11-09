"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/a-propos", fr: "À propos de nous", en: "About us" },
  { href: "/fonctionnement", fr: "Fonctionnement", en: "How it works" },
  { href: "/gravite", fr: "Gravité", en: "Severity" },
  { href: "/systeme", fr: "Système", en: "System" },
  { href: "/bornes", fr: "Bornes", en: "Roadside" },
  { href: "/feuille-de-route", fr: "Feuille de route", en: "Roadmap" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav gutter${open ? " open" : ""}`} id="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Tengeneza"><svg viewBox="0 0 192 204" aria-hidden="true"><use href="#mark"/></svg><span>tengeneza</span></Link>
        <ul id="menu">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
                <span className="fr">{l.fr}</span><span className="en">{l.en}</span>
              </Link>
            </li>
          ))}
          <li className="menu-cta">
            <Link className="btn primary" href="/pilote"><span className="fr">Lancer un pilote</span><span className="en">Run a pilot</span></Link>
          </li>
        </ul>
        <div className="lang" role="group" aria-label="Langue / Language">
          <button type="button" id="lang-fr" data-l="fr" aria-pressed="true">FR</button>
          <button type="button" id="lang-en" data-l="en" aria-pressed="false">EN</button>
        </div>
        <Link className="btn primary nav-cta" href="/pilote"><span className="fr">Lancer un pilote</span><span className="en">Run a pilot</span></Link>
        <button type="button" className="burger" aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
