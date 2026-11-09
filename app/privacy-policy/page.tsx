import type { Metadata } from "next";
import Link from "next/link";
import LegalContact from "@/components/LegalContact";
import { LEGAL_UPDATED, LEGAL_UPDATED_EN } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Quelles données l'application Tengeneza collecte, pourquoi, avec qui elles sont partagées et comment les supprimer.",
};

const T = ({ fr, en }: { fr: React.ReactNode; en: React.ReactNode }) => (
  <><span className="fr">{fr}</span><span className="en">{en}</span></>
);

export default function PrivacyPolicy() {
  return (
    <main id="main" className="band gutter legal-page">
      <div className="wrap legal">
        <div className="head rv">
          <span className="kicker"><T fr="Légal" en="Legal" /></span>
          <h2><T fr="Politique de confidentialité" en="Privacy Policy" /></h2>
          <p className="legal-date"><T fr={`Dernière mise à jour : ${LEGAL_UPDATED}`} en={`Last updated: ${LEGAL_UPDATED_EN}`} /></p>
        </div>

        <div className="legal-body">
          <section>
            <h3><T fr="1. Qui nous sommes" en="1. Who we are" /></h3>
            <p><T
              fr="Tengeneza est une application mobile qui permet de signaler et de détecter les nids-de-poule, et un tableau de bord pour les équipes de réparation. Cette politique explique quelles données l'application collecte, pourquoi, et quels sont vos choix."
              en="Tengeneza is a mobile app for reporting and detecting potholes, with a dashboard for repair crews. This policy explains what data the app collects, why, and what your choices are." /></p>
          </section>

          <section>
            <h3><T fr="2. Données que nous collectons" en="2. Data we collect" /></h3>
            <ul>
              <li><b><T fr="Compte et profil." en="Account and profile." /></b> <T
                fr="Votre adresse e-mail et les informations de profil que vous saisissez. Si vous vous connectez avec Google ou un autre fournisseur, nous recevons les informations de base de ce compte. Si vous vérifiez votre numéro, votre numéro de téléphone est aussi enregistré."
                en="Your email address and the profile details you enter. If you sign in with Google or another provider, we receive the basic details of that account. If you verify your number, your phone number is stored too." /></li>
              <li><b><T fr="Signalements." en="Reports." /></b> <T
                fr="La photo de la route, la position GPS du nid-de-poule, la date et l'heure, le score de gravité et, selon le cas, le nom du quartier ou de la commune."
                en="The road photo, the GPS position of the pothole, the date and time, the severity score and, where relevant, the district or commune name." /></li>
              <li><b><T fr="Position de l'appareil." en="Device location." /></b> <T
                fr="Pour détecter et placer les nids-de-poule sur la carte, et pour vous prévenir des nouveaux signalements proches de vous, l'application utilise la position de votre téléphone."
                en="To detect potholes, place them on the map and alert you to new reports near you, the app uses your phone's location." /></li>
              <li><b><T fr="Notifications." en="Notifications." /></b> <T
                fr="Un identifiant technique de votre appareil (jeton de notification) pour vous envoyer des alertes, et vos préférences de notification."
                en="A technical device identifier (notification token) to send you alerts, and your notification preferences." /></li>
              <li><b><T fr="Préférences." en="Preferences." /></b> <T fr="La langue et les réglages de l'application." en="Your language and app settings." /></li>
            </ul>
            <p><T
              fr="Nous ne collectons pas vos contacts, vos messages ni le reste de vos photos. L'application n'accède à la caméra que pour détecter ou signaler un nid-de-poule."
              en="We do not collect your contacts, messages or the rest of your photos. The app uses the camera only to detect or report a pothole." /></p>
          </section>

          <section>
            <h3><T fr="3. Comment nous utilisons ces données" en="3. How we use this data" /></h3>
            <ul>
              <li><T fr="Afficher les nids-de-poule sur la carte et les transmettre aux équipes de réparation." en="Show potholes on the map and pass them to repair crews." /></li>
              <li><T fr="Vous permettre de suivre vos signalements et de recevoir des notifications." en="Let you follow your reports and receive notifications." /></li>
              <li><T fr="Calculer le score de gravité et améliorer la détection par IA." en="Compute the severity score and improve AI detection." /></li>
              <li><T fr="Produire des statistiques par zone pour les villes et les partenaires." en="Produce per-area statistics for cities and partners." /></li>
              <li><T fr="Sécuriser les comptes et prévenir les abus." en="Secure accounts and prevent abuse." /></li>
            </ul>
            <p><T fr="Nous ne vendons pas vos données personnelles et nous ne les utilisons pas pour de la publicité." en="We do not sell your personal data and do not use it for advertising." /></p>
          </section>

          <section>
            <h3><T fr="4. Visages et plaques d'immatriculation" en="4. Faces and license plates" /></h3>
            <p><T
              fr="Les visages et les plaques visibles sur une photo sont floutés sur votre téléphone, avant tout envoi. Les bornes en bord de route envoient des détections, pas de flux vidéo. Pour en savoir plus, consultez la page "
              en="Faces and plates visible in a photo are blurred on your phone before anything is sent. Roadside units send detections, not video. To learn more, see the page " /><Link href="/vie-privee"><T fr="Vie privée" en="Privacy" /></Link>.</p>
          </section>

          <section>
            <h3><T fr="5. Ce qui est visible par les autres" en="5. What others can see" /></h3>
            <p><T
              fr="Un nid-de-poule signalé (photo de la route, position, gravité) apparaît sur la carte, sans votre nom. Votre profil n'est pas public. Vous pouvez aussi envoyer un signalement en mode anonyme : il est alors enregistré sans être associé à votre identité sur la carte."
              en="A reported pothole (road photo, position, severity) appears on the map without your name. Your profile is not public. You can also send a report in anonymous mode: it is then saved without being tied to your identity on the map." /></p>
          </section>

          <section>
            <h3><T fr="6. Avec qui nous partageons les données" en="6. Who we share data with" /></h3>
            <ul>
              <li><b>Supabase</b> — <T fr="hébergement de la base de données, authentification et stockage des photos." en="database hosting, authentication and photo storage." /></li>
              <li><b>Google / Firebase</b> — <T fr="envoi des notifications push et connexion avec Google." en="push notifications and Sign in with Google." /></li>
              <li><b><T fr="Municipalités et équipes de réparation" en="Municipalities and repair crews" /></b> — <T fr="uniquement les données des nids-de-poule (position, gravité, photo de la route), pas votre identité." en="pothole data only (position, severity, road photo), not your identity." /></li>
            </ul>
            <p><T fr="Nous pouvons aussi divulguer des données si la loi l'exige." en="We may also disclose data if the law requires it." /></p>
          </section>

          <section>
            <h3><T fr="7. Permissions de l'application" en="7. App permissions" /></h3>
            <ul>
              <li><b><T fr="Caméra" en="Camera" /></b> — <T fr="détecter et photographier un nid-de-poule." en="detect and photograph a pothole." /></li>
              <li><b><T fr="Localisation" en="Location" /></b> — <T fr="placer le nid-de-poule sur la carte et vous alerter à proximité." en="place the pothole on the map and alert you nearby." /></li>
              <li><b>Notifications</b> — <T fr="vous informer de l'état de vos signalements." en="tell you about the status of your reports." /></li>
            </ul>
            <p><T fr="Vous pouvez retirer chaque permission à tout moment dans les réglages de votre téléphone ; certaines fonctions ne marcheront alors plus." en="You can withdraw each permission at any time in your phone settings; some features will then stop working." /></p>
          </section>

          <section>
            <h3><T fr="8. Conservation et suppression" en="8. Retention and deletion" /></h3>
            <p><T
              fr="Nous gardons vos données tant que votre compte existe. Vous pouvez supprimer votre compte à tout moment, directement dans l'application. Les nids-de-poule déjà signalés restent sur la carte, sans lien avec vous. Toutes les étapes sont détaillées sur la page "
              en="We keep your data as long as your account exists. You can delete your account at any time, directly in the app. Potholes already reported stay on the map, with no link to you. All the steps are on the " /><Link href="/data-deletion"><T fr="Suppression des données" en="Data deletion" /></Link><T fr="." en=" page." /></p>
          </section>

          <section>
            <h3><T fr="9. Vos droits" en="9. Your rights" /></h3>
            <p><T
              fr="Vous pouvez demander l'accès à vos données, leur correction ou leur suppression, et retirer votre consentement à tout moment. Vous pouvez modifier votre profil depuis l'application, et supprimer votre compte vous-même."
              en="You can ask for access to your data, its correction or deletion, and withdraw your consent at any time. You can edit your profile in the app and delete your account yourself." /></p>
          </section>

          <section>
            <h3><T fr="10. Sécurité" en="10. Security" /></h3>
            <p><T
              fr="Les échanges avec nos serveurs sont chiffrés et l'accès aux données est limité par des règles d'autorisation : chaque utilisateur n'accède qu'à ses propres informations. Aucun système n'est infaillible, mais nous prenons ces mesures au sérieux."
              en="Traffic to our servers is encrypted and data access is restricted by authorization rules: each user can only reach their own information. No system is perfect, but we take these measures seriously." /></p>
          </section>

          <section>
            <h3><T fr="11. Enfants" en="11. Children" /></h3>
            <p><T fr="Tengeneza ne s'adresse pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment leurs données." en="Tengeneza is not aimed at children under 13 and we do not knowingly collect their data." /></p>
          </section>

          <section>
            <h3><T fr="12. Modifications" en="12. Changes" /></h3>
            <p><T fr="Nous pouvons mettre à jour cette politique. La date en haut de la page indique la dernière version." en="We may update this policy. The date at the top of the page shows the latest version." /></p>
          </section>

          <section>
            <h3><T fr="13. Nous contacter" en="13. Contact us" /></h3>
            <p><T fr="Pour toute question sur vos données :" en="For any question about your data:" /></p>
            <LegalContact />
          </section>
        </div>
      </div>
    </main>
  );
}
