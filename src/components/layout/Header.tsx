import { useState, type KeyboardEvent } from "react";
import { NavLink } from "react-router-dom";
import { BrandLogo } from "../brand/BrandLogo";
import { ShopeeLink } from "../cta/ShopeeLink";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-xs font-semibold uppercase tracking-[0.15em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
    isActive ? "text-accent" : "text-muted hover:text-fg"
  }`;

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => setOpen((value) => !value);
  const handleCloseMenu = () => setOpen(false);

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleToggleMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <BrandLogo showWordmark imageClassName="h-10 w-10" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          <NavLink to="/" end className={linkClass}>
            Início
          </NavLink>
          <NavLink to="/catalogo" className={linkClass}>
            Catálogo
          </NavLink>
          <ShopeeLink className="!px-4 !py-2 !text-xs" />
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-line md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={handleToggleMenu}
          onKeyDown={handleToggleKeyDown}
        >
          <span className={`h-0.5 w-5 bg-fg transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-fg transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-4 py-4 md:hidden" aria-label="Menu mobile">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink to="/" end className={linkClass} onClick={handleCloseMenu}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalogo" className={linkClass} onClick={handleCloseMenu}>
                Catálogo
              </NavLink>
            </li>
            <li>
              <ShopeeLink className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
