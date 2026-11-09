import type { Metadata } from "next";
import Roadmap from "@/components/Roadmap";

export const metadata: Metadata = { title: "Feuille de route" };

export default function Page() {
  return (
    <main id="main">
      <Roadmap />
    </main>
  );
}
