import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "fill" | "ghost" | "shopee";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

type RouterLinkProps = BaseProps &
  LinkProps & {
    to: string;
    href?: never;
  };

const variantClasses: Record<ButtonVariant, string> = {
  fill:
    "bg-accent text-paper hover:bg-[color-mix(in_srgb,#fb8c28_88%,white)] focus-visible:ring-accent",
  ghost:
    "border border-line bg-transparent text-fg hover:border-accent hover:text-accent focus-visible:ring-accent",
  shopee:
    "border border-accent/40 bg-accent-soft text-fg hover:border-accent focus-visible:ring-accent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export const ButtonLink = (props: AnchorProps | RouterLinkProps) => {
  const { children, variant = "fill", className = "", ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ("to" in rest && rest.to) {
    const { to, ...linkRest } = rest as RouterLinkProps;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { href, ...anchorRest } = rest as AnchorProps;
  return (
    <a href={href} className={classes} {...anchorRest}>
      {children}
    </a>
  );
};
