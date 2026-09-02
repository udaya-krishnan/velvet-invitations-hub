import { wedding } from "@/config/wedding";
import { useCountdown } from "@/hooks/useCountdown";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown() {
  const c = useCountdown(wedding.dateISO);

  const units = c
    ? [
        { label: "Days", value: c.days.toString() },
        { label: "Hours", value: pad(c.hours) },
        { label: "Minutes", value: pad(c.minutes) },
        { label: "Seconds", value: pad(c.seconds) },
      ]
    : [
        { label: "Days", value: "--" },
        { label: "Hours", value: "--" },
        { label: "Minutes", value: "--" },
        { label: "Seconds", value: "--" },
      ];

  return (
    <section className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="Counting the moments" title="The Celebration Begins In" />
        </Reveal>

        <Reveal delay={0.1}>
          {c?.isPast ? (
            <p className="font-script mt-10 text-center text-4xl text-gold-gradient">
              Today Is The Day ♡
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-3">
              {units.map((u) => (
                <div key={u.label} className="card-luxe rounded-sm px-1 py-4 text-center">
                  <p className="tabular text-xl font-light text-deep sm:text-2xl">{u.value}</p>
                  <p className="mt-1 text-[0.5rem] tracking-[0.2em] uppercase text-gold sm:text-[0.58rem]">
                    {u.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
