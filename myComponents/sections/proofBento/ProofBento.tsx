import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data } from "./data";
import Link from "next/link";
export default function ProofBento() {
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
