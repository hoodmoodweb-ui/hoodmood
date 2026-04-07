import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  role: string;
  images: string[];
};

export default function TeamCard({ id, name, role, images }: Props) {
  return (
    <Card className="group/card overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          quality={60}
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(33vw - 3rem), 280px"
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.035]"
          priority={false}
        />
        <Link
          scroll
          href={`/kadra/${id}`}
          className="ui-focus-ring ui-pressable absolute bottom-4 right-4 inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-zinc-800/70 px-4 py-2 text-xs font-medium uppercase text-white backdrop-blur-md focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <User />
          Profil trenera
        </Link>
      </div>

      <CardHeader className="pointer-events-none">
        <div className="flex w-full items-start justify-between">
          <CardTitle className="font-anton font-normal">{name}</CardTitle>
        </div>
        <CardDescription className="flex gap-2">
          <p className="text-sm">{role}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter />
    </Card>
  );
}
