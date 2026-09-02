import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import coupleHero from "@/assets/couple-hero.mp4.asset.json";
import { wedding } from "@/config/wedding";

export function HeroSection({ start }: { start: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Hold the final frame instead of looping or resetting.
    const onTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - 0.06) {
        v.pause();
        v.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
    const onEnded = () => v.pause();
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    if (!start) return;
    const v = videoRef.current;
    if (v && v.paused && v.currentTime === 0) void v.play().catch(() => {});
  }, [start]);

  return (
    <section className="relative isolate w-full overflow-hidden" style={{ height: "100svh" }}>
      <video
        ref={videoRef}
        src={coupleHero.url}
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/45" />

      <div className="relative flex h-full flex-col items-center justify-between px-6 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: start ? 1 : 0, y: start ? 0 : 16 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-sm"
        >
          <p className="tracking-luxe text-[0.6rem] uppercase text-cream/90 sm:text-[0.68rem]">
            {wedding.welcomeLine}
          </p>
          <h1 className="font-script mt-2 text-4xl text-champagne drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] sm:text-5xl">
            {wedding.welcomeTitle}
          </h1>
          <p className="mt-2 text-xs italic text-cream/85">{wedding.welcomeJoin}</p>
          <h2 className="font-script mt-1 text-5xl text-soft-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:text-6xl">
            {wedding.bride.firstName}
          </h2>
          <span className="font-script block text-2xl text-champagne">&amp;</span>
          <h2 className="font-script text-5xl text-soft-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:text-6xl">
            {wedding.groom.firstName}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto max-w-sm"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-champagne/70" />
            <p className="tracking-luxe text-[0.62rem] uppercase text-cream sm:text-xs">
              {wedding.date}
            </p>
            <span className="h-px w-10 bg-champagne/70" />
          </div>
          <p className="mt-10 text-[0.6rem] tracking-[0.28em] uppercase text-cream/75">
            Scroll to discover
          </p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="mx-auto mt-2 text-champagne/80"
          >
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.1" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
