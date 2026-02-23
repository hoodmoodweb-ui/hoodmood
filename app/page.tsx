import Localizations from "@/myComponents/sections/localizations/Localizations";
import Offer from "../myComponents/sections/offer/Offer";
import Team from "@/myComponents/sections/team/Team";

export default function Home() {
  return (
    <main className="space-y-12">
      <Offer />
      <Localizations />
      <Team/>
    </main>
  );
}
