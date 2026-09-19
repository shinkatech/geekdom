import { Link } from "react-router-dom";
import type { CatalogCategory, Product } from "../../types/product";
import { useReveal } from "../../hooks/useReveal";
import { ProductCard } from "./ProductCard";
import { collectionProductGridClass } from "./productGridClasses";

type CategorySectionProps = {
  category: CatalogCategory;
  products: Product[];
};

export const CategorySection = ({ category, products }: CategorySectionProps) => {
  const revealRef = useReveal<HTMLElement>();

  if (products.length === 0) return null;

  const isWideBanner = category.id === "naruto";

  return (
    <section
      ref={revealRef}
      id={category.id}
      className="reveal scroll-mt-24 border-t border-line py-16 md:py-24"
      aria-labelledby={`category-${category.id}`}
    >
      <div className="relative w-full overflow-hidden rounded-2xl border border-line">
        <img
          src={category.bannerSrc}
          alt={category.bannerAlt}
          className={`w-full object-cover ${isWideBanner ? "aspect-[21/9] md:aspect-[3/1]" : "aspect-[21/9] md:max-h-[320px]"}`}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, #070708 0%, transparent 45%), linear-gradient(to right, color-mix(in srgb, ${category.accent} 25%, transparent), transparent 60%)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Coleção</p>
            <h2 id={`category-${category.id}`} className="mt-2 font-brand text-3xl uppercase text-fg md:text-5xl">
              {category.name}
            </h2>
          </div>
          <Link
            to={`/catalogo?categoria=${category.id}`}
            className="hidden shrink-0 rounded-full border border-accent/40 px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent-soft md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ver coleção
          </Link>
        </div>
      </div>

      <ul className={collectionProductGridClass}>
        {products.map((product) => (
          <li key={product.slug}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};
