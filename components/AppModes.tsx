export default function AppModes() {
  return (
    <section className="band gutter" id="app" aria-labelledby="app-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Phase 1 · Application citoyenne</span><span className="en">Phase 1 · Citizen app</span></span>
          <h2 id="app-h"><span className="fr">Trois façons de signaler</span><span className="en">Three ways to report</span></h2>
          <p className="lede"><span className="fr">Une application mobile React Native pour la détection en direct, et une version web légère pour signaler une photo depuis n'importe quel navigateur.</span><span className="en">A React Native mobile app for live detection, plus a lightweight web app for photo reports from any browser.</span></p>
        </div>
        <div className="modes rv">
          <article className="card feature">
            <span className="tag"><span className="fr">Le plus complet</span><span className="en">Most complete</span></span>
            <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 17h14l-1.5-6.5A2 2 0 0 0 15.6 9H8.4a2 2 0 0 0-1.9 1.5L5 17Z"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/></svg></div>
            <h3><span className="fr">Mode conduite</span><span className="en">Driving mode</span></h3>
            <p><span className="fr">Le téléphone sur le tableau de bord, la caméra surveille la route. Les signalements partent tout seuls, sans toucher l'écran.</span><span className="en">Phone on the dashboard, camera on the road. Reports go out on their own, hands-free.</span></p>
            <div className="chips"><span className="chip">camera</span><span className="chip">accéléromètre</span><span className="chip">gyroscope</span><span className="chip">GPS</span></div>
          </article>
          <article className="card">
            <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h3l2-6 4 12 2-6h7"/></svg></div>
            <h3><span className="fr">Mode passif</span><span className="en">Passive mode</span></h3>
            <p><span className="fr">Le téléphone dans la poche ou le porte-gobelet. Sans caméra : les capteurs sentent les chocs et marquent l'endroit sur la carte.</span><span className="en">Phone in a pocket or cup holder. No camera: the sensors feel the jolts and mark the spot on the map.</span></p>
            <div className="chips"><span className="chip">accéléromètre</span><span className="chip">GPS</span></div>
          </article>
          <article className="card">
            <div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg></div>
            <h3><span className="fr">Signalement manuel</span><span className="en">Manual report</span></h3>
            <p><span className="fr">À pied devant un trou ? Une photo, on confirme le point sur la carte, on envoie. Depuis l'application ou le navigateur.</span><span className="en">Walking past a hole? Take a photo, confirm the pin, send. From the app or the browser.</span></p>
            <div className="chips"><span className="chip">photo</span><span className="chip">GPS</span></div>
          </article>
        </div>
      </div>
    </section>
  );
}
