import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

type Props = {
  name: string;
  role: string;
  images: string[];
  localizations: string[];
  id: string;
};

export default function TeamCard({
  name,
  role,
  images,
  localizations: _localizations,
  id,
}: Props) {
  return (
    <Card className="group/card overflow-hidden h-fit">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={images[0]}
          fill
          alt={name}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
        />
      </div>
      <CardHeader>
        <div className="inline-flex items-center gap-4">
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription>{role}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-end justify-end pt-6">
        <Link
          scroll
          href={`/kadra/${id}`}
          className="ui-focus-ring ui-pressable inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border bg-background px-4 py-2 text-xs font-medium uppercase text-slate-900 shadow-xs dark:border-input dark:bg-input/30 dark:text-slate-50 dark:motion-safe:hover:bg-input/50 focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <User />
          Profil trenera
        </Link>
      </CardFooter>
    </Card>
  );
}
