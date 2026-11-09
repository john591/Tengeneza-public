export default function Architecture() {
  return (
    <section className="band gutter" id="systeme" aria-labelledby="sys-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Architecture</span><span className="en">Architecture</span></span>
          <h2 id="sys-h"><span className="fr">Un seul système pour les téléphones et les caméras</span><span className="en">One system for phones and roadside cameras</span></h2>
          <p className="lede"><span className="fr">Les signalements des deux phases arrivent dans la même file, la même base géographique et le même tableau de bord.</span><span className="en">Reports from both phases land in the same queue, the same geospatial database and the same dashboard.</span></p>
        </div>
        <div className="diagram rv">
          <svg viewBox="0 0 960 360" role="img" aria-label="Architecture : application et bornes vers API et file de messages ; validation IA et base PostGIS alimentent le tableau de bord, les notifications et l'export SIG.">
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z"/></marker>
              <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z"/></marker>
            </defs>
            <rect className="n g" x="10" y="40" width="190" height="82" rx="14"/>
            <text className="t" x="26" y="70">Citizen app</text><text x="26" y="92">React Native + web</text><text x="26" y="109">YOLOv8n on device</text>
            <rect className="n" x="10" y="230" width="190" height="82" rx="14"/>
            <text className="t" x="26" y="260">Roadside units</text><text x="26" y="282">Jetson + TensorRT</text><text x="26" y="299">Phase 2 · MQTT</text>
            <rect className="n a" x="260" y="132" width="180" height="96" rx="14"/>
            <text className="t on-a" x="278" y="164">API + queue</text><text className="on-a-m" x="278" y="188">FastAPI</text><text className="on-a-m" x="278" y="206">RabbitMQ · Redis</text>
            <rect className="n" x="500" y="22" width="200" height="82" rx="14"/>
            <text className="t" x="518" y="52">AI validation</text><text x="518" y="74">YOLOv8-seg · GPU</text><text x="518" y="91">severity 1–5</text>
            <rect className="n g" x="500" y="138" width="200" height="84" rx="14"/>
            <text className="t" x="518" y="168">Database</text><text x="518" y="190">PostgreSQL 16 + PostGIS</text><text x="518" y="207">photos in object storage</text>
            <rect className="n" x="500" y="256" width="200" height="82" rx="14"/>
            <text className="t" x="518" y="286">Notifications</text><text x="518" y="308">push · email · SMS · live</text>
            <rect className="n g" x="756" y="80" width="194" height="82" rx="14"/>
            <text className="t" x="772" y="110">City dashboard</text><text x="772" y="132">MapLibre map + stats</text><text x="772" y="149">crew assignment</text>
            <rect className="n" x="756" y="212" width="194" height="70" rx="14"/>
            <text className="t" x="772" y="242">GIS export</text><text x="772" y="264">city mapping tools</text>
            <path className="e" d="M200 81 C 232 81, 232 160, 258 160"/>
            <path className="e d" d="M200 271 C 232 271, 232 200, 258 200"/>
            <path className="e" d="M440 158 C 470 158, 470 63, 498 63"/>
            <path className="e" d="M440 180 L 498 180"/>
            <path className="e" d="M600 104 L 600 136"/>
            <path className="e" d="M440 202 C 470 202, 470 297, 498 297"/>
            <path className="e" d="M700 170 C 728 170, 728 121, 754 121"/>
            <path className="e" d="M700 190 C 728 190, 728 247, 754 247"/>
            <path className="e" d="M600 222 L 600 254"/>
            <text x="610" y="243">status change</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
