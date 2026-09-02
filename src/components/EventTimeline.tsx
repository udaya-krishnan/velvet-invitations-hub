import { wedding, type WeddingEvent } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

function EventIcon({ icon }: { icon: WeddingEvent["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 0.9,
    strokeLinecap: "round" as const,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="text-gold">
      {icon === "crescent" && <path d="M16 3a9 9 0 100 18 7 7 0 010-18z" {...common} />}
      {icon === "rings" && (
        <>
          <circle cx="9.5" cy="14" r="5.5" {...common} />
          <circle cx="15" cy="14" r="5.5" {...common} />
          <path d="M12 3l2 3h-4l2-3z" {...common} />
        </>
      )}
      {icon === "lantern" && (
        <>
          <path d="M12 2v2M8 6h8l1 9a5 5 0 01-10 0l1-9zM10 21h4" {...common} />
        </>
      )}
      {icon === "dinner" && (
        <>
          <path d="M8 3v8a2 2 0 11-4 0V3M6 11v10M17 3c2 2 3 4 3 7a3 3 0 01-6 0c0-3 1-5 3-7zM17 13v8" {...common} />
        </>
      )}
    </svg>
  );
}

export function EventTimeline() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="The celebrations" title="Order of Events" script />
        </Reveal>

        <div className="relative mt-12 pl-10">
          <span className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-champagne to-transparent" />
          {wedding.events.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.08} className="relative pb-10 last:pb-0">
              <span className="absolute -left-10 top-1 grid h-8 w-8 place-items-center rounded-full border border-champagne bg-soft-white">
                <EventIcon icon={event.icon} />
              </span>
              <h3 className="text-base tracking-[0.22em] uppercase text-deep">{event.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{event.date}</p>
              <p className="text-sm text-muted-foreground">{event.time}</p>
              <p className="mt-1 text-sm italic text-deep/70">{event.venue}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
