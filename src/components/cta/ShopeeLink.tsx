import { SITE } from "../../config/site";
import { ShopeeLogo } from "../ui/ShopeeLogo";

type ShopeeLinkProps = {
  variant?: "default" | "emphasis";
  className?: string;
  label?: string;
};

const baseClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full border px-6 py-3 text-sm font-semibold normal-case tracking-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variantClass: Record<NonNullable<ShopeeLinkProps["variant"]>, string> = {
  default:
    "border-line bg-surface text-fg hover:border-[#ee4d2d]/60 hover:bg-[#ee4d2d]/8",
  emphasis:
    "border-[#ee4d2d]/45 bg-[#ee4d2d]/10 text-fg hover:border-[#ee4d2d] hover:bg-[#ee4d2d]/16",
};

export const ShopeeLink = ({
  variant = "default",
  className = "",
  label = SITE.shopeeLabel,
}: ShopeeLinkProps) => (
  <a
    href={SITE.shopeeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`${baseClass} ${variantClass[variant]} ${className}`.trim()}
    aria-label={`${label} — abre em nova aba`}
  >
    <ShopeeLogo className="h-5 w-5 shrink-0" />
    <span>{label}</span>
  </a>
);
