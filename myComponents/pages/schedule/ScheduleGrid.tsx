import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

type ClassItem = {
  name: string;
  time: string;
  instructor: string;
  info: string;
  age: string;
};

type ClassesByDay = Record<
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday",
  ClassItem[]
>;

type Props = {
  classesByDay: ClassesByDay;
  dayLabelsPl: Record<keyof ClassesByDay, string>;
};

const dayOrder: (keyof ClassesByDay)[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

export default function ScheduleGrid({ classesByDay, dayLabelsPl }: Props) {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 ">
        {dayOrder.map((dayKey) => {
          const label = dayLabelsPl[dayKey];
          const items = classesByDay[dayKey];
          const headingId = `day-${dayKey}-heading`;

          return (
            <section
              key={dayKey}
              aria-labelledby={headingId}
              className="rounded-lg border   dark:bg-white/5 p-4 h-fit"
            >
              <header className="mb-4">
                <h3 id={headingId}>{label}</h3>
              </header>

              <ul className="space-y-2">
                {items.map((c, idx) => {
                  const descId = `class-${dayKey}-${idx}-desc`;

                  return (
                    <li key={`${dayKey}-${c.name}-${c.time}-${idx}`}>
                      <article
                        tabIndex={0}
                        aria-describedby={descId}
                        className="group w-full rounded-lg border  p-3 text-left transition hover:border-white/20 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      >
                        <div className="flex items-start justify-between gap-3 ">
                          <div className="min-w-0 ">
                            <div className="text-sm font-semibold ">
                              {c.name}
                            </div>

                            <div className="mt-1 text-xs text-muted-foreground">
                              {c.time}
                            </div>
                          </div>

                          <div className="flex shrink-0 flex-col items-end gap-2">
                            <HoverCard
                              key={"bottom"}
                              openDelay={20}
                              closeDelay={20}
                            >
                              <HoverCardTrigger>
                                <button type="button" className="px-2 ">
                                  <Info className="w-4 text-muted-foreground " />
                                </button>
                              </HoverCardTrigger>
                              <HoverCardContent className="text-sm md:hidden">
                                {c.info}
                              </HoverCardContent>
                              <HoverCardContent
                                className="text-sm hidden md:block"
                                align="center"
                              >
                                {c.info}
                              </HoverCardContent>
                            </HoverCard>
                          </div>
                        </div>

                        <div className="mt-4 text-xs">
                          Prowadzący: {c.instructor}
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
