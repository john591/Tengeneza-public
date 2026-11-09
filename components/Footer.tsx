import Link from "next/link";

const T = ({ fr, en }: { fr: string; en: string }) => (
  <><span className="fr">{fr}</span><span className="en">{en}</span></>
);

const product = [
  { href: "/fonctionnement", fr: "Fonctionnement", en: "How it works" },
  { href: "/gravite", fr: "Échelle de gravité", en: "Severity scale" },
  { href: "/systeme", fr: "Système", en: "System" },
];
const project = [
  { href: "/bornes", fr: "Bornes routières", en: "Roadside units" },
  { href: "/feuille-de-route", fr: "Feuille de route", en: "Roadmap" },
  { href: "/vie-privee", fr: "Vie privée", en: "Privacy" },
  { href: "/a-propos", fr: "À propos de nous", en: "About us" },
  { href: "/pilote", fr: "Devenir partenaire", en: "Become a partner" },
];

export default function Footer() {
  return (
    <footer className="site-footer gutter">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" href="/" aria-label="Tengeneza">
              <svg viewBox="0 0 192 204" aria-hidden="true"><use href="#mark-rev" /></svg>
              <span>tengeneza</span>
            </Link>
            <p><T fr="Chaque téléphone devient un détecteur de nids-de-poule : IA, score de gravité, GPS et tableau de bord pour les villes." en="Every phone becomes a pothole detector: AI, severity score, GPS and a dashboard for cities." /></p>
          </div>

          <nav className="foot-col" aria-label="Produit / Product">
            <h4><T fr="Produit" en="Product" /></h4>
            <ul>{product.map((l) => <li key={l.href}><Link href={l.href}><T fr={l.fr} en={l.en} /></Link></li>)}</ul>
          </nav>

          <nav className="foot-col" aria-label="Projet / Project">
            <h4><T fr="Projet" en="Project" /></h4>
            <ul>{project.map((l) => <li key={l.href}><Link href={l.href}><T fr={l.fr} en={l.en} /></Link></li>)}</ul>
          </nav>

          <div className="foot-col foot-cta">
            <h4><T fr="Passons à l'action" en="Let's get started" /></h4>
            <p><T fr="Municipalité, citoyen ou partenaire : rejoignez le premier quartier pilote." en="Municipality, citizen or partner: join the first district pilot." /></p>
            <Link className="btn primary" href="/pilote"><T fr="Lancer un pilote" en="Run a pilot" /></Link>
          </div>
        </div>

        <div className="foot-bar">
          <span>© 2026 <b className="foot-name">Tengeneza</b> · <T fr="Tous droits réservés" en="All rights reserved" /></span>
          <span className="foot-legal">
            <Link href="/privacy-policy"><T fr="Politique de confidentialité" en="Privacy Policy" /></Link>
            <Link href="/terms-of-service"><T fr="Conditions d'utilisation" en="Terms of Service" /></Link>
            <Link href="/data-deletion"><T fr="Suppression des données" en="Data deletion" /></Link>
          </span>
          <a className="to-top" href="#main">
            <T fr="Haut de page" en="Back to top" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
