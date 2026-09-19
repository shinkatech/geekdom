import { Link } from "react-router-dom";
import { SITE } from "../../config/site";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  showWordmark?: boolean;
};

export const BrandLogo = ({
  className = "",
  imageClassName = "h-11 w-11",
  showWordmark = false,
}: BrandLogoProps) => (
  <Link
    to="/"
    className={`inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
    aria-label={`${SITE.name} — início`}
  >
    <img src={SITE.logoSrc} alt="" className={`rounded-full object-cover ${imageClassName}`} />
    {showWordmark ? (
      <span className="font-brand text-lg leading-none tracking-tight text-fg md:text-xl">
        GEEK<span className="text-accent">DOM</span>
      </span>
    ) : null}
  </Link>
);
