import { NavLink } from "react-router-dom";

const tabClass = ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
    isActive ? "nav-tab-active text-accent" : "text-muted hover:text-fg"
  }`;

export const StoreNav = () => (
  <nav
    className="border-b border-line bg-surface"
    aria-label="Navegação da loja"
  >
    <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 md:px-4">
      <NavLink to="/" end className={tabClass}>
        Página principal
      </NavLink>
      <NavLink to="/catalogo" end className={tabClass}>
        Todos os produtos
      </NavLink>
      <NavLink to="/catalogo?categoria=naruto" className={tabClass}>
        Naruto
      </NavLink>
    </div>
  </nav>
);
