export default function HowItWorks() {
  return (
    <section className="band gutter" id="comment" aria-labelledby="how-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Comment ça marche</span><span className="en">How it works</span></span>
          <h2 id="how-h"><span className="fr">De la route à l'équipe de réparation</span><span className="en">From the road to the repair crew</span></h2>
          <p className="lede"><span className="fr">Chaque signalement suit le même trajet, automatiquement, jusqu'à ce qu'une personne doive décider.</span><span className="en">Every report follows the same path automatically, until a person needs to decide something.</span></p>
        </div>
        <div className="journey rv">
          <div className="journey-road" aria-hidden="true"></div>
          <ol className="stops">
            <li><span className="pin" aria-hidden="true"></span><span className="n">01</span><h3><span className="fr">Détecter</span><span className="en">Detect</span></h3><p><span className="fr">La caméra repère le trou, l'accéléromètre confirme le choc 1 à 3 s plus tard.</span><span className="en">The camera spots the hole and the accelerometer confirms the jolt 1 to 3 s later.</span></p></li>
            <li><span className="pin" aria-hidden="true"></span><span className="n">02</span><h3><span className="fr">Signaler</span><span className="en">Report</span></h3><p><span className="fr">Photo, GPS, heure et gravité partent au serveur. Visages et plaques sont floutés avant l'envoi.</span><span className="en">Photo, GPS, time and severity go to the server. Faces and plates are blurred first.</span></p></li>
            <li><span className="pin" aria-hidden="true"></span><span className="n">03</span><h3><span className="fr">Valider</span><span className="en">Validate</span></h3><p><span className="fr">Un modèle plus grand dans le cloud vérifie la photo, contoure le dégât et fixe la note finale.</span><span className="en">A larger cloud model checks the photo, outlines the damage and sets the final score.</span></p></li>
            <li><span className="pin" aria-hidden="true"></span><span className="n">04</span><h3><span className="fr">Regrouper</span><span className="en">Cluster</span></h3><p><span className="fr">Les signalements à moins de 10 m forment un seul nid-de-poule. Plus de signalements, plus de priorité.</span><span className="en">Reports within 10 m become one pothole. More reports mean higher priority.</span></p></li>
            <li><span className="pin" aria-hidden="true"></span><span className="n">05</span><h3><span className="fr">Réparer</span><span className="en">Dispatch</span></h3><p><span className="fr">Le tableau de bord classe le travail, les chefs assignent les équipes, le citoyen est prévenu.</span><span className="en">The dashboard ranks the work, supervisors assign crews and the citizen hears back.</span></p></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
