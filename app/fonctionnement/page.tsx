import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = { title: "Fonctionnement" };

export default function Page() {
  return (
    <main id="main">
      <HowItWorks />
    </main>
  );
}
