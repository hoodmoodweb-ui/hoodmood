"use client";

import SectionContent from "@/myComponents/common/SectionContent";
import { data, instructors } from "./data";
import SectionContainer from "@/myComponents/common/SectionContainer";
import { HoverCard } from "@/myComponents/common/HoverCard";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
export default function Team() {
  return (
    <SectionContainer>
      <SectionContent
        badge={data.badge}
        title={data.title}
        description={data.description}
      />
      {/* <div className="flex flex-col overflow-hidden gap-4 md:flex-row md:items-center  md:justify-between"> */}
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {instructors.map((item) => (
            <CarouselItem className="basis-1/4" key={item.id}>
              <HoverCard
                title={item.name}
                description={item.role}
                img={item.img}
                hoverImg={item.hoverImg}
                headerStyles="text-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* </div> */}
      <ButtonPrimary href="/grafik/koszalin">Sprawdź grafik</ButtonPrimary>
    </SectionContainer>
  );
}
