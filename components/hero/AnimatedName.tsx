"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/ThemeProvider";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const TARGET = "Raj Kumar Khadka.";
const SCRAMBLE_CYCLES = 8;   // how many random chars before settling
const LETTER_DELAY = 55;     // ms between each letter starting
const CYCLE_SPEED = 40;      // ms per random cycle

export default function AnimatedName() {
  const [chars, setChars] = useState<string[]>(() => TARGET.split("").map(() => ""));
  const { theme } = useTheme();
  const frameRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const letters = TARGET.split("");
    const settled = new Array(letters.length).fill(false);
    const cycles = new Array(letters.length).fill(0);
    const started = new Array(letters.length).fill(false);

    // Stagger start of each letter
    const startTimers = letters.map((_, i) =>
      setTimeout(() => {
        started[i] = true;
      }, i * LETTER_DELAY + 200)
    );

    const interval = setInterval(() => {
      setChars((prev) => {
        const next = [...prev];
        for (let i = 0; i < letters.length; i++) {
          if (settled[i]) {
            next[i] = letters[i];
            continue;
          }
          if (!started[i]) {
            next[i] = "";
            continue;
          }
          if (letters[i] === " " || letters[i] === ".") {
            settled[i] = true;
            next[i] = letters[i];
            continue;
          }
          if (cycles[i] >= SCRAMBLE_CYCLES) {
            settled[i] = true;
            next[i] = letters[i];
          } else {
            cycles[i]++;
            next[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        return next;
      });
    }, CYCLE_SPEED);

    frameRef.current = interval;
    return () => {
      clearInterval(interval);
      startTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <span
      aria-label={TARGET}
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
        fontSize: "clamp(2.4rem, 5.5vw, 6rem)",
        fontWeight: 700,
        letterSpacing: "-0.04em",
        lineHeight: 0.95,
        background: theme === "dark"
          ? "linear-gradient(135deg, #ffffff 0%, #00D4FF 55%, #7C3AED 100%)"
          : "none",
        WebkitBackgroundClip: theme === "dark" ? "text" : "unset",
        WebkitTextFillColor: theme === "dark" ? "transparent" : "unset",
        backgroundClip: theme === "dark" ? "text" : "unset",
        color: theme === "dark" ? undefined : "#6557F0",
        display: "inline-block",
      }}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: ch === "" ? 0 : 1,
            minWidth: ch === " " ? "0.3em" : undefined,
            transition: "opacity 0.1s",
            // Settled letters get a very subtle pop
            transform: ch === TARGET[i] && ch !== " " && ch !== "." ? "none" : undefined,
          }}
        >
          {ch === "" ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
