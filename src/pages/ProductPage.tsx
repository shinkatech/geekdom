import { Link, useParams } from "react-router-dom";
import { MediaGallery } from "../components/catalog/MediaGallery";
import { ShopeeLink } from "../components/cta/ShopeeLink";
import { WhatsAppLink } from "../components/cta/WhatsAppLink";
import { SITE } from "../config/site";
import { getCategoryById } from "../data/categories";
import { getProductBySlug } from "../data/products";

export const ProductPage = () => {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center md:px-6">
        <h1 className="font-brand text-2xl uppercase">Produto não encontrado</h1>
        <Link to="/catalogo" className="mt-6 inline-block text-accent hover:underline">
          Voltar ao catálogo
        </Link>
      </div>
    );
  }

  const category = getCategoryById(product.categoryId);
  const whatsappMessage = `Olá! Tenho interesse no lightbox "${product.name}" do site ${SITE.name}.`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <nav className="text-sm text-muted" aria-label="Trilha">
        <Link to="/catalogo" className="hover:text-accent">
          Catálogo
        </Link>
        <span className="mx-2">/</span>
        {category ? (
          <>
            <Link to={`/catalogo?categoria=${category.id}`} className="hover:text-accent">
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        ) : null}
        <span className="text-fg">{product.name}</span>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <MediaGallery product={product} />

        <div className="lg:pt-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{category?.name}</p>
          <h1 className="mt-3 font-brand text-2xl uppercase leading-tight md:text-3xl lg:text-4xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted">{product.shortTitle}</p>
          <p className="mt-8 text-3xl font-bold text-accent">{product.price}</p>
          <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                {tag}
              </li>
            ))}
          </ul>

          {product.specs.length > 0 ? (
            <dl className="mt-10 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted">{spec.label}</dt>
                  <dd className="mt-1 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ShopeeLink variant="emphasis" label="Comprar na Shopee" className="sm:flex-1" />
            <WhatsAppLink message={whatsappMessage} className="sm:flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
