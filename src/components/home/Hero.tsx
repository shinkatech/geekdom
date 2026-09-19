import { Link } from "react-router-dom";
import { ShopeeLink } from "../cta/ShopeeLink";
import { ButtonLink } from "../ui/ButtonLink";
import { SITE } from "../../config/site";

export const Hero = () => (
  <section className="relative min-h-[92vh] overflow-hidden border-b border-line">
    <div className="hero-glow slash-bg absolute inset-0" aria-hidden="true" />
    <div className="grain absolute inset-0" aria-hidden="true" />

    <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center md:px-6">
      <img
        src={SITE.logoSrc}
        alt=""
        className="h-24 w-24 rounded-full shadow-[0_0_60px_color-mix(in_srgb,#fb8c28_45%,transparent)] md:h-32 md:w-32"
      />
      <p className="mt-8 font-brand text-5xl uppercase leading-none tracking-tight text-fg md:text-8xl">
        GEEK<span className="text-accent">DOM</span>
      </p>
      <p className="mt-6 max-w-xl text-balance text-lg text-muted md:text-xl">{SITE.tagline}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ButtonLink to="/catalogo" variant="fill">
          Entrar no catálogo
        </ButtonLink>
        <ShopeeLink />
      </div>
      <Link
        to="/catalogo"
        className="mt-16 flex flex-col items-center gap-2 text-sm font-semibold tracking-wide text-muted transition hover:text-accent"
      >
        <span>Confira nossos produtos</span>
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" aria-hidden="true" />
      </Link>
    </div>
  </section>
);
