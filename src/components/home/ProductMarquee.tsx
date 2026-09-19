import { products } from "../../data/products";

export const ProductMarquee = () => {
  const labels = products.map((p) => p.name);
  const track = [...labels, ...labels];

  return (
    <div className="overflow-hidden border-y border-line bg-paper-2 py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6">
        {track.map((name, index) => (
          <span key={`${name}-${index}`} className="flex items-center gap-12 font-brand text-sm uppercase text-muted md:text-base">
            {name}
            <i className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
};
