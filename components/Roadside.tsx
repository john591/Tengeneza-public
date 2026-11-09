export default function Roadside() {
  return (
    <section className="band gutter p2" id="bornes" aria-labelledby="p2-h">
      <div className="wrap p2-grid">
        <div className="stack" style={{ gap: '22px' }}>
          <span className="kicker"><span className="fr">Phase 2 · Bornes en bord de route</span><span className="en">Phase 2 · Roadside units</span></span>
          <h2 id="p2-h"><span className="fr">Des caméras qui veillent sur la route jour et nuit</span><span className="en">Cameras that watch the road day and night</span></h2>
          <p className="lede"><span className="fr">Une fois le modèle et le circuit éprouvés par l'application, Tengeneza s'installe sur l'infrastructure : des caméras sur les poteaux, chacune avec son propre ordinateur embarqué.</span><span className="en">Once the app has proven the model and the workflow, Tengeneza moves onto the infrastructure: cameras on road posts, each with its own edge computer.</span></p>
          <ul>
            <li><span className="k">01</span><div><b><span className="fr">Nvidia Jetson sur chaque poteau</span><span className="en">Nvidia Jetson on every post</span></b><p><span className="fr">Le modèle tourne sur place avec TensorRT : seules les détections quittent la borne, jamais la vidéo.</span><span className="en">The model runs on site with TensorRT: only detections leave the unit, never video.</span></p></div></li>
            <li><span className="k">02</span><div><b><span className="fr">Le même circuit</span><span className="en">The same pipeline</span></b><p><span className="fr">Les bornes publient via MQTT dans la même file que l'application. Le tableau de bord ne fait pas la différence.</span><span className="en">Units publish over MQTT into the same queue as the app. The dashboard treats them the same.</span></p></div></li>
            <li><span className="k">03</span><div><b><span className="fr">Aucun effort des citoyens</span><span className="en">No citizen effort</span></b><p><span className="fr">Les grands axes sont couverts en continu, l'application couvre tout le reste.</span><span className="en">Main roads are covered continuously, the app covers everything else.</span></p></div></li>
          </ul>
        </div>
        <svg viewBox="0 0 420 380" role="img" aria-label="Borne : caméra et ordinateur Jetson sur un poteau, au-dessus de la voie">
          <rect x="0" y="280" width="420" height="100" rx="0" fill="#3a3f3c"/>
          <g fill="#f2f4f1" opacity=".85"><rect x="10" y="326" width="56" height="6" rx="3"/><rect x="106" y="326" width="56" height="6" rx="3"/><rect x="202" y="326" width="56" height="6" rx="3"/><rect x="298" y="326" width="56" height="6" rx="3"/><rect x="394" y="326" width="56" height="6" rx="3"/></g>
          <polygon points="138,74 380,350 190,350" fill="#facb3a" opacity=".1"/>
          <ellipse cx="270" cy="352" rx="38" ry="9" fill="#111413"/>
          <rect x="250" y="336" width="74" height="30" rx="5" fill="none" stroke="#facb3a" strokeWidth="2.5"/>
          <rect x="250" y="314" width="66" height="20" rx="4" fill="#facb3a"/>
          <text x="257" y="328" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#2a2100">S3 · 0.88</text>
          <rect x="72" y="30" width="12" height="256" rx="3" fill="#7d8681"/>
          <rect x="78" y="44" width="70" height="10" rx="3" fill="#7d8681"/>
          <rect x="112" y="54" width="48" height="26" rx="6" fill="#e8ece9"/>
          <circle cx="156" cy="67" r="8" fill="#111413"/><circle cx="156" cy="67" r="3" fill="#22c065"/>
          <rect x="40" y="150" width="76" height="70" rx="10" fill="#1d2120"/>
          <text x="52" y="178" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#fff">JETSON</text>
          <text x="52" y="198" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#dcf2e4">MQTT ↑</text>
          <circle cx="104" cy="208" r="4" fill="#facb3a"/>
          <path d="M118 120 q20 -20 40 0 M126 128 q12 -12 24 0" stroke="#22c065" strokeWidth="2.5" fill="none" strokeLinecap="round" transform="translate(-40 0)"/>
        </svg>
      </div>
    </section>
  );
}
