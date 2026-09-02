import venueImg from "@/assets/venue.jpg";
import { wedding } from "@/config/wedding";
import { mapsDirectionsUrl } from "@/utils/calendar";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function VenueSection() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="Where we celebrate" title="The Venue" script />
        </Reveal>

        <Reveal delay={0.1}>
          {/* Replace venue.jpg with a real venue photograph when available. */}
          <div className="card-luxe mt-10 overflow-hidden rounded-sm p-2">
            <img
              src={venueImg}
              alt="Wedding venue"
              loading="lazy"
              width={1024}
              height={768}
              className="h-52 w-full rounded-sm object-cover sm:h-60"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            <h3 className="text-lg tracking-[0.2em] uppercase text-deep">{wedding.venue.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {wedding.venue.address}
            </p>
            <a
              href={mapsDirectionsUrl(wedding.venue.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-sm border border-gold/60 bg-champagne/25 px-6 py-3 text-[0.62rem] tracking-[0.24em] uppercase text-deep transition-colors hover:bg-champagne/45"
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
