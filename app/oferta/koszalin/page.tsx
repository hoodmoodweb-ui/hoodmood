import SectionContainer from "@/myComponents/common/SectionContainer";
import SectionContent from "@/myComponents/common/SectionContent";
import { data, kids, adults } from "./data";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, Car, Clock, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
export default function Offer() {
  return (
    <main>
      <SectionContainer>
        <SectionContent
          badge={data.badge}
          title={data.title}
          description={data.description}
        ></SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kids.map((item) => (
            <Card key={item.name} className="overflow-hidden">
              <div className="aspect-video relative ">
                <Image
                  src={item.img}
                  fill
                  alt={item.name}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <div className="flex  gap-3 text-muted-foreground mt-2">
                  <span className="inline-flex gap-2 items-end text-sm">
                    <User className="w-5 text-black dark:text-white" />{" "}
                    {item.age}
                  </span>
                  <span className="inline-flex gap-2 items-end text-sm">
                    <CalendarDays className="w-5 text-black dark:text-white" />{" "}
                    Sprawdź grafik
                  </span>
                </div>
              </CardHeader>
              <CardFooter className="flex-row gap-2  items-center">
                <Avatar>
                  <AvatarImage src={item.instructorAvatar} />
                  <AvatarFallback>{item.instructor[0]}</AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <p className="font-semibold leading-none text-sm">
                    {item.instructor}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Instruktor zajęć
                  </p>
                </div>
                <ButtonPrimary href="/zapisy">Zapisz się</ButtonPrimary>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
