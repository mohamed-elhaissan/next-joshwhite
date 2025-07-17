"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function UseLenis({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
