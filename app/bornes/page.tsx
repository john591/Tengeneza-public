import type { Metadata } from "next";
import Roadside from "@/components/Roadside";

export const metadata: Metadata = { title: "Bornes routières" };

export default function Page() {
  return (
    <main id="main">
      <Roadside />
    </main>
  );
}
