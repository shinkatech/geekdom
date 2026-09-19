import { Link } from "react-router-dom";
import { SITE } from "../../config/site";
import { BrandLogo } from "../brand/BrandLogo";
import { InstagramIcon } from "../ui/InstagramIcon";

export const Footer = () => (
  <footer className="border-t border-line bg-paper-2">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-start md:justify-between md:px-6">
      <div>
        <BrandLogo showWordmark imageClassName="h-12 w-12" />
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{SITE.tagline}</p>
        <a
          href={SITE.shinkaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2.5 text-xs text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Desenvolvido e mantido por ${SITE.shinkaName} — abre em nova aba`}
        >
          <img
            src={SITE.shinkaIconSrc}
            alt=""
            className="h-6 w-6 rounded-md"
            width={24}
            height={24}
          />
          <span>
            Desenvolvido e mantido por <span className="font-semibold text-fg">{SITE.shinkaName}</span>
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-5 sm:items-end">
        <nav className="flex flex-wrap items-center gap-5 text-sm" aria-label="Rodapé">
          <Link to="/catalogo" className="text-muted hover:text-accent focus-visible:ring-2 focus-visible:ring-accent">
            Catálogo
          </Link>
          <a
            href={SITE.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
          >
            Shopee
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Instagram @lojageekdom — abre em nova aba"
          >
            <InstagramIcon />
            <span>@lojageekdom</span>
          </a>
        </nav>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </div>
  </footer>
);
