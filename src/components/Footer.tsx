import { wedding } from "@/config/wedding";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-ivory px-6 pt-16 pb-14 text-center">
      <Reveal>
        <Divider />
        <p className="mt-8 text-[0.62rem] tracking-[0.26em] uppercase text-gold">
          {wedding.footer.signOff}
        </p>
        <p className="font-script mt-3 text-4xl text-gold-gradient sm:text-5xl">
          {wedding.initials}
        </p>
        <p className="mt-4 text-sm text-deep/80">{wedding.footer.thanks}</p>
        <p className="mt-8 text-[0.55rem] tracking-[0.2em] uppercase text-muted-foreground">
          {wedding.date}
        </p>
      </Reveal>
    </footer>
  );
}
