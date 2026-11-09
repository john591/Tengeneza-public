import type { Metadata } from "next";
import Link from "next/link";
import Founder from "@/components/Founder";
import LegalContact from "@/components/LegalContact";

export const metadata: Metadata = {
  title: "À propos de nous",
  description: "Pourquoi Tengeneza existe, comment nous travaillons et les valeurs qui guident le projet.",
};

const T = ({ fr, en }: { fr: React.ReactNode; en: React.ReactNode }) => (
  <><span className="fr">{fr}</span><span className="en">{en}</span></>
);

const icons = {
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>,
  people: <><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.2a3.2 3.2 0 010 5.6M18 14.4c1.8.8 3 2.6 3 5.6"/></>,
};

const values = [
  { icon: icons.eye, fr: ["Des données utiles", "Un nid-de-poule bien localisé, photographié et noté vaut mieux qu'un long rapport. Nous donnons aux équipes de quoi agir vite."], en: ["Useful data", "A pothole that is located, photographed and scored beats a long report. We give crews what they need to act fast."] },
  { icon: icons.shield, fr: ["La vie privée d'abord", "Visages et plaques floutés sur le téléphone, le strict nécessaire collecté, et un compte que l'on supprime soi-même."], en: ["Privacy first", "Faces and plates blurred on the phone, only what is needed collected, and an account you can delete yourself."] },
  { icon: icons.people, fr: ["Construit avec les citoyens", "Chaque habitant qui signale une route abîmée rend la ville plus sûre pour tous. Les villes et les citoyens avancent ensemble."], en: ["Built with citizens", "Every resident who reports a damaged road makes the city safer for everyone. Cities and citizens move together."] },
];

export default function About() {
  return (
    <main id="main">
      <section className="band gutter" aria-labelledby="ab-h">
        <div className="wrap">
          <div className="head rv">
            <span className="kicker"><T fr="À propos de nous" en="About us" /></span>
            <h2 id="ab-h"><T fr="Des routes plus sûres, un nid-de-poule à la fois" en="Safer roads, one pothole at a time" /></h2>
            <p className="lede"><T
              fr="« Tengeneza » signifie « réparer » en swahili. C'est exactement ce que nous voulons faire : aider les villes à voir leurs nids-de-poule à temps, pour les réparer avant qu'ils ne causent des accidents."
              en="“Tengeneza” means “to repair” in Swahili. That is exactly what we want to do: help cities see their potholes in time, and fix them before they cause accidents." /></p>
          </div>

          <div className="about-split rv">
            <div className="stack" style={{ gap: "16px" }}>
              <h3><T fr="Notre mission" en="Our mission" /></h3>
              <p><T
                fr="Transformer chaque téléphone en détecteur de nids-de-poule. L'intelligence artificielle repère le défaut, donne un score de gravité de 1 à 5, et l'envoie avec sa position GPS à un tableau de bord municipal."
                en="Turn every phone into a pothole detector. Artificial intelligence spots the defect, gives it a severity score from 1 to 5, and sends it with its GPS position to a municipal dashboard." /></p>
            </div>
            <div className="stack" style={{ gap: "16px" }}>
              <h3><T fr="Pourquoi c'est nécessaire" en="Why it matters" /></h3>
              <p><T
                fr="Les villes découvrent souvent les nids-de-poule trop tard, quand ils ont déjà abîmé des véhicules ou blessé des usagers. Avec des signalements précis et continus, les équipes réparent d'abord ce qui est dangereux."
                en="Cities often learn about potholes too late, after they have damaged vehicles or hurt road users. With precise, continuous reports, crews fix the dangerous ones first." /></p>
            </div>
            <div className="stack" style={{ gap: "16px" }}>
              <h3><T fr="Notre approche" en="Our approach" /></h3>
              <p><T
                fr="D'abord une application citoyenne, qui marche même sans réseau. Ensuite, des caméras en bord de route pour couvrir les axes principaux jour et nuit, sur le même système."
                en="First a citizen app that works even offline. Then roadside cameras to cover the main roads day and night, on the same system." /></p>
              <p><Link href="/feuille-de-route" className="about-link"><T fr="Voir la feuille de route →" en="See the roadmap →" /></Link></p>
            </div>
          </div>
        </div>
      </section>

      <Founder />

      <section className="band gutter" style={{ paddingTop: 0 }} aria-labelledby="val-h">
        <div className="wrap">
          <div className="head rv">
            <span className="kicker"><T fr="Nos valeurs" en="Our values" /></span>
            <h2 id="val-h"><T fr="Ce qui guide le projet" en="What guides the project" /></h2>
          </div>
          <div className="priv rv">
            {values.map((v, i) => (
              <div className="card" key={i}>
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{v.icon}</svg></div>
                <h3><T fr={v.fr[0]} en={v.en[0]} /></h3>
                <p><T fr={v.fr[1]} en={v.en[1]} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band gutter" style={{ paddingTop: 0 }} aria-labelledby="ct-h">
        <div className="wrap about-contact rv">
          <div className="stack" style={{ gap: "14px" }}>
            <h3 id="ct-h"><T fr="Parlons-en" en="Let's talk" /></h3>
            <p><T fr="Municipalité, citoyen, partenaire ou journaliste : écrivez-nous, nous répondons volontiers." en="Municipality, citizen, partner or journalist: get in touch, we are glad to answer." /></p>
            <Link className="btn primary" href="/pilote" style={{ justifySelf: "start" }}><T fr="Devenir ville pilote" en="Become a pilot city" /></Link>
          </div>
          <LegalContact />
        </div>
      </section>
    </main>
  );
}
