import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, ChartNoAxesColumnIncreasing, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import Link from "next/link";
import { ClassesOfferType } from "@/data/ofertaData";

export default function OfferCard({
  name,
  img,
  description,
  instructor,
  instructorAvatar,
  instructorSlug,
  experience,
  minAge,
  maxAge,
  scheduleSrc,
}: ClassesOfferType) {
  return (
    <Card
      key={name}
      className="group/card h-full overflow-hidden flex flex-col justify-between"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/18 via-transparent to-white/12 opacity-80 transition-opacity duration-300 group-hover/card:opacity-100" />
        <Image
          src={img}
          fill
          alt={name}
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="mb-2 flex flex-col gap-4 p-6 text-muted-foreground lg:flex-row lg:gap-6">
        <Link
          href={scheduleSrc}
          className="group/link ui-focus-ring ui-link-subtle rounded-sm text-sm focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <CalendarDays className="ui-link-subtle-icon w-5 text-black/78 dark:text-white/78" />
          Sprawdź grafik
        </Link>
        <span className="inline-flex items-end gap-2 text-sm">
          <User className="w-5 text-black dark:text-white" />
          {minAge !== "" && maxAge !== "" ? `${minAge}-${maxAge} lat` : "bez limitu"}
        </span>
        <span className="inline-flex items-end gap-2 text-sm">
          <ChartNoAxesColumnIncreasing className="w-5 text-black dark:text-white" />
          {experience}
        </span>
      </div>
      <CardFooter className="flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={instructorAvatar} />
          <AvatarFallback>{instructor[0]}</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <Link
            href={instructorSlug}
            className="group/link ui-focus-ring ui-link-subtle rounded-sm text-start text-sm font-semibold leading-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {instructor}
          </Link>

          <p className="text-sm text-muted-foreground">Instruktor zajęć</p>
        </div>
        <ButtonPrimary href="/zapisz-sie">Zapisz się</ButtonPrimary>
      </CardFooter>
    </Card>
  );
}
