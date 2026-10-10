"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

function format() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: SITE.timeZone,
  }).format(new Date());
}

/** Live clock in Addis Ababa time. Renders a placeholder until mounted to avoid hydration mismatch. */
export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--"} GMT+3
    </span>
  );
}
