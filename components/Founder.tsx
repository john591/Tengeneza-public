import Image from "next/image";

const LINKEDIN = "https://www.linkedin.com/in/john-ntambwe-kalume-854903128";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3zM9.75 9.75h3.83v1.54h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4z"/></svg>
);

const cofounder = {
  name: "Peter T. Pinda",
  linkedin: "https://www.linkedin.com/in/peter-t-pinda-6940a791/",
};

const T = ({ fr, en }: { fr: React.ReactNode; en: React.ReactNode }) => (
  <><span className="fr">{fr}</span><span className="en">{en}</span></>
);

export default function Founder() {
  return (
    <section className="band gutter" style={{ paddingTop: 0 }} aria-labelledby="fd-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><T fr="Le fondateur" en="The founder" /></span>
          <h2 id="fd-h"><T fr="La vision derrière Tengeneza" en="The vision behind Tengeneza" /></h2>
        </div>

        <div className="founder rv">
          <div className="fd-photo">
            <Image src="/team/john-ntambwe-kalume.jpg" alt="John Ntambwe Kalume, fondateur et CEO de Tengeneza" width={600} height={600} sizes="(max-width: 820px) 80vw, 380px" />
          </div>

          <div className="fd-text">
            <h3 className="fd-name">John NTAMBWE KALUME</h3>
            <p className="fd-role"><T fr="Fondateur et CEO" en="Founder & CEO" /></p>

            <p><T
              fr="Titulaire d'une maîtrise en informatique de gestion de la Haute École de Commerce de Kinshasa, John est développeur web et mobile et analyste de données."
              en="Holding a master's degree in management information systems from the Haute École de Commerce de Kinshasa, John is a web and mobile developer and data analyst." /></p>
            <p><T
              fr="Il a créé Tengeneza à partir d'une observation simple, faite chaque jour : l'état de nos routes, de leur dégradation jusqu'à leur réparation. Son idée : mettre à la disposition de nos autorités un système capable de leur fournir des données en temps réel, afin de prendre des décisions."
              en="He created Tengeneza from a simple observation made every day: the state of our roads, from their deterioration to their repair. His idea: give our authorities a system that provides real-time data, so they can make decisions." /></p>

            <blockquote className="fd-quote">
              <p><T
                fr="« Je crois que la technologie ne doit pas seulement servir à simplifier nos vies, elle doit aussi nous aider à résoudre les problèmes que nous rencontrons chaque jour. Avec Tengeneza, ma vision est de transformer chaque citoyen en acteur du changement, en donnant à chacun la possibilité de signaler les dégradations routières et de contribuer à rendre nos routes plus sûres. Je veux démontrer que les solutions aux défis de la RDC peuvent aussi naître de l'innovation locale, de notre créativité et de notre volonté de construire un avenir meilleur. »"
                en="“I believe technology should not only simplify our lives, it should also help us solve the problems we face every day. With Tengeneza, my vision is to turn every citizen into an agent of change, by giving everyone the ability to report road damage and help make our roads safer. I want to show that solutions to the DRC's challenges can also be born from local innovation, our creativity and our will to build a better future.”" /></p>
              <footer>— John Ntambwe Kalume</footer>
            </blockquote>

            <a className="btn ghost fd-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="founder second rv">
          <div className="fd-photo">
            <Image src="/team/peter-t-pinda.jpg" alt="Peter T. Pinda, co-fondateur et CTO de Tengeneza" width={736} height={736} sizes="(max-width: 820px) 70vw, 300px" />
          </div>

          <div className="fd-text">
            <h3 className="fd-name">{cofounder.name}</h3>
            <p className="fd-role"><T fr="Co-fondateur et CTO" en="Co-founder & CTO" /></p>

            <p><T
              fr="Professionnel de l'informatique spécialisé dans les réseaux, les infrastructures et la sécurité. Peter a étudié à la Northern Kentucky University (2010–2014)."
              en="IT professional specialized in networking, infrastructure and security. Peter studied at Northern Kentucky University (2010–2014)." /></p>
            <p><T
              fr="Au sein de Tengeneza, Peter est responsable du département de cybersécurité : protéger les données des utilisateurs et la fiabilité de la plateforme."
              en="At Tengeneza, Peter is in charge of the cybersecurity department: protecting user data and the reliability of the platform." /></p>

            <blockquote className="fd-quote">
              <p><T
                fr="« La technologie prend tout son sens lorsqu'elle répond à un besoin réel. Avec Tengeneza, nous avons l'opportunité de mettre l'innovation, les infrastructures numériques et l'intelligence collective au service d'un défi quotidien : améliorer l'état de nos routes et contribuer à la sécurité de nos communautés. »"
                en="“Technology makes the most sense when it meets a real need. With Tengeneza, we have the opportunity to put innovation, digital infrastructure and collective intelligence to work on an everyday challenge: improving the state of our roads and contributing to the safety of our communities.”" /></p>
              <footer>— Peter T. Pinda</footer>
            </blockquote>

            <ul className="chips fd-certs" aria-label="Certifications">
              <li className="chip">Cisco CCNA · 2018</li>
              <li className="chip">Palo Alto Networks PCNSA · 2023</li>
              <li className="chip">Cisco CCNP Enterprise · 2024</li>
            </ul>

            <a className="btn ghost fd-link" href={cofounder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${cofounder.name}`}>
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
