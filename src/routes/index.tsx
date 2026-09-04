import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

import { Countdown } from "@/components/Countdown";
import { DressCode } from "@/components/DressCode";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { EventTimeline } from "@/components/EventTimeline";
import { Footer } from "@/components/Footer";
import { GuestInfo } from "@/components/GuestInfo";
import { HeroSection } from "@/components/HeroSection";
import { InvitationMessage } from "@/components/InvitationMessage";
import { MusicControl } from "@/components/MusicControl";
import { RSVP } from "@/components/RSVP";
import { SaveTheDate } from "@/components/SaveTheDate";
import { ScratchReveal } from "@/components/ScratchReveal";
import { VenueSection } from "@/components/VenueSection";
import { Wishes } from "@/components/Wishes";
import { wedding } from "@/config/wedding";

const title = `${wedding.bride.firstName} & ${wedding.groom.firstName} — Wedding Invitation`;
const description = `Join us to celebrate the ${wedding.welcomeTitle} of ${wedding.bride.firstName} and ${wedding.groom.firstName} on ${wedding.date}. Open the envelope for details, timings, venue and RSVP.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="bg-cream">
      {!introDone ? <EnvelopeIntro onComplete={() => setIntroDone(true)} /> : null}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <HeroSection start={introDone} />
        <ScratchReveal />
        <InvitationMessage />
        <EventTimeline />
        <SaveTheDate />
        {/* <Countdown /> */}
        <VenueSection />
        <DressCode />
        <GuestInfo />
        {/* <RSVP /> */}
        {/* <Wishes /> */}
        <Footer />
      </motion.div>

      {introDone ? <MusicControl /> : null}
    </main>
  );
}
