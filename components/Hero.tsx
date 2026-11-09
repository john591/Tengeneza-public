export default function Hero() {
  return (
    <section className="hero gutter" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <span className="kicker"><span className="fr">Ville intelligente · routes</span><span className="en">Smart city · roads</span></span>
          <h1>
            <span className="fr">Chaque nid‑de‑poule <em>signalé.</em> Chaque route réparée.</span>
            <span className="en">Every pothole <em>reported.</em> Every road repaired.</span>
          </h1>
          <p className="lede">
            <span className="fr">Tengeneza transforme chaque téléphone en détecteur de nids-de-poule. L'IA repère les dégâts par la caméra, mesure leur gravité, ajoute la position GPS et envoie tout au tableau de bord de la ville. Les équipes réparent d'abord les routes les plus dangereuses.</span>
            <span className="en">Tengeneza turns every phone into a pothole detector. AI spots damage through the camera, scores its severity, adds the GPS position and sends it to the city's dashboard, so crews fix the most dangerous roads first.</span>
          </p>
          <div className="cta-row">
            <a className="btn primary" href="/fonctionnement"><span className="fr">Voir comment ça marche</span><span className="en">See how it works</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg></a>
            <a className="btn ghost" href="/pilote"><span className="fr">Devenir ville pilote</span><span className="en">Become a pilot city</span></a>
          </div>
          <p className="def"><b>tengeneza</b> <i>/ten·ge·ˈne·za/</i> <span className="fr">swahili : fabriquer, construire, réparer.</span><span className="en">Swahili: to make, to build, to repair.</span></p>
        </div>
    
        <div className="stage">
          <div className="road-v" aria-hidden="true"></div>
          <div className="phone" role="img" aria-label="Écran de l'application : la caméra détecte un nid-de-poule de gravité 4 sur 5">
            <div className="screen">
              <div className="notch"></div>
              <svg viewBox="0 0 280 590" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9fb5ae"/><stop offset="1" stopColor="#cfd8d2"/></linearGradient>
                  <linearGradient id="tar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4c5552"/><stop offset="1" stopColor="#2f3533"/></linearGradient>
                  <radialGradient id="hole" cx=".5" cy=".42" r=".62"><stop offset="0" stopColor="#0b0d0c"/><stop offset=".65" stopColor="#1a1f1d"/><stop offset="1" stopColor="#3d4643"/></radialGradient>
                </defs>
                <rect width="280" height="200" fill="url(#sky)"/>
                <rect y="170" width="280" height="40" fill="#5f8a63"/>
                <polygon points="-60,590 340,590 172,196 108,196" fill="url(#tar)"/>
                <g fill="#f4f2ea" opacity=".92">
                  <polygon points="137,200 143,200 144,222 136,222"/>
                  <polygon points="134,250 146,250 149,296 131,296"/>
                  <polygon points="128,340 152,340 158,420 122,420"/>
                </g>
                <ellipse cx="196" cy="368" rx="50" ry="17" fill="url(#hole)"/>
                <path d="M150 362 l-12 -4 M240 372 l14 3 M186 384 l-5 9" stroke="#252b29" strokeWidth="2"/>
                <rect className="scanline" x="0" y="196" width="280" height="2" fill="#22c065" opacity=".85"/>
                <g className="bbox">
                  <rect x="138" y="342" width="116" height="50" rx="6" fill="none" stroke="#facb3a" strokeWidth="3"/>
                  <rect x="138" y="322" width="102" height="20" rx="5" fill="#facb3a"/>
                  <text x="145" y="336" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#2a2100">pothole 0.91</text>
                </g>
              </svg>
              <div className="hud"><span className="live">LIVE</span><span>GPS ±4 m · 43 km/h</span></div>
              <div className="sheet">
                <div className="row"><b><span className="fr">Nid-de-poule détecté</span><span className="en">Pothole detected</span></b><span className="sev-pill"><span className="fr">Gravité 4/5</span><span className="en">Severity 4/5</span></span></div>
                <small><span className="fr">Choc confirmé 1,8 g · visages et plaques floutés</span><span className="en">Jolt confirmed 1.8 g · faces and plates blurred</span></small>
                <div className="send"><span className="fr">Signalement envoyé ✓</span><span className="en">Report sent ✓</span></div>
              </div>
            </div>
          </div>
          <div className="float f1"><span><span className="dot"></span><span className="fr">Regroupés à 10 m</span><span className="en">Merged within 10 m</span></span><b><span className="fr">3 signalements</span><span className="en">3 reports</span></b></div>
          <div className="float f2"><span className="fr">Modèle sur le téléphone</span><span className="en">Model on the phone</span><b className="mono" style={{ fontFamily: 'var(--display)' }}>YOLOv8n</b></div>
        </div>
      </div>
    </section>
  );
}
