export default function Roadmap() {
  return (
    <section className="band gutter" id="feuille" aria-labelledby="rm-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">Feuille de route</span><span className="en">Roadmap</span></span>
          <h2 id="rm-h"><span className="fr">Douze mois jusqu'au déploiement dans toute la ville</span><span className="en">Twelve months to a city-wide rollout</span></h2>
          <p className="lede"><span className="fr">On avance seulement quand chaque étape de validation est franchie. Les mois sont des estimations.</span><span className="en">The plan moves forward only when each gate is passed. Months are estimates.</span></p>
        </div>
        <div className="timeline rv" role="list">
          <div className="m" aria-hidden="true">M1</div><div className="m" aria-hidden="true">M2</div><div className="m" aria-hidden="true">M3</div><div className="m" aria-hidden="true">M4</div><div className="m" aria-hidden="true">M5</div><div className="m" aria-hidden="true">M6</div><div className="m" aria-hidden="true">M7</div><div className="m" aria-hidden="true">M8</div><div className="m" aria-hidden="true">M9</div><div className="m" aria-hidden="true">M10</div><div className="m" aria-hidden="true">M11</div><div className="m" aria-hidden="true">M12</div>
          <div className="seg a" role="listitem" style={{ gridColumn: '1 / span 2' }}><small><span className="fr">Mois 1–2</span><span className="en">Months 1–2</span></small><b><span className="fr">Fondations</span><span className="en">Foundations</span></b><span><span className="fr">Jeu de données local, socle serveur</span><span className="en">Local dataset, backend skeleton</span></span></div>
          <div className="seg b" role="listitem" style={{ gridColumn: '3 / span 3' }}><small><span className="fr">Mois 3–5</span><span className="en">Months 3–5</span></small><b>MVP</b><span><span className="fr">Application, validation cloud, tableau de bord</span><span className="en">App, cloud validation, dashboard</span></span></div>
          <div className="seg c" role="listitem" style={{ gridColumn: '6 / span 3' }}><small><span className="fr">Mois 6–8</span><span className="en">Months 6–8</span></small><b><span className="fr">Pilote</span><span className="en">Pilot</span></b><span><span className="fr">Un quartier, de vraies équipes</span><span className="en">One district, real crews</span></span></div>
          <div className="seg d" role="listitem" style={{ gridColumn: '9 / span 4' }}><small><span className="fr">Mois 9–12</span><span className="en">Months 9–12</span></small><b><span className="fr">Déploiement</span><span className="en">Scale</span></b><span><span className="fr">Toute la ville, puis les bornes de la phase 2 dès le mois 12</span><span className="en">City-wide, then Phase 2 roadside units from month 12</span></span></div>
        </div>
        <div className="gates">
          <div className="gate"><span className="g"><span className="fr">Étape 1</span><span className="en">Gate 1</span></span><p><span className="fr">Précision de détection supérieure à 85 % sur les routes locales avant le pilote.</span><span className="en">Detection precision above 85% on local roads before the pilot.</span></p></div>
          <div className="gate"><span className="g"><span className="fr">Étape 2</span><span className="en">Gate 2</span></span><p><span className="fr">Validation de la ville sur les résultats du pilote avant de passer à l'échelle.</span><span className="en">City sign-off on pilot results before scaling up.</span></p></div>
        </div>
      </div>
    </section>
  );
}
