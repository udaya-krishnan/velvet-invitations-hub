import { wedding } from "@/config/wedding";

import { Reveal } from "./Reveal";
import { CornerFrame, SectionHeading } from "./Ornament";

const cells = [
  { label: "Day", value: wedding.dayName },
  { label: "Date", value: wedding.dayNumber },
  { label: "Month", value: wedding.monthName },
  { label: "Year", value: wedding.year },
];

export function SaveTheDate() {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-20">
      <div className="relative mx-auto max-w-md">
        <CornerFrame />
        <Reveal>
          <SectionHeading eyebrow="Save the date" title="Our Special Day" script />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cells.map((c) => (
              <div key={c.label} className="card-luxe rounded-sm px-3 py-5 text-center">
                <p className="tracking-luxe text-[0.55rem] uppercase text-gold">{c.label}</p>
                <p className="mt-2 text-lg font-light tracking-wide text-deep">{c.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm italic text-muted-foreground">{wedding.time}</p>
        </Reveal>
      </div>
    </section>
  );
}
