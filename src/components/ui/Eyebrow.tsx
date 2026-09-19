import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
};

export const Eyebrow = ({ children }: EyebrowProps) => (
  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
    {children}
  </p>
);
