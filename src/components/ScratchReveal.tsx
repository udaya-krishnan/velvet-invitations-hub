import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { wedding } from "@/config/wedding";
import { downloadIcs, googleCalendarUrl } from "@/utils/calendar";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const THRESHOLD = 0.55;

export function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [revealed, setRevealed] = useState(false);

  const paintCoating = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, "#EFE3CE");
    g.addColorStop(0.45, "#D9C09C");
    g.addColorStop(1, "#E7D8BE");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    // Subtle woven texture
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.lineWidth = 1;
    for (let i = -height; i < width; i += 12) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(98,84,72,0.55)";
    ctx.textAlign = "center";
    ctx.font = "500 13px Georgia, serif";
    ctx.fillText("SCRATCH TO REVEAL", width / 2, height / 2 + 4);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = wrap.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    paintCoating(canvas);
  }, [paintCoating]);

  const scratchedRatio = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return 0;
    const step = 8;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clear = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 4 * step) {
      total += 1;
      if (data[i] === 0) clear += 1;
    }
    return total === 0 ? 0 : clear / total;
  };

  const erase = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = canvas.width / rect.width;
    const x = (e.clientX - rect.left) * dpr;
    const y = (e.clientY - rect.top) * dpr;
    const radius = (window.innerWidth < 420 ? 24 : 30) * dpr;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = radius * 2;
    if (last.current) {
      ctx.beginPath();
      ctx.moveTo(last.current.x, last.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    last.current = { x, y };
  };

  const onDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = true;
    last.current = null;
    e.currentTarget.setPointerCapture(e.pointerId);
    erase(e);
  };

  const onMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    erase(e);
  };

  const onUp = () => {
    drawing.current = false;
    last.current = null;
    if (!revealed && scratchedRatio() >= THRESHOLD) setRevealed(true);
  };

  const calendarEvent = {
    title: `${wedding.bride.firstName} & ${wedding.groom.firstName} — ${wedding.welcomeTitle}`,
    description: wedding.invitationMessage,
    location: `${wedding.venue.name}, ${wedding.venue.address}`,
    startISO: wedding.dateISO,
    endISO: wedding.endISO,
  };

  return (
    <section className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-md">
        <Reveal>
          <SectionHeading eyebrow="A special date awaits" title="Scratch to Reveal" script />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={wrapRef}
            className="card-luxe relative mt-10 h-56 w-full select-none overflow-hidden rounded-sm sm:h-64"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-soft-white px-6 text-center">
              <p className="tracking-luxe text-[0.6rem] uppercase text-gold">Save the Date</p>
              <p className="font-script text-3xl text-gold-gradient sm:text-4xl">{wedding.date}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {wedding.time}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => downloadIcs(calendarEvent, "wedding-invitation.ics")}
                  className="rounded-sm border border-gold/60 bg-champagne/20 px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase text-deep transition-colors hover:bg-champagne/40"
                >
                  Add to Calendar
                </button>
                <a
                  href={googleCalendarUrl(calendarEvent)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.6rem] tracking-[0.18em] uppercase text-gold underline-offset-4 hover:underline"
                >
                  Google
                </a>
              </div>
            </div>

            <motion.canvas
              ref={canvasRef}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerLeave={onUp}
              onPointerCancel={onUp}
              animate={{ opacity: revealed ? 0 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 touch-none"
              style={{ pointerEvents: revealed ? "none" : "auto" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
