import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import Link from "next/link";
import { data } from "./data";
import { Accordion, AccordionContent } from "@/components/ui/accordion";
export default function Faq() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <Accordion type="single">
        <AccordionContent>

        </AccordionContent>
      </Accordion>
      <Link href="/oferta/koszalin">Zobacz pełną ofertę</Link>
    </SectionContainer>
  );
}
