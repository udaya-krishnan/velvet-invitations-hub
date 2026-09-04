import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

import { Reveal } from "./Reveal";
import { CornerFrame, SectionHeading } from "./Ornament";

function getTimeLeft(targetDate: string) {
  const target = new Date(targetDate).getTime();

  if (Number.isNaN(target)) {
    console.error("Invalid wedding date:", targetDate);
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(wedding.dateISO)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(wedding.dateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-20">
      <div className="relative mx-auto max-w-md text-center">
        <CornerFrame />

        <Reveal>
          <SectionHeading
            title="The Celebration Begins"
            script
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <div className="mt-8 grid grid-cols-4 gap-4">
              <div>
                <p className="text-3xl font-light tracking-wide text-gold sm:text-4xl">
                  {timeLeft.days}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Days
                </p>
              </div>

              <div>
                <p className="text-3xl font-light tracking-wide text-gold sm:text-4xl">
                  {timeLeft.hours}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Hours
                </p>
              </div>

              <div>
                <p className="text-3xl font-light tracking-wide text-gold sm:text-4xl">
                  {timeLeft.minutes}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Minutes
                </p>
              </div>

              <div>
                <p className="text-3xl font-light tracking-wide text-gold sm:text-4xl">
                  {timeLeft.seconds}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm italic text-muted-foreground">
            {wedding.time}
          </p>
        </Reveal>
      </div>
    </section>
  );
}