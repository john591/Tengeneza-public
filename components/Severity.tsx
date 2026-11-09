export default function Severity() {
  return (
    <section className="band gutter sev-band" id="gravite" aria-labelledby="sev-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Échelle de gravité</span><span className="en">Severity scale</span></span>
          <h2 id="sev-h"><span className="fr">Réparer d'abord ce qui est dangereux</span><span className="en">Fix the dangerous ones first</span></h2>
          <p className="lede"><span className="fr">Chaque nid-de-poule reçoit une note de 1 à 5, estimée sur le téléphone puis confirmée par le modèle du cloud. La note fixe sa place dans la file et qui est alerté.</span><span className="en">Every pothole gets a score from 1 to 5, estimated on the phone and confirmed in the cloud. The score sets its place in the queue and who gets alerted.</span></p>
        </div>
        <div className="scale rv">
          <article className="lvl" data-l="1"><div className="num"><b>1</b><span><span className="fr">Faible</span><span className="en">Low</span></span></div>
            <svg viewBox="0 0 200 64" aria-hidden="true"><rect width="200" height="64" fill="#3b4441"/><path d="M60 30 l20 4 l14 -6 l22 8 l18 -3" stroke="#1a1f1d" strokeWidth="2" fill="none"/></svg>
            <h3><span className="fr">Fissures en surface</span><span className="en">Surface cracks</span></h3><p><span className="fr">Usure légère, à surveiller.</span><span className="en">Light wear, watch it.</span></p><div className="act"><span className="fr">surveiller</span><span className="en">monitor</span></div></article>
          <article className="lvl" data-l="2"><div className="num"><b>2</b><span><span className="fr">Modéré</span><span className="en">Moderate</span></span></div>
            <svg viewBox="0 0 200 64" aria-hidden="true"><rect width="200" height="64" fill="#3b4441"/><ellipse cx="100" cy="34" rx="18" ry="7" fill="#1d2321"/></svg>
            <h3><span className="fr">Petit trou peu profond</span><span className="en">Small, shallow hole</span></h3><p><span className="fr">Inconfort, usure des pneus.</span><span className="en">Discomfort, tyre wear.</span></p><div className="act"><span className="fr">planning normal</span><span className="en">routine schedule</span></div></article>
          <article className="lvl" data-l="3"><div className="num"><b>3</b><span><span className="fr">Notable</span><span className="en">Notable</span></span></div>
            <svg viewBox="0 0 200 64" aria-hidden="true"><rect width="200" height="64" fill="#3b4441"/><ellipse cx="100" cy="34" rx="34" ry="11" fill="#151918"/></svg>
            <h3><span className="fr">Les conducteurs l'évitent</span><span className="en">Drivers swerve</span></h3><p><span className="fr">Pneus et jantes abîmés.</span><span className="en">Tyre and rim damage.</span></p><div className="act"><span className="fr">prochaine tournée</span><span className="en">next crew cycle</span></div></article>
          <article className="lvl" data-l="4"><div className="num"><b>4</b><span><span className="fr">Grave</span><span className="en">Serious</span></span></div>
            <svg viewBox="0 0 200 64" aria-hidden="true"><rect width="200" height="64" fill="#3b4441"/><ellipse cx="100" cy="34" rx="56" ry="17" fill="#0d100f"/><path d="M40 30 l-12 -4 M160 38 l14 3" stroke="#1a1f1d" strokeWidth="2"/></svg>
            <h3><span className="fr">Profond, bords cassés</span><span className="en">Deep, broken edges</span></h3><p><span className="fr">Suspensions, chutes de motos.</span><span className="en">Suspension damage, motorbike falls.</span></p><div className="act"><span className="fr">prioritaire + SMS au chef</span><span className="en">priority + supervisor SMS</span></div></article>
          <article className="lvl" data-l="5"><div className="num"><b>5</b><span><span className="fr">Critique</span><span className="en">Critical</span></span></div>
            <svg viewBox="0 0 200 64" aria-hidden="true"><rect width="200" height="64" fill="#3b4441"/><path d="M10 26 C40 10, 80 18, 110 14 S180 20, 194 34 C170 54, 120 56, 80 52 S20 48, 10 26Z" fill="#090b0a"/></svg>
            <h3><span className="fr">Route effondrée</span><span className="en">Road failure</span></h3><p><span className="fr">Risque d'accident.</span><span className="en">Crash risk.</span></p><div className="act"><span className="fr">urgent + alerter les usagers</span><span className="en">urgent + warn road users</span></div></article>
        </div>
      </div>
    </section>
  );
}
