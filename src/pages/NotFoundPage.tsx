import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ui/ButtonLink";

export const NotFoundPage = () => (
  <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:px-6">
    <p className="font-brand text-5xl text-accent/40">404</p>
    <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
    <p className="mt-3 text-muted">Esse caminho não existe no catálogo.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <ButtonLink to="/" variant="fill">
        Início
      </ButtonLink>
      <Link to="/catalogo" className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
        Catálogo
      </Link>
    </div>
  </div>
);
