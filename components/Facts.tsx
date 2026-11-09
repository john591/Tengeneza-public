export default function Facts() {
  return (
    <section className="gutter" aria-label="Chiffres clés">
      <div className="wrap facts">
        <div><b><span className="fr">Hors ligne</span><span className="en">Offline</span></b><span><span className="fr">La détection tourne sur le téléphone, même avec un réseau faible</span><span className="en">Detection runs on the phone, even with weak signal</span></span></div>
        <div><b>1 – 5</b><span><span className="fr">Score de gravité sur chaque signalement, vérifié dans le cloud</span><span className="en">Severity score on every report, checked in the cloud</span></span></div>
        <div><b>10 m</b><span><span className="fr">Les signalements proches fusionnent en un seul nid-de-poule</span><span className="en">Nearby reports merge into one pothole record</span></span></div>
        <div><b><span className="fr">2 phases</span><span className="en">2 phases</span></b><span><span className="fr">L'application citoyenne, puis des caméras en bord de route</span><span className="en">The citizen app, then roadside cameras</span></span></div>
      </div>
    </section>
  );
}
