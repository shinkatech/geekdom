type GalleryChevronIconProps = {
  direction: "left" | "right";
  className?: string;
};

export const GalleryChevronIcon = ({ direction, className = "h-6 w-6" }: GalleryChevronIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);
