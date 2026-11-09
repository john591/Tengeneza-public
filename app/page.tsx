import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import Problem from "@/components/Problem";
import Download from "@/components/Download";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Facts />
      <Problem />
      <Download />
      <Explore />
    </main>
  );
}
