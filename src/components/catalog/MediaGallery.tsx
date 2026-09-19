import { useState, type KeyboardEvent, type MouseEvent } from "react";
import type { Product } from "../../types/product";
import { GalleryChevronIcon } from "./GalleryChevronIcon";
import { ProductGalleryModal } from "./ProductGalleryModal";
import { galleryArrowClass } from "./galleryNavStyles";

type MediaGalleryProps = {
  product: Product;
};

export const MediaGallery = ({ product }: MediaGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const activeImage = product.images[activeIndex] ?? product.images[0];
  const hasMultiple = product.images.length > 1;

  const goPrev = () => {
    if (!hasMultiple) return;
    setActiveIndex((index) => (index - 1 + product.images.length) % product.images.length);
  };

  const goNext = () => {
    if (!hasMultiple) return;
    setActiveIndex((index) => (index + 1) % product.images.length);
  };

  const handleThumbKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setActiveIndex(index);
  };

  const handleOpenModal = () => {
    if (!activeImage) return;
    setModalOpen(true);
  };

  const handleMainKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleOpenModal();
  };

  const handleArrowClick = (event: MouseEvent<HTMLButtonElement>, action: () => void) => {
    event.stopPropagation();
    event.preventDefault();
    action();
  };

  return (
    <>
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_0_60px_color-mix(in_srgb,#fb8c28_12%,transparent)] transition hover:border-accent/40">
          <button
            type="button"
            onClick={handleOpenModal}
            onKeyDown={handleMainKeyDown}
            className="group block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            aria-label="Abrir galeria de fotos em tela cheia"
          >
            {activeImage ? (
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            ) : null}
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={(event) => handleArrowClick(event, goPrev)}
                className={`${galleryArrowClass} left-2 md:left-3`}
                aria-label="Imagem anterior"
              >
                <GalleryChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={(event) => handleArrowClick(event, goNext)}
                className={`${galleryArrowClass} right-2 md:right-3`}
                aria-label="Próxima imagem"
              >
                <GalleryChevronIcon direction="right" />
              </button>
            </>
          ) : null}
        </div>

        {hasMultiple ? (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {product.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleThumbKeyDown(event, index)}
                aria-label={`Ver imagem ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeIndex === index ? "border-accent" : "border-line hover:border-accent/40"
                }`}
              >
                <img src={image.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <ProductGalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={product.images}
        initialIndex={activeIndex}
        title={product.name}
      />
    </>
  );
};
