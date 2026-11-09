import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/contact";

const digits = CONTACT_PHONE.replace(/\D/g, "");

export default function LegalContact() {
  return (
    <ul className="legal-contact">
      <li><b>E-mail</b> : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
      <li><b><span className="fr">Téléphone</span><span className="en">Phone</span></b> : <a href={`tel:+${digits}`}>{CONTACT_PHONE}</a></li>
      <li><b>WhatsApp</b> : <a href={`https://wa.me/${digits}`} target="_blank" rel="noopener noreferrer">{CONTACT_PHONE}</a></li>
    </ul>
  );
}
