import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import coupleHero from "@/assets/couple_walking.mp4";
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
        src={coupleHero}
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/45" />

      {/* Bottom fade into the next section's background color */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ivory sm:h-56" />

      <div className="relative flex h-full flex-col items-center justify-between px-6 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: start ? 1 : 0, y: start ? 0 : 16 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-sm"
        >
          {/* "Welcome to the" — thin, letter-spaced caps */}
          <p className="tracking-luxe text-[0.62rem] font-light uppercase text-cream/90 sm:text-xs">
            {wedding.welcomeLine}
          </p>

          {/* "Nikkah Ceremony" — large flowing script */}
          <h1 className="font-script mt-3 text-[2.75rem] leading-[1.05] text-champagne drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] sm:text-[3.5rem]">
            {wedding.welcomeTitle}
          </h1>

          {/* "of" — small italic */}
          <p className="mt-2 text-xs italic tracking-wide text-cream/85">
            {wedding.welcomeJoin}
          </p>

          {/* Bride & groom names, script, with a small nested ampersand */}
          <div className="mt-3 flex flex-col items-center">
            <h2 className="font-script text-5xl leading-none text-soft-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:text-6xl">
              {wedding.bride.firstName}
            </h2>
            <span className="font-script -my-1 text-xl text-champagne/90 sm:text-2xl">
              &amp;
            </span>
            <h2 className="font-script text-5xl leading-none text-soft-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:text-6xl">
              {wedding.groom.firstName}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto max-w-sm"
        >
          <p className="mt-10 text-[0.6rem] tracking-[0.28em] uppercase text-cream/75">
            Scroll to discover
          </p>
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="mx-auto mt-2 text-champagne/80"
            animate={start ? { y: [0, 6, 0] } : { y: 0 }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.1" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}