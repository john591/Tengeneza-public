import type { Metadata } from "next";
import Link from "next/link";
import LegalContact from "@/components/LegalContact";
import { LEGAL_UPDATED, LEGAL_UPDATED_EN } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Suppression des données",
  description: "Comment supprimer votre compte et vos données Tengeneza, dans l'application ou sur demande.",
};

const T = ({ fr, en }: { fr: React.ReactNode; en: React.ReactNode }) => (
  <><span className="fr">{fr}</span><span className="en">{en}</span></>
);

const steps = [
  { fr: ["Ouvrez l'application", "Connectez-vous au compte que vous voulez supprimer."], en: ["Open the app", "Sign in to the account you want to delete."] },
  { fr: ["Allez dans « Profil »", "Faites défiler la page jusqu'en bas."], en: ["Go to “Profile”", "Scroll to the bottom of the page."] },
  { fr: ["Touchez « Supprimer mon compte »", "L'écran vous rappelle ce qui sera effacé."], en: ["Tap “Delete my account”", "The screen reminds you what will be erased."] },
  { fr: ["Confirmez", "Écrivez SUPPRIMER, puis touchez « Supprimer définitivement »."], en: ["Confirm", "Type SUPPRIMER, then tap “Delete permanently”."] },
];

export default function DataDeletion() {
  return (
    <main id="main" className="band gutter legal-page">
      <div className="wrap legal">
        <div className="head rv">
          <span className="kicker"><T fr="Légal" en="Legal" /></span>
          <h2><T fr="Suppression des données" en="Data deletion" /></h2>
          <p className="legal-date"><T fr={`Dernière mise à jour : ${LEGAL_UPDATED}`} en={`Last updated: ${LEGAL_UPDATED_EN}`} /></p>
          <p className="lede"><T
            fr="Vous pouvez supprimer votre compte Tengeneza et vos données personnelles à tout moment, vous-même, depuis l'application."
            en="You can delete your Tengeneza account and personal data at any time, yourself, from the app." /></p>
        </div>

        <div className="legal-body">
          <section>
            <h3><T fr="Option 1 : dans l'application" en="Option 1: in the app" /></h3>
            <ol className="dl-steps">
              {steps.map((s, i) => (
                <li key={i}>
                  <span className="dl-n">{i + 1}</span>
                  <div>
                    <h3><T fr={s.fr[0]} en={s.en[0]} /></h3>
                    <p><T fr={s.fr[1]} en={s.en[1]} /></p>
                  </div>
                </li>
              ))}
            </ol>
            <p><T fr="La suppression est immédiate et définitive." en="Deletion is immediate and permanent." /></p>
          </section>

          <section>
            <h3><T fr="Ce qui est supprimé" en="What is deleted" /></h3>
            <ul>
              <li><T fr="Votre compte et votre profil (e-mail, informations de profil, numéro de téléphone vérifié)." en="Your account and profile (email, profile details, verified phone number)." /></li>
              <li><T fr="Les identifiants de notification de vos appareils et leur position associée." en="The notification identifiers of your devices and their associated location." /></li>
              <li><T fr="Votre accès au suivi de vos signalements." en="Your access to your reports' tracking." /></li>
            </ul>
          </section>

          <section>
            <h3><T fr="Ce qui est conservé" en="What is kept" /></h3>
            <p><T
              fr="Les nids-de-poule que vous avez signalés (photo de la route, position, gravité) restent sur la carte : ce sont des données routières d'intérêt public. Ils sont détachés de votre compte et n'affichent plus votre nom."
              en="The potholes you reported (road photo, position, severity) stay on the map: they are public-interest road data. They are detached from your account and no longer show your name." /></p>
          </section>

          <section>
            <h3><T fr="Option 2 : sur demande" en="Option 2: on request" /></h3>
            <p><T
              fr="Si vous ne pouvez plus accéder à l'application, ou si vous voulez aussi faire retirer un signalement précis, écrivez-nous depuis l'adresse e-mail de votre compte en indiquant « Suppression de données » et, si possible, la date et le lieu du signalement."
              en="If you can no longer access the app, or you also want a specific report removed, write to us from your account's email address with “Data deletion” as the subject and, if possible, the date and place of the report." /></p>
            <LegalContact />
          </section>

          <section>
            <p><T fr="Voir aussi notre " en="See also our " /><Link href="/privacy-policy"><T fr="politique de confidentialité" en="privacy policy" /></Link>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
