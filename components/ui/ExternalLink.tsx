import { cn } from "@/lib/cn";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function ExternalLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(className)}
    >
      {children}
    </a>
  );
}
