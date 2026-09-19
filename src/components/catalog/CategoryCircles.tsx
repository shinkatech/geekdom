import { Link } from "react-router-dom";
import { catalogCategories } from "../../data/categories";

export const CategoryCircles = () => (
  <section aria-labelledby="categories-heading">
    <div className="flex items-center justify-between gap-4">
      <h2 id="categories-heading" className="text-lg font-bold uppercase tracking-wide text-fg">
        Categorias
      </h2>
      <Link
        to="/catalogo"
        className="text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Ver tudo ›
      </Link>
    </div>

    <ul className="mt-4 flex gap-4 overflow-x-auto pb-2">
      {catalogCategories.map((category) => (
        <li key={category.id} className="shrink-0">
          <Link
            to={`/catalogo?categoria=${category.id}`}
            className="group flex w-20 flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-line bg-surface shadow-sm transition group-hover:border-accent">
              <img
                src={category.thumbSrc}
                alt=""
                className="h-full w-full scale-150 object-cover"
              />
            </span>
            <span className="text-center text-xs font-medium text-fg">{category.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
