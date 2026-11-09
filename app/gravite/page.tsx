import type { Metadata } from "next";
import Severity from "@/components/Severity";

export const metadata: Metadata = { title: "Échelle de gravité" };

export default function Page() {
  return (
    <main id="main">
      <Severity />
    </main>
  );
}
