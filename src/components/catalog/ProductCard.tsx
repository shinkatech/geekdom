import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const cover = product.images[0];

  return (
    <article className="group h-full">
      <Link
        to={`/catalogo/${product.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface outline-none transition duration-500 hover:border-accent/50 hover:shadow-[0_0_32px_color-mix(in_srgb,#fb8c28_18%,transparent)] focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`Ver ${product.name}`}
      >
        <div className="relative aspect-[5/6] overflow-hidden bg-paper-2 sm:aspect-square">
          <img
            src={cover?.src ?? "/media/placeholder.svg"}
            alt={cover?.alt ?? product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-paper/15 to-transparent opacity-95" />
          <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent md:text-xs">
              {product.tags[0]}
            </p>
            <h3 className="mt-1 font-brand text-base leading-tight text-fg md:text-lg lg:text-xl">
              {product.name}
            </h3>
          </div>
        </div>
        <p className="mt-auto px-3.5 py-2.5 text-sm font-medium text-accent md:px-4 md:py-3">
          {product.price}
        </p>
      </Link>
    </article>
  );
};
