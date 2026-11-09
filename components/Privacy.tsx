export default function Privacy() {
  return (
    <section className="band gutter" id="vie-privee" aria-labelledby="priv-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Vie privée</span><span className="en">Privacy</span></span>
          <h2 id="priv-h"><span className="fr">Des photos de routes, pas de personnes</span><span className="en">Photos of roads, not people</span></h2>
        </div>
        <div className="priv rv">
          <div className="card"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13"/></svg></div><h3><span className="fr">Flouté sur le téléphone</span><span className="en">Blurred on the phone</span></h3><p><span className="fr">Visages et plaques sont floutés sur l'appareil, avant tout envoi.</span><span className="en">Faces and plates are blurred on the device before anything is sent.</span></p></div>
          <div className="card"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg></div><h3><span className="fr">Le strict nécessaire</span><span className="en">Only what's needed</span></h3><p><span className="fr">Photo, position, heure et note. Les bornes envoient des détections, pas de flux vidéo.</span><span className="en">Photo, position, time and score. Roadside units send detections, not video.</span></p></div>
          <div className="card"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg></div><h3><span className="fr">Vous choisissez</span><span className="en">You choose</span></h3><p><span className="fr">Chaque citoyen choisit quelles notifications il reçoit, et par quel canal.</span><span className="en">Citizens choose which notifications they get, and on which channel.</span></p></div>
        </div>
      </div>
    </section>
  );
}
