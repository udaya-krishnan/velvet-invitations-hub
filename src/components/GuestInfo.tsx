import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function GuestInfo() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="Good to know" title="For Our Wonderful Guests" script />
        </Reveal>

        <div className="mt-10 space-y-4">
          {wedding.guestInformation.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="card-luxe rounded-sm px-5 py-5">
                <h3 className="text-[0.65rem] tracking-[0.24em] uppercase text-gold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-deep/85">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
