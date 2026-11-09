export default function Notifications() {
  return (
    <section className="band gutter" aria-labelledby="roles-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Notifications</span><span className="en">Notifications</span></span>
          <h2 id="roles-h"><span className="fr">Le bon message à la bonne personne</span><span className="en">The right message to the right person</span></h2>
          <p className="lede"><span className="fr">Chaque changement de statut déclenche des notifications, envoyées en arrière-plan. Chacun choisit ses canaux.</span><span className="en">Every status change triggers notifications, sent in the background. People choose their channels.</span></p>
        </div>
        <div className="roles rv">
          <div className="role">
            <div className="who"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg></span><div><h3><span className="fr">Citoyens</span><span className="en">Citizens</span></h3><span className="ch">push · email</span></div></div>
            <p><span className="fr">La confirmation de leur signalement, puis la nouvelle de la réparation.</span><span className="en">Confirmation of their report, then word of the repair.</span></p>
            <div className="notif"><span className="ap"><svg viewBox="0 0 192 204" aria-hidden="true"><use href="#mark"/></svg></span><div><strong>tengeneza <small><span className="fr">maint.</span><span className="en">now</span></small></strong><span className="fr">Votre nid-de-poule est programmé pour réparation.</span><span className="en">Your pothole is scheduled for repair.</span></div></div>
          </div>
          <div className="role">
            <div className="who"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/></svg></span><div><h3><span className="fr">Équipes de voirie</span><span className="en">Road crews</span></h3><span className="ch">push</span></div></div>
            <p><span className="fr">Les missions avec la position exacte, la photo et la gravité.</span><span className="en">Jobs with exact location, photo and severity.</span></p>
            <div className="notif"><span className="ap"><svg viewBox="0 0 192 204" aria-hidden="true"><use href="#mark"/></svg></span><div><strong>tengeneza <small>2 min</small></strong><span className="fr">Nouvelle mission · gravité 4 · ouvrir la carte</span><span className="en">New job · severity 4 · open map</span></div></div>
          </div>
          <div className="role">
            <div className="who"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/></svg></span><div><h3><span className="fr">Chefs d'équipe</span><span className="en">Supervisors</span></h3><span className="ch">SMS · push</span></div></div>
            <p><span className="fr">Des alertes immédiates pour les gravités 4 et 5.</span><span className="en">Instant alerts for severity 4 and 5.</span></p>
            <div className="notif sms"><span className="ap">SMS</span><div><strong>Tengeneza <small><span className="fr">maint.</span><span className="en">now</span></small></strong><span className="fr">ALERTE gravité 5 confirmée, voie bloquée. Assignez une équipe.</span><span className="en">ALERT severity 5 confirmed, lane blocked. Assign a crew.</span></div></div>
          </div>
          <div className="role">
            <div className="who"><span className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21V10M9 21V4M15 21v-7M21 21V8"/></svg></span><div><h3><span className="fr">Gestionnaires</span><span className="en">City managers</span></h3><span className="ch"><span className="fr">tableau de bord</span><span className="en">live dashboard</span></span></div></div>
            <p><span className="fr">Une carte en direct et les statistiques : signalements ouverts, délais, quartiers les plus touchés.</span><span className="en">A live map and stats: open reports, repair times, worst districts.</span></p>
            <div className="notif"><span className="ap"><svg viewBox="0 0 192 204" aria-hidden="true"><use href="#mark"/></svg></span><div><strong><span className="fr">Tableau de bord</span><span className="en">Dashboard</span> <small>live</small></strong><span className="fr">Carte mise à jour · 1 nouveau gravité 4</span><span className="en">Map updated · 1 new severity 4</span></div></div>
          </div>
        </div>
        <p className="note"><span className="fr">Les textes de notification sont des exemples.</span><span className="en">Notification texts are examples.</span></p>
      </div>
    </section>
  );
}
