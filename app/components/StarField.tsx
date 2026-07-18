"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.childElementCount > 0) return;

    for (let i = 0; i < 60; i++) {
      const s = document.createElement("span");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 4 + "s";
      el.appendChild(s);
    }
  }, []);

  return <div className="stars" ref={ref} />;
}
