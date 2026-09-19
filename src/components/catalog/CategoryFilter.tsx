import { FILTER_LABELS } from "../../data/products";

type CategoryFilterProps = {
  active: string;
  onChange: (category: string) => void;
};

export const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => (
  <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar coleções">
    {FILTER_LABELS.map((category) => {
      const isActive = active === category;
      return (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(category)}
          className={`cursor-pointer rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            isActive
              ? "border-accent bg-accent text-paper"
              : "border-line text-muted hover:border-accent/50 hover:text-fg"
          }`}
        >
          {category}
        </button>
      );
    })}
  </div>
);
