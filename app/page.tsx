import type { Metadata } from "next";
import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";
import Team from "@/myComponents/sections/team/Team";
import ProofBento from "@/myComponents/sections/proofBento/ProofBento";
import HowToJoin from "@/myComponents/sections/howToJoin/HowToJoin";
import Opinions from "@/myComponents/sections/opinions/Opinions";
import Faq from "@/myComponents/sections/faq/Faq";
import Player from "@/myComponents/sections/player/Player";
import Hero from "@/myComponents/sections/hero/Hero";


export const metadata: Metadata = {
  title: "Szkoła tańca i akrobatyki | Koszalin, Polanów, Biały Bór",
  description:
    "Hoodmood to szkoła tańca i akrobatyki w Koszalinie, Polanowie i Białym Borze. Prowadzimy zajęcia dla dzieci, młodzieży i dorosłych. Sprawdź ofertę, grafik i zapisz się online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hoodmood – szkoła tańca i akrobatyki",
    description:
      "Zajęcia dla dzieci, młodzieży i dorosłych w Koszalinie, Polanowie i Białym Borze.",
    url: "/",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoodmood – szkoła tańca i akrobatyki",
    description:
      "Zajęcia dla dzieci, młodzieży i dorosłych w Koszalinie, Polanowie i Białym Borze.",
  },
};


export default function Home() {
  return (
    <main className="space-y-36 mb-36">
      <Hero />
      <Offer />
      <Localizations />
      <Player />
      <Team />
      <ProofBento />
      <HowToJoin />
      <Opinions />
      <Faq />
    </main>
  );
}
