import type { Metadata } from "next";
import Privacy from "@/components/Privacy";

export const metadata: Metadata = { title: "Vie privée" };

export default function Page() {
  return (
    <main id="main">
      <Privacy />
    </main>
  );
}
