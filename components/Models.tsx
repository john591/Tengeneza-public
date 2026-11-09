export default function Models() {
  return (
    <section className="band gutter" aria-labelledby="ml-h">
      <div className="wrap">
        <div className="head rv">
          <span className="kicker"><span className="fr">L'intelligence artificielle</span><span className="en">The AI</span></span>
          <h2 id="ml-h"><span className="fr">Un petit modèle sur le téléphone, un grand dans le cloud</span><span className="en">A small model on the phone, a big one in the cloud</span></h2>
          <p className="lede"><span className="fr">Le travail est partagé pour que le téléphone reste rapide et que les données de la ville restent fiables.</span><span className="en">The work is split so the phone stays fast and the city's data stays accurate.</span></p>
        </div>
        <div className="models rv">
          <article className="model">
            <span className="where"><span className="fr">Sur le téléphone</span><span className="en">On the phone</span></span>
            <h3><span className="fr">Le repérer</span><span className="en">Spot it</span></h3>
            <p><span className="fr">Un modèle YOLOv8 compact analyse la caméra en temps réel, même sur des Android d'entrée de gamme.</span><span className="en">A compact YOLOv8 model reads the camera in real time, even on mid-range Android phones.</span></p>
            <dl className="spec"><dt>model</dt><dd>YOLOv8n</dd><dt>input</dt><dd>320 px</dd><dt>format</dt><dd>INT8 TFLite / Core ML</dd></dl>
          </article>
          <article className="model">
            <span className="where"><span className="fr">Dans le cloud</span><span className="en">In the cloud</span></span>
            <h3><span className="fr">Le confirmer</span><span className="en">Confirm it</span></h3>
            <p><span className="fr">Un modèle de segmentation plus grand revérifie chaque photo, contoure le dégât et donne la note finale.</span><span className="en">A larger segmentation model re-checks every photo, outlines the damage and gives the final score.</span></p>
            <dl className="spec"><dt>model</dt><dd>YOLOv8s / m-seg</dd><dt>runs on</dt><dd>GPU worker</dd><dt>output</dt><dd>mask + 1–5</dd></dl>
          </article>
          <article className="model">
            <span className="where"><span className="fr">Capteurs de mouvement</span><span className="en">Motion sensors</span></span>
            <h3><span className="fr">Le sentir</span><span className="en">Feel it</span></h3>
            <p><span className="fr">Un classifieur lit l'accéléromètre. Une détection caméra suivie d'un choc = nid-de-poule confirmé.</span><span className="en">A classifier reads the accelerometer. A camera hit followed by a jolt = confirmed pothole.</span></p>
            <dl className="spec"><dt>signals</dt><dd>accel + gyro</dd><dt>window</dt><dd>1–3 s</dd><dt>camera</dt><dd><span className="fr">optionnelle</span><span className="en">optional</span></dd></dl>
          </article>
        </div>
      </div>
    </section>
  );
}
