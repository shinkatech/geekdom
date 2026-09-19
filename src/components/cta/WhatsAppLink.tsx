import { buildWhatsAppUrl } from "../../config/site";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

type WhatsAppLinkProps = {
  message: string;
  label?: string;
  className?: string;
};

const baseClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold normal-case tracking-normal text-fg transition-colors hover:border-[#25d366]/50 hover:bg-[#25d366]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export const WhatsAppLink = ({
  message,
  label = "Falar no WhatsApp",
  className = "",
}: WhatsAppLinkProps) => (
  <a
    href={buildWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`${baseClass} ${className}`.trim()}
    aria-label={`${label} — abre em nova aba`}
  >
    <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25d366]" />
    <span>{label}</span>
  </a>
);
