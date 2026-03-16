import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, testimonials } from "./data";

import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import OpinionsCarousel from "./OpinionsCarousel";
export default function Opinions() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      <OpinionsCarousel testimonials={testimonials}/>
      <ButtonPrimary href="/oferta/koszalin">Zobacz pełną ofertę</ButtonPrimary>
    </SectionContainer>
  );
}
