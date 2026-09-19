import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import type { ProductMedia } from "../../types/product";
import { GalleryChevronIcon } from "./GalleryChevronIcon";
import { galleryArrowClass } from "./galleryNavStyles";

type ProductGalleryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: ProductMedia[];
  initialIndex: number;
  title: string;
};

const iconButtonClass =
  "flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line bg-surface/90 text-fg backdrop-blur transition hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const CloseIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ZoomIcon = ({ zoomed }: { zoomed: boolean }) => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    {zoomed ? (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35M8 11h6" />
      </>
    ) : (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </>
    )}
  </svg>
);

const FullscreenIcon = ({ active }: { active: boolean }) => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    {active ? (
      <>
        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
      </>
    ) : (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
      </>
    )}
  </svg>
);

export const ProductGalleryModal = ({
  isOpen,
  onClose,
  images,
  initialIndex,
  title,
}: ProductGalleryModalProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null);
  const didDragRef = useRef(false);

  const zoomScale = 1.85;

  const activeImage = images[activeIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  const resetView = useCallback(() => {
    setIsZoomed(false);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    dragStateRef.current = null;
  }, []);

  const goPrev = useCallback(() => {
    if (images.length < 2) return;
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
    resetView();
  }, [images.length, resetView]);

  const goNext = useCallback(() => {
    if (images.length < 2) return;
    setActiveIndex((index) => (index + 1) % images.length);
    resetView();
  }, [images.length, resetView]);

  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setActiveIndex(initialIndex);
    resetView();
  }, [isOpen, initialIndex, resetView]);

  useEffect(() => {
    if (isZoomed) return;
    setPan({ x: 0, y: 0 });
  }, [isZoomed]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
          return;
        }
        handleClose();
        return;
      }
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goPrev, goNext, handleClose]);

  const handleToggleZoom = () => {
    setIsZoomed((value) => {
      if (value) setPan({ x: 0, y: 0 });
      return !value;
    });
  };

  const handleViewportClick = () => {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }
    handleToggleZoom();
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    viewportRef.current?.setPointerCapture(event.pointerId);
    setIsDragging(true);
    didDragRef.current = false;
    dragStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragStateRef.current;
    if (!isDragging || !drag || !isZoomed) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      didDragRef.current = true;
    }

    setPan({
      x: drag.panX + deltaX,
      y: drag.panY + deltaY,
    });
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    dragStateRef.current = null;
  };

  const handleToggleFullscreen = async () => {
    const stage = stageRef.current;
    if (!stage) return;

    if (!document.fullscreenElement) {
      await stage.requestFullscreen().catch(() => {});
      return;
    }

    await document.exitFullscreen().catch(() => {});
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    handleClose();
  };

  const handleThumbKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setActiveIndex(index);
    resetView();
  };

  if (!isOpen || !activeImage) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de fotos: ${title}`}
      onClick={handleBackdropClick}
    >
      <div
        className="flex h-[min(92vh,720px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl lg:h-[min(85vh,640px)] lg:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          ref={stageRef}
          className="relative flex min-h-0 flex-1 flex-col bg-surface lg:min-w-0"
        >
          <div className="absolute right-3 top-3 z-10 flex gap-2">
            <button
              type="button"
              onClick={handleToggleZoom}
              className={iconButtonClass}
              aria-label={isZoomed ? "Reduzir zoom" : "Ampliar imagem"}
              aria-pressed={isZoomed}
            >
              <ZoomIcon zoomed={isZoomed} />
            </button>
            <button
              type="button"
              onClick={handleToggleFullscreen}
              className={iconButtonClass}
              aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
              aria-pressed={isFullscreen}
            >
              <FullscreenIcon active={isFullscreen} />
            </button>
            <button type="button" onClick={handleClose} className={iconButtonClass} aria-label="Fechar galeria">
              <CloseIcon />
            </button>
          </div>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className={`${galleryArrowClass} left-2 md:left-4`}
                aria-label="Imagem anterior"
              >
                <GalleryChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className={`${galleryArrowClass} right-2 md:right-4`}
                aria-label="Próxima imagem"
              >
                <GalleryChevronIcon direction="right" />
              </button>
            </>
          ) : null}

          <div
            ref={viewportRef}
            className={`flex flex-1 select-none items-stretch justify-center overflow-hidden p-3 touch-none ${
              isZoomed
                ? isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : "cursor-zoom-in"
            }`}
            onClick={handleViewportClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onKeyDown={(event) => {
              if (event.key !== "Enter" && event.key !== " ") return;
              event.preventDefault();
              handleToggleZoom();
            }}
            role="button"
            tabIndex={0}
            aria-label={
              isZoomed
                ? "Arraste para mover a imagem. Clique para reduzir o zoom."
                : "Clique para ampliar a imagem"
            }
          >
            <img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              draggable={false}
              style={{
                transform: isZoomed
                  ? `translate(${pan.x}px, ${pan.y}px) scale(${zoomScale})`
                  : "translate(0, 0) scale(1)",
              }}
              className={`box-border h-full min-h-[min(50vh,420px)] w-full border-[12px] border-paper-2 object-cover will-change-transform lg:min-h-[min(65vh,520px)] ${
                isDragging ? "" : "transition-transform duration-200 ease-out"
              }`}
            />
          </div>

          {hasMultiple ? (
            <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
              {activeIndex + 1} / {images.length}
            </p>
          ) : null}
        </div>

        <aside className="flex max-h-[38vh] shrink-0 flex-col border-t border-line lg:w-72 lg:max-h-none lg:border-l lg:border-t-0">
          <p className="line-clamp-2 border-b border-line px-4 py-3 text-sm font-medium leading-snug text-fg">
            {title}
          </p>
          <div className="grid flex-1 grid-cols-4 gap-2 overflow-y-auto p-3 sm:grid-cols-5 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  resetView();
                }}
                onKeyDown={(event) => handleThumbKeyDown(event, index)}
                aria-label={`Ver imagem ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeIndex === index ? "border-accent" : "border-line hover:border-accent/40"
                }`}
              >
                <img src={image.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>,
    document.body,
  );
};
