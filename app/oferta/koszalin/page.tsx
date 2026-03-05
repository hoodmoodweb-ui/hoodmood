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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
            <Card key={item.name} className="overflow-hidden h-full">
              <div className="aspect-video relative ">
                <Image
                  src={item.img}
                  fill
                  alt={item.name}
                  className="object-cover"
                />
              </div>
              <CardHeader className="">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription className="">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <div className="flex  gap-3 text-muted-foreground p-6">
                <span className="inline-flex gap-2 items-end text-sm">
                  <User className="w-5 text-black dark:text-white" /> {item.age}
                </span>
                <span className="inline-flex gap-2 items-end text-sm">
                  <CalendarDays className="w-5 text-black dark:text-white" />{" "}
                  Sprawdź grafik
                </span>
              </div>
              <CardFooter className="flex-row gap-2  items-center ">
                <Avatar>
                  <AvatarImage src={item.instructorAvatar} />
                  <AvatarFallback>{item.instructor[0]}</AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <button
                    type="button"
                    className="font-semibold leading-none text-sm hover:underline underline-offset-1 hover:cursor-pointer"
                  >
                    {item.instructor}
                  </button>

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
