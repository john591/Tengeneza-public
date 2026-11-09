import type { Metadata } from "next";
import Link from "next/link";
import LegalContact from "@/components/LegalContact";
import { LEGAL_UPDATED, LEGAL_UPDATED_EN } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Les conditions d'utilisation de l'application Tengeneza : compte et connexion, signalements, données publiques, sécurité routière.",
};

const T = ({ fr, en }: { fr: React.ReactNode; en: React.ReactNode }) => (
  <><span className="fr">{fr}</span><span className="en">{en}</span></>
);

export default function TermsOfService() {
  return (
    <main id="main" className="band gutter legal-page">
      <div className="wrap legal">
        <div className="head rv">
          <span className="kicker"><T fr="Légal" en="Legal" /></span>
          <h2><T fr="Conditions d'utilisation" en="Terms of Service" /></h2>
          <p className="legal-date"><T fr={`Dernière mise à jour : ${LEGAL_UPDATED}`} en={`Last updated: ${LEGAL_UPDATED_EN}`} /></p>
          <p className="lede"><T
            fr="Ces conditions s'appliquent à l'application mobile Tengeneza et à ce site. En créant un compte ou en utilisant l'application, vous les acceptez."
            en="These terms apply to the Tengeneza mobile app and this website. By creating an account or using the app, you accept them." /></p>
        </div>

        <div className="legal-body">
          <section>
            <h3><T fr="1. À quoi sert Tengeneza" en="1. What Tengeneza is for" /></h3>
            <p><T
              fr="Tengeneza permet de signaler les nids-de-poule, de suivre leur réparation et de s'informer sur l'état des routes. Les signalements sont transmis aux autorités et aux équipes de réparation sous forme de données : position, photo de la route et gravité."
              en="Tengeneza lets you report potholes, follow their repair and learn about the state of the roads. Reports are passed to authorities and repair crews as data: position, road photo and severity." /></p>
          </section>

          <section>
            <h3><T fr="2. Compte et connexion" en="2. Account and sign-in" /></h3>
            <ul>
              <li><b><T fr="Méthodes de connexion." en="Sign-in methods." /></b> <T
                fr="Vous pouvez créer un compte avec votre adresse e-mail et un mot de passe, ou vous connecter avec Google ou Facebook."
                en="You can create an account with your email address and a password, or sign in with Google or Facebook." /></li>
              <li><b><T fr="Vérification." en="Verification." /></b> <T
                fr="Nous pouvons vous demander de confirmer votre adresse e-mail avec un code, et de vérifier votre numéro de téléphone."
                en="We may ask you to confirm your email address with a code, and to verify your phone number." /></li>
              <li><b><T fr="Informations exactes." en="Accurate information." /></b> <T
                fr="Donnez des informations exactes et gardez votre mot de passe secret. Vous êtes responsable de ce qui est fait avec votre compte."
                en="Give accurate information and keep your password secret. You are responsible for what is done with your account." /></li>
              <li><b><T fr="Âge." en="Age." /></b> <T
                fr="L'application s'adresse aux personnes de 13 ans et plus."
                en="The app is for people aged 13 and over." /></li>
              <li><b><T fr="Comptes tiers." en="Third-party accounts." /></b> <T
                fr="Si vous vous connectez avec Google ou Facebook, leurs propres conditions s'appliquent aussi à ce compte. Nous recevons seulement les informations de base du profil."
                en="If you sign in with Google or Facebook, their own terms also apply to that account. We only receive basic profile information." /></li>
              <li><b><T fr="Suppression." en="Deletion." /></b> <T
                fr="Vous pouvez supprimer votre compte à tout moment depuis l'application (Profil, puis « Supprimer mon compte »). Voir la page "
                en="You can delete your account at any time from the app (Profile, then “Delete my account”). See the " /><Link href="/data-deletion"><T fr="Suppression des données" en="Data deletion" /></Link><T fr="." en=" page." /></li>
            </ul>
          </section>

          <section>
            <h3><T fr="3. L'application en détail" en="3. The app in detail" /></h3>
            <ul>
              <li><b><T fr="Signaler un nid-de-poule." en="Report a pothole." /></b> <T fr="Photo prise sur place, position GPS, date et heure, puis gravité de 1 à 5." en="A photo taken on the spot, GPS position, date and time, then a severity from 1 to 5." /></li>
              <li><b><T fr="Détection par l'IA." en="AI detection." /></b> <T fr="La caméra peut détecter un nid-de-poule sur le téléphone, même sans connexion ; le signalement est envoyé dès que le réseau revient." en="The camera can detect a pothole on the phone, even offline; the report is sent as soon as the network is back." /></li>
              <li><b><T fr="Carte et suivi." en="Map and tracking." /></b> <T fr="Une carte des nids-de-poule signalés, et le suivi de l'état de vos propres signalements." en="A map of reported potholes, and tracking of the status of your own reports." /></li>
              <li><b>Notifications.</b> <T fr="Des alertes sur vos signalements et sur les nouveaux nids-de-poule près de vous, que vous pouvez régler dans l'application." en="Alerts about your reports and new potholes near you, which you can adjust in the app." /></li>
              <li><b><T fr="Mode anonyme." en="Anonymous mode." /></b> <T fr="Vous pouvez envoyer un signalement sans qu'il soit associé à votre identité sur la carte." en="You can send a report without it being tied to your identity on the map." /></li>
              <li><b><T fr="Permissions." en="Permissions." /></b> <T fr="L'application demande l'accès à la caméra, à la localisation et aux notifications. Chacune peut être retirée dans les réglages du téléphone, certaines fonctions ne marcheront alors plus." en="The app asks for access to the camera, location and notifications. Each can be withdrawn in the phone settings; some features will then stop working." /></li>
              <li><b><T fr="Coût." en="Cost." /></b> <T fr="L'application est gratuite pour les citoyens." en="The app is free for citizens." /></li>
            </ul>
          </section>

          <section>
            <h3><T fr="4. Vos signalements" en="4. Your reports" /></h3>
            <p><T
              fr="Signalez uniquement de vrais nids-de-poule, avec une photo prise sur place. Les faux signalements, les photos sans rapport et les abus peuvent entraîner la suppression du signalement ou du compte. Évitez de photographier des visages et des plaques d'immatriculation."
              en="Only report real potholes, with a photo taken on the spot. False reports, unrelated photos and abuse may lead to the report or the account being removed. Avoid photographing faces and license plates." /></p>
          </section>

          <section>
            <h3><T fr="5. Ce qui devient public" en="5. What becomes public" /></h3>
            <p><T
              fr="La photo, la position GPS, la gravité et l'état d'un signalement sont visibles par tous sur la carte. Vous nous autorisez à les afficher et à les utiliser pour suivre et améliorer l'état des routes, y compris sous forme de statistiques. Votre nom n'est pas affiché ; le mode anonyme masque aussi votre photo de profil."
              en="The photo, GPS position, severity and status of a report are visible to everyone on the map. You allow us to display and use them to follow and improve the state of the roads, including as statistics. Your name is not shown; anonymous mode also hides your profile photo." /></p>
          </section>

          <section>
            <h3><T fr="6. Utilisation acceptable" en="6. Acceptable use" /></h3>
            <p><T fr="Vous vous engagez à ne pas :" en="You agree not to:" /></p>
            <ul>
              <li><T fr="envoyer de faux signalements ou des contenus illégaux, offensants ou sans rapport avec les routes ;" en="send false reports or illegal, offensive content or content unrelated to roads;" /></li>
              <li><T fr="utiliser le compte d'une autre personne ou vous faire passer pour elle ;" en="use someone else's account or impersonate them;" /></li>
              <li><T fr="chercher à contourner la sécurité du service, ou à le perturber ;" en="try to bypass the service's security, or to disrupt it;" /></li>
              <li><T fr="copier massivement les données du service par des moyens automatisés." en="mass-copy the service's data by automated means." /></li>
            </ul>
          </section>

          <section>
            <h3><T fr="7. Sécurité routière" en="7. Road safety" /></h3>
            <p><T
              fr="N'utilisez pas l'application en conduisant : signalez ou consultez la carte à l'arrêt. Les alertes de l'application sont une aide et ne remplacent pas votre vigilance. Les informations peuvent être incomplètes ou dépassées."
              en="Do not use the app while driving: report or check the map when stopped. The app's alerts are an aid and do not replace your own attention. Information may be incomplete or out of date." /></p>
          </section>

          <section>
            <h3><T fr="8. Réparations et disponibilité" en="8. Repairs and availability" /></h3>
            <p><T
              fr="Un signalement ne garantit pas une réparation ni un délai : Tengeneza transmet l'information, les travaux dépendent des autorités. Le service peut être interrompu ou modifié."
              en="A report does not guarantee a repair or a deadline: Tengeneza passes the information on, the works depend on the authorities. The service may be interrupted or changed." /></p>
          </section>

          <section>
            <h3><T fr="9. Propriété intellectuelle" en="9. Intellectual property" /></h3>
            <p><T
              fr="L'application, le nom et le logo Tengeneza appartiennent à Tengeneza. Vous gardez vos droits sur vos photos ; vous nous accordez l'autorisation de les utiliser comme décrit à l'article 5."
              en="The app, the Tengeneza name and logo belong to Tengeneza. You keep your rights to your photos; you grant us permission to use them as described in section 5." /></p>
          </section>

          <section>
            <h3><T fr="10. Suspension" en="10. Suspension" /></h3>
            <p><T
              fr="Nous pouvons suspendre ou supprimer un compte qui ne respecte pas ces conditions, par exemple en cas de faux signalements répétés ou d'abus."
              en="We may suspend or delete an account that does not follow these terms, for example in case of repeated false reports or abuse." /></p>
          </section>

          <section>
            <h3><T fr="11. Responsabilité" en="11. Liability" /></h3>
            <p><T
              fr="L'application est fournie telle quelle, sans garantie d'être toujours disponible ou exempte d'erreur. Dans les limites permises par la loi, Tengeneza n'est pas responsable des dommages liés à une information incomplète, à un retard de réparation ou à une interruption du service."
              en="The app is provided as is, with no guarantee that it is always available or error-free. To the extent permitted by law, Tengeneza is not liable for damage linked to incomplete information, a repair delay or a service interruption." /></p>
          </section>

          <section>
            <h3><T fr="12. Vos données personnelles" en="12. Your personal data" /></h3>
            <p><T fr="Nous traitons vos données comme décrit dans notre " en="We handle your data as described in our " /><Link href="/privacy-policy"><T fr="politique de confidentialité" en="privacy policy" /></Link>.</p>
          </section>

          <section>
            <h3><T fr="13. Modifications" en="13. Changes" /></h3>
            <p><T
              fr="Nous pouvons mettre ces conditions à jour. Les changements importants vous seront signalés dans l'application. La date en haut de la page indique la dernière version."
              en="We may update these terms. Important changes will be announced in the app. The date at the top of the page shows the latest version." /></p>
          </section>

          <section>
            <h3><T fr="14. Nous contacter" en="14. Contact us" /></h3>
            <p><T fr="Une question ou une préoccupation ?" en="A question or a concern?" /></p>
            <LegalContact />
          </section>
        </div>
      </div>
    </main>
  );
}
