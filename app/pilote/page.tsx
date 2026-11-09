import type { Metadata } from "next";
import Cta from "@/components/Cta";

export const metadata: Metadata = { title: "Lancer un pilote" };

export default function Page() {
  return (
    <main id="main">
      <Cta />
    </main>
  );
}
