import { wedding } from "@/config/wedding";

import { Divider, SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function InvitationMessage() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <SectionHeading eyebrow="Together with their families" title="The Invitation" />
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-script mt-8 text-4xl text-gold-gradient sm:text-5xl">
            {wedding.bride.fullName}
          </h3>
          <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {wedding.bride.parents}
          </p>
          <span className="font-script mt-4 block text-3xl text-champagne">&amp;</span>
          <h3 className="font-script mt-2 text-4xl text-gold-gradient sm:text-5xl">
            {wedding.groom.fullName}
          </h3>
          <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {wedding.groom.parents}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Divider className="mt-8" />
          <p className="mt-6 text-base leading-relaxed text-deep/85">{wedding.invitationMessage}</p>
          <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">
            {wedding.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
