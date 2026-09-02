import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function DressCode() {
  return (
    <section className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <SectionHeading eyebrow="What to wear" title="Dress Code" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm leading-relaxed text-deep/85">
            {wedding.dressCode.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap items-start justify-center gap-x-4 gap-y-5">
            {wedding.dressCode.colors.map((c) => (
              <li key={c.name} className="w-14">
                <span
                  className="mx-auto block h-11 w-11 rounded-full border border-beige shadow-[inset_0_1px_6px_rgba(0,0,0,0.06)]"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />
                <span className="mt-2 block text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground">
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
