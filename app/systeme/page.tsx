import type { Metadata } from "next";
import Models from "@/components/Models";
import Architecture from "@/components/Architecture";

export const metadata: Metadata = { title: "Système" };

export default function Page() {
  return (
    <main id="main">
      <Models />
      <Architecture />
    </main>
  );
}
