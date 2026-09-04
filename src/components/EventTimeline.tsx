import { wedding, type WeddingEvent } from "@/config/wedding";

import archIllustration from "@/assets/timeline-arch.png";
// import brideIllustration from "@/assets/timeline-bride.png";
import mehndiIllustration from "@/assets/timeline-mehndi.png";
import ringsIllustration from "@/assets/timeline-rings.png";
import dinnerIllustration from "@/assets/timeline-dinner.png";
import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const illustrationByIcon: Record<WeddingEvent["icon"], string> = {
  crescent: archIllustration,
  rings: ringsIllustration,
  lantern: mehndiIllustration,
  dinner: dinnerIllustration,
};

export function EventTimeline() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="The celebrations" title="Wedding Timeline" script />
        </Reveal>

        <div className="relative mt-14">
          {/* Center vertical line */}
          <span className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-champagne to-transparent" />

          <div className="flex flex-col gap-14">
            {wedding.events.map((event, i) => {
              const imageLeft = i % 2 === 0;
              return (
                <Reveal key={event.id} delay={i * 0.08}>
                  <div className="relative grid grid-cols-2 items-center gap-6">
                    {/* Diamond marker on the center line */}
                    <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-soft-white" />

                    {imageLeft ? (
                      <>
                        <div className="flex justify-end pr-4">
                          <img
                            src={illustrationByIcon[event.icon]}
                            alt=""
                            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                          />
                        </div>
                        <div className="pl-4 text-left">
                          <p className="font-script text-xl text-gold-gradient sm:text-2xl">
                            {event.time}
                          </p>
                          <h3 className="mt-1 text-sm tracking-[0.15em] uppercase text-deep">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground">{event.venue}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pr-4 text-right">
                          <p className="font-script text-xl text-gold-gradient sm:text-2xl">
                            {event.time}
                          </p>
                          <h3 className="mt-1 text-sm tracking-[0.15em] uppercase text-deep">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground">{event.venue}</p>
                        </div>
                        <div className="flex justify-start pl-4">
                          <img
                            src={illustrationByIcon[event.icon]}
                            alt=""
                            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}