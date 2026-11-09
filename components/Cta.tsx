export default function Cta() {
  return (
    <section className="cta gutter" id="pilote" aria-labelledby="cta-h">
      <div className="wrap cta-box rv">
        <svg className="bigT" viewBox="0 0 192 204" aria-hidden="true"><path d="M0 12 a12 12 0 0 1 12 -12 h168 a12 12 0 0 1 12 12 v40 h-192 z M60 52 h68 v152 h-68 z" fill="#fff"/></svg>
        <div className="stack" style={{ gap: '20px' }}>
          <span className="kicker"><span className="fr">Travaillons ensemble</span><span className="en">Work with us</span></span>
          <h2 id="cta-h"><span className="fr">Amenez Tengeneza dans votre ville</span><span className="en">Bring Tengeneza to your city</span></h2>
          <p className="lede" style={{ color: 'inherit', opacity: '.9' }}><span className="fr">Nous cherchons des partenaires pour le premier quartier pilote.</span><span className="en">We are looking for partners for the first district pilot.</span></p>
        </div>
        <div className="asks">
          <div className="ask"><b><span className="fr">Municipalités</span><span className="en">Municipalities</span></b><p><span className="fr">Accueillez le pilote et ouvrez le tableau de bord à vos équipes.</span><span className="en">Host the pilot and give your crews the dashboard.</span></p></div>
          <div className="ask"><b><span className="fr">Citoyens</span><span className="en">Citizens</span></b><p><span className="fr">Testez l'application sur vos trajets et aidez à construire les données locales.</span><span className="en">Test the app on your routes and help build the local dataset.</span></p></div>
          <div className="ask"><b><span className="fr">Partenaires</span><span className="en">Partners</span></b><p><span className="fr">Financez le pilote, fournissez du matériel ou soutenez la phase 2.</span><span className="en">Fund the pilot, provide hardware or support Phase 2.</span></p></div>
        </div>
      </div>
    </section>
  );
}
