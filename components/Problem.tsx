import ProblemMap from "@/components/ProblemMap";

export default function Problem() {
  return (
    <section className="band gutter problem-sec" aria-labelledby="pb-h">
      <ProblemMap />
      <div className="pveil" aria-hidden="true" />
      <div className="wrap problem rv">
        <div className="stack">
          <span className="kicker"><span className="fr">Le problème</span><span className="en">The problem</span></span>
          <h2 id="pb-h"><span className="fr">Les villes découvrent les nids‑de‑poule trop tard.</span><span className="en">Cities learn about potholes too late.</span></h2>
        </div>
        <div className="stack pcard">
          <p className="big"><span className="fr">Un nid‑de‑poule est signalé <mark>après qu'il a cassé un essieu</mark>, quand il est signalé.</span><span className="en">A pothole gets reported <mark>after it breaks an axle</mark>, if it gets reported at all.</span></p>
          <p><span className="fr">Les inspections sont lentes et manuelles. Les plaintes arrivent par téléphone ou sur les réseaux sociaux, sans position exacte, sans photo, sans distinguer une fissure d'un cratère. Les pires dégâts attendent dans la même file que les petits.</span><span className="en">Inspections are slow and manual. Complaints arrive by phone or social media with no exact location, no photo and no way to tell a crack from a crater. The worst damage waits in the same queue as the minor kind.</span></p>
          <div className="before-after">
            <div className="ba old"><b><span className="fr">Aujourd'hui</span><span className="en">Today</span></b><span className="fr">Appels vagues, inspections à pied, réparations au hasard.</span><span className="en">Vague calls, inspections on foot, repairs in no clear order.</span></div>
            <div className="ba new"><b>Tengeneza</b><span className="fr">Une carte en direct, classée par danger, mise à jour par les usagers.</span><span className="en">A live map ranked by danger, updated by road users.</span></div>
          </div>
        </div>
      </div>
      <ul className="plegend wrap" aria-label="Légende / Legend">
        <li><i style={{ background: "#03a14a" }} /><span className="fr">Gravité 1–2</span><span className="en">Severity 1–2</span></li>
        <li><i style={{ background: "#facb3a" }} /><span className="fr">Gravité 3</span><span className="en">Severity 3</span></li>
        <li><i style={{ background: "#e0482c" }} /><span className="fr">Gravité 4–5</span><span className="en">Severity 4–5</span></li>
      </ul>
    </section>
  );
}
