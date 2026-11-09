import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LogoSymbol from "@/components/LogoSymbol";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-sora", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], variable: "--font-dm-sans", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Tengeneza · Détection intelligente des nids-de-poule",
    template: "%s · Tengeneza",
  },
  description:
    "Tengeneza transforme chaque téléphone en détecteur de nids-de-poule : détection par IA, score de gravité, GPS et tableau de bord municipal.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${sora.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <div id="site" data-lang="fr">
          <LogoSymbol />
          <Header />
          {children}
          <Footer />
          <SiteEffects />
        </div>
      </body>
    </html>
  );
}
