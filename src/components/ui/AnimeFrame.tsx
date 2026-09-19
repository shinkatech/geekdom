import type { ReactNode } from "react";

type AnimeFrameProps = {
  children: ReactNode;
  className?: string;
};

export const AnimeFrame = ({ children, className = "" }: AnimeFrameProps) => (
  <div
    className={`relative isolate overflow-hidden rounded-2xl border border-line bg-paper-2 shadow-[0_0_0_1px_color-mix(in_srgb,#fb8c28_12%,transparent)] ${className}`}
  >
    <span
      className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rotate-12 bg-accent/20 blur-2xl"
      aria-hidden="true"
    />
    <span
      className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      aria-hidden="true"
    />
    {children}
  </div>
);
