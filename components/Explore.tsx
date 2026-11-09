import Link from "next/link";

const items = [
  { href: "/fonctionnement", fr: ["Fonctionnement", "De la route à l'équipe de réparation, en quatre étapes."], en: ["How it works", "From the road to the repair crew, in four steps."] },
  { href: "/gravite", fr: ["Gravité", "Une échelle de 1 à 5 pour réparer d'abord le dangereux."], en: ["Severity", "A 1 to 5 scale to fix the dangerous ones first."] },
  { href: "/systeme", fr: ["Système", "L'IA sur le téléphone, l'IA dans le cloud et l'architecture."], en: ["System", "On-phone AI, cloud AI and the architecture."] },
  { href: "/bornes", fr: ["Bornes", "Phase 2 : des caméras en bord de route, jour et nuit."], en: ["Roadside", "Phase 2: roadside cameras, day and night."] },
  { href: "/feuille-de-route", fr: ["Feuille de route", "Douze mois jusqu'au déploiement dans toute la ville."], en: ["Roadmap", "Twelve months to a city-wide rollout."] },
  { href: "/a-propos", fr: ["À propos de nous", "Notre mission, notre approche et nos valeurs."], en: ["About us", "Our mission, our approach and our values."] },
];

export default function Explore() {
  return (
    <section className="band gutter" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Explorer</span><span className="en">Explore</span></span>
          <h2 id="exp-h"><span className="fr">Tout savoir sur Tengeneza</span><span className="en">Everything about Tengeneza</span></h2>
        </div>
        <div className="explore rv">
          {items.map((i, n) => (
            <Link key={i.href} href={i.href} className="ex-card">
              <span className="ex-n">{String(n + 1).padStart(2, "0")}</span>
              <h3><span className="fr">{i.fr[0]}</span><span className="en">{i.en[0]}</span></h3>
              <p><span className="fr">{i.fr[1]}</span><span className="en">{i.en[1]}</span></p>
              <span className="ex-go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
        <div className="ex-cta rv">
          <Link className="btn primary" href="/pilote"><span className="fr">Devenir ville pilote</span><span className="en">Become a pilot city</span></Link>
        </div>
      </div>
    </section>
  );
}
