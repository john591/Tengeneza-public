import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/stores";

function Badge({ href, store }: { href: string; store: "apple" | "google" }) {
  const apple = store === "apple";
  const inner = (
    <>
      {apple ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12.15 6.9c-.95 0-2.42-1.08-3.96-1.04-2.04.03-3.91 1.18-4.96 3.01-2.12 3.68-.55 9.1 1.52 12.09 1.01 1.45 2.21 3.09 3.79 3.04 1.52-.07 2.09-.99 3.94-.99 1.83 0 2.35.99 3.96.95 1.64-.03 2.68-1.48 3.68-2.95 1.16-1.69 1.64-3.33 1.66-3.42-.04-.01-3.18-1.22-3.22-4.86-.03-3.04 2.48-4.49 2.6-4.56-1.43-2.09-3.62-2.32-4.39-2.38-2-.16-3.68 1.09-4.61 1.09zM15.53 3.83c.84-1.01 1.4-2.43 1.25-3.83-1.21.05-2.66.8-3.53 1.82-.78.9-1.45 2.34-1.27 3.71 1.34.1 2.72-.69 3.55-1.7z"/></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#00a0ff" d="M3 2.3 13.2 12 3 21.7z"/>
          <path fill="#00e077" d="M3 2.3 16.4 8.8 13.2 12z"/>
          <path fill="#ff3a44" d="M3 21.7 16.4 15.2 13.2 12z"/>
          <path fill="#ffd500" d="M16.4 8.8 20.6 10.9v2.2l-4.2 2.1L13.2 12z"/>
        </svg>
      )}
      <span className="store-txt">
        <small>{apple ? <><span className="fr">Télécharger dans</span><span className="en">Download on the</span></> : <><span className="fr">DISPONIBLE SUR</span><span className="en">GET IT ON</span></>}</small>
        <b>{apple ? "App Store" : "Google Play"}</b>
      </span>
    </>
  );
  const label = apple ? "App Store" : "Google Play";
  return href ? (
    <a className="store" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{inner}</a>
  ) : (
    <span className="store soon" role="img" aria-label={`${label} (bientôt / soon)`}>
      {inner}
      <i className="soon-tag"><span className="fr">Bientôt</span><span className="en">Soon</span></i>
    </span>
  );
}

const steps = [
  { fr: ["Installez l'application", "Téléchargez Tengeneza gratuitement sur l'App Store (iPhone) ou sur Google Play (Android)."], en: ["Install the app", "Download Tengeneza for free from the App Store (iPhone) or Google Play (Android)."] },
  { fr: ["Autorisez la caméra et la position", "Elles servent à détecter le nid-de-poule et à le placer sur la carte. Les visages et plaques sont floutés."], en: ["Allow camera and location", "They detect the pothole and place it on the map. Faces and plates are blurred."] },
  { fr: ["Choisissez un mode et roulez", "Signalez à la main ou laissez le téléphone détecter pendant vos trajets, même sans réseau."], en: ["Pick a mode and go", "Report by hand or let the phone detect during your trips, even offline."] },
];

export default function Download() {
  return (
    <section className="band gutter dl-band" id="telecharger" aria-labelledby="dl-h">
      <div className="wrap dl">
        <div className="stack rv" style={{ gap: "22px" }}>
          <span className="kicker"><span className="fr">Application mobile</span><span className="en">Mobile app</span></span>
          <h2 id="dl-h"><span className="fr">Téléchargez Tengeneza sur votre téléphone</span><span className="en">Get Tengeneza on your phone</span></h2>
          <p className="lede"><span className="fr">Gratuite pour les citoyens, disponible sur iPhone et Android. Trois étapes et vous signalez votre premier nid-de-poule.</span><span className="en">Free for citizens, on iPhone and Android. Three steps and you report your first pothole.</span></p>
          <div className="stores">
            <Badge href={APP_STORE_URL} store="apple" />
            <Badge href={GOOGLE_PLAY_URL} store="google" />
          </div>
          {!APP_STORE_URL && !GOOGLE_PLAY_URL && (
            <p className="dl-note"><span className="fr">L'application arrive bientôt sur les deux boutiques.</span><span className="en">The app is coming soon to both stores.</span></p>
          )}
        </div>
        <ol className="dl-steps rv">
          {steps.map((s, i) => (
            <li key={i}>
              <span className="dl-n">{i + 1}</span>
              <div>
                <h3><span className="fr">{s.fr[0]}</span><span className="en">{s.en[0]}</span></h3>
                <p><span className="fr">{s.fr[1]}</span><span className="en">{s.en[1]}</span></p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
