export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductMedia = {
  src: string;
  alt: string;
};

export type ProductVideo = {
  src: string;
  poster: string;
  alt: string;
};

export type CatalogCategory = {
  id: string;
  name: string;
  bannerSrc: string;
  bannerAlt: string;
  thumbSrc: string;
  accent: string;
};

export type Product = {
  slug: string;
  name: string;
  categoryId: string;
  shortTitle: string;
  description: string;
  price: string;
  discountPercent?: string;
  rating?: number;
  soldLabel?: string;
  images: ProductMedia[];
  videos: ProductVideo[];
  featured: boolean;
  tags: string[];
  specs: ProductSpec[];
};
