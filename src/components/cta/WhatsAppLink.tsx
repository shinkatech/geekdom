import { buildWhatsAppUrl } from "../../config/site";

type WhatsAppLinkProps = {
  message: string;
  label?: string;
  className?: string;
};

export const WhatsAppLink = ({
  message,
  label = "Falar no WhatsApp",
  className = "",
}: WhatsAppLinkProps) => (
  <a
    href={buildWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium text-fg transition hover:border-accent/50 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${className}`.trim()}
    aria-label={`${label} — abre em nova aba`}
  >
    <span>{label}</span>
  </a>
);
