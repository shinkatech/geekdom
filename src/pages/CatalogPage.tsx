import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CategoryFilter } from "../components/catalog/CategoryFilter";
import { CategorySection } from "../components/catalog/CategorySection";
import { ProductCard } from "../components/catalog/ProductCard";
import { catalogProductGridClass } from "../components/catalog/productGridClasses";
import { useReveal } from "../hooks/useReveal";
import { catalogCategories, getCategoryById } from "../data/categories";
import { FILTER_LABELS, filterProductsByLabel } from "../data/products";

const paramToLabel: Record<string, (typeof FILTER_LABELS)[number]> = {
  naruto: "Naruto",
  anime: "Anime",
  pokemon: "Pokémon",
  kawaii: "Kawaii",
};

const labelToCategoryId: Record<string, string> = {
  Naruto: "naruto",
  Anime: "anime",
  "Pokémon": "pokemon",
  Kawaii: "kawaii",
};

const labelFromParam = (param: string | null): (typeof FILTER_LABELS)[number] => {
  if (param && paramToLabel[param]) return paramToLabel[param];
  return "Todos";
};

export const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const paramCategory = searchParams.get("categoria");
  const [filter, setFilter] = useState<(typeof FILTER_LABELS)[number]>(labelFromParam(paramCategory));
  const headRef = useReveal<HTMLElement>();

  useEffect(() => {
    setFilter(labelFromParam(paramCategory));
  }, [paramCategory]);

  const filteredProducts = useMemo(() => filterProductsByLabel(filter), [filter]);
  const showAllCollections = filter === "Todos";
  const activeCategoryId = labelToCategoryId[filter];
  const activeCategory = activeCategoryId ? getCategoryById(activeCategoryId) : undefined;

  return (
    <div className="pb-20">
      <section
        ref={headRef}
        className="reveal border-b border-line bg-paper-2 px-4 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Catálogo</p>
          <h1 className="mt-4 font-brand text-4xl uppercase leading-none text-fg md:text-6xl">
            Lightboxes
            <br />
            <span className="text-accent">3D LED</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            Cada peça é recorte em camadas com luz LED — escolha sua coleção e veja detalhes, molduras e fotos reais.
          </p>
          <div className="mt-10">
            <CategoryFilter active={filter} onChange={(value) => setFilter(value as (typeof FILTER_LABELS)[number])} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {showAllCollections ? (
          catalogCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              products={filteredProducts.filter((p) => p.categoryId === category.id)}
            />
          ))
        ) : activeCategory ? (
          <CategorySection category={activeCategory} products={filteredProducts} />
        ) : (
          <ul className={catalogProductGridClass}>
            {filteredProducts.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
