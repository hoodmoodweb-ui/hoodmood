import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import Link from "next/link";
import { data } from "./data";
export default function Opinions() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />

      <Link href="/oferta/koszalin">Zobacz pełną ofertę</Link>
    </SectionContainer>
  );
}
