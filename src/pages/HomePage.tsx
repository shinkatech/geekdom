import { Link } from "react-router-dom";
import { CategorySection } from "../components/catalog/CategorySection";
import { ProductCard } from "../components/catalog/ProductCard";
import { ShopeeLink } from "../components/cta/ShopeeLink";
import { Hero } from "../components/home/Hero";
import { ProductMarquee } from "../components/home/ProductMarquee";
import { useReveal } from "../hooks/useReveal";
import { catalogCategories } from "../data/categories";
import { getFeaturedProducts, getProductsByCategoryId } from "../data/products";

export const HomePage = () => {
  const featuredRef = useReveal<HTMLElement>();
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <>
      <Hero />
      <ProductMarquee />

      <section ref={featuredRef} className="reveal mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Destaques</p>
            <h2 className="mt-3 font-brand text-3xl uppercase text-fg md:text-4xl">Peças em evidência</h2>
          </div>
          <Link
            to="/catalogo"
            className="text-sm font-semibold text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ver catálogo completo →
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {featured.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {catalogCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            products={getProductsByCategoryId(category.id)}
          />
        ))}
      </div>

      <section className="border-t border-line bg-paper-2 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-brand text-3xl uppercase text-fg md:text-4xl">
            Pronto para levar<span className="text-accent">?</span>
          </h2>
          <p className="mt-4 text-muted">
            Compra pela Shopee com a mesma qualidade que você vê aqui. Dúvidas? Chama no Instagram.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ShopeeLink variant="emphasis" label="Ir para a Shopee" />
          </div>
        </div>
      </section>
    </>
  );
};
