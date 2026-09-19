import type { CatalogCategory } from "../types/product";

export const catalogCategories: CatalogCategory[] = [
  {
    id: "naruto",
    name: "Naruto",
    bannerSrc: "/media/categories/naruto-banner.webp",
    bannerAlt: "Coleção Naruto — GeekDom",
    thumbSrc: "/media/categories/naruto-banner.webp",
    accent: "#fb8c28",
  },
  {
    id: "anime",
    name: "Anime",
    bannerSrc: "/media/products/guts-preto.jpg",
    bannerAlt: "Coleção Anime — GeekDom",
    thumbSrc: "/media/products/guts-preto.jpg",
    accent: "#e63946",
  },
  {
    id: "pokemon",
    name: "Pokémon",
    bannerSrc: "/media/products/gengar-preto.jpg",
    bannerAlt: "Coleção Pokémon — GeekDom",
    thumbSrc: "/media/products/gengar-preto.jpg",
    accent: "#7b5cff",
  },
  {
    id: "kawaii",
    name: "Kawaii",
    bannerSrc: "/media/products/hello-kitty-preto.jpg",
    bannerAlt: "Coleção Kawaii — GeekDom",
    thumbSrc: "/media/products/hello-kitty-branco.jpg",
    accent: "#ff6eb4",
  },
];

export const getCategoryById = (id: string) => catalogCategories.find((item) => item.id === id);
