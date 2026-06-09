import { cn } from "@/lib/cn";

interface TechPillProps {
  label: string;
  className?: string;
}

export function TechPill({ label, className }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent/90 transition-all duration-300 hover:border-accent/50 hover:bg-accent/15 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]",
        className
      )}
    >
      {label}
    </span>
  );
}
