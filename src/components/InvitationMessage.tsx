import { useState } from "react";

import { wedding } from "@/config/wedding";

import invitationFrame from "@/assets/backgroundframe1.png";
import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

export function InvitationMessage() {
  const [ratio, setRatio] = useState<number | null>(null);

  return (
    <section className="bg-cream px-4 py-10 sm:px-6">
      <div
        className="relative mx-auto w-full max-w-xl"
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        {/* Full frame image, locked to its true aspect ratio so it fills the box with no empty gaps */}
        <img
          src={invitationFrame}
          alt=""
          aria-hidden="true"
          onLoad={(e) => {
            const img = e.currentTarget;
            setRatio(img.naturalWidth / img.naturalHeight);
          }}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
        />

        <div className="absolute inset-x-[12%] inset-y-[10%] flex flex-col items-center justify-center overflow-y-auto text-center sm:inset-x-[16%] sm:inset-y-[12%]">
          <Reveal>
            <p className="text-[0.55rem] leading-tight tracking-[0.12em] text-muted-foreground uppercase sm:text-[0.65rem] sm:tracking-[0.16em]">
              You are invited to the
              <br />
              {wedding.welcomeTitle} of
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-script mt-2 text-2xl text-gold-gradient sm:text-4xl">
              {wedding.bride.firstName}
            </h3>
            <p className="mt-0.5 text-[0.5rem] tracking-[0.12em] text-muted-foreground uppercase sm:text-[0.58rem] sm:tracking-[0.16em]">
              {wedding.bride.parents}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="font-script mt-1.5 block text-sm text-champagne sm:text-lg">
              with
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-script mt-1 text-2xl text-gold-gradient sm:text-4xl">
              {wedding.groom.firstName}
            </h3>
            <p className="mt-0.5 text-[0.5rem] tracking-[0.12em] text-muted-foreground uppercase sm:text-[0.58rem] sm:tracking-[0.16em]">
              {wedding.groom.parents}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <Divider className="mt-3" />
            <p className="mt-3 text-[0.6rem] leading-snug text-deep/85 sm:text-[0.72rem]">
              {wedding.invitationMessage}
            </p>
            <p className="mt-3 text-[0.52rem] italic leading-snug text-muted-foreground sm:text-[0.62rem]">
              {wedding.quote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}