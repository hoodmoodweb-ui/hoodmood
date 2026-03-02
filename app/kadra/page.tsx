import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, instructors } from "./data";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export default function Team() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card
              key={instructor.id}
              className="w-full  relative overflow-hidden"
            >
              <div className="w-full relative aspect-square">
                <Image
                  src={instructor.img}
                  aspect-video
                  fill
                  alt="img"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="inline-flex items-center justify-between">
                  <CardTitle>{instructor.name}</CardTitle>
                  <Badge variant={"secondary"}>Instagram</Badge>
                </div>
                <CardDescription>{instructor.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
