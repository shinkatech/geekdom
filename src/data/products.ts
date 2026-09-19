import type { Product } from "../types/product";

export const FILTER_LABELS = ["Todos", "Naruto", "Anime", "Pokémon", "Kawaii"] as const;

const titleBase = "Lightbox 3D LED";

export const products: Product[] = [
  {
    slug: "lightbox-itachi",
    name: "Itachi Uchiha",
    categoryId: "naruto",
    shortTitle: `${titleBase} — Itachi Uchiha`,
    description:
      "Recorte em camadas com Itachi e visual Akatsuki. Disponível em moldura preta ou branca — peça de impacto para setup, prateleira ou coleção.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Naruto", "LED", "3D"],
    images: [
      { src: "/media/products/itachi-preto.jpg", alt: "Lightbox Itachi Uchiha — moldura preta" },
      { src: "/media/products/itachi-branco.jpg", alt: "Lightbox Itachi Uchiha — moldura branca" },
    ],
    videos: [],
    specs: [
      { label: "Personagem", value: "Itachi Uchiha" },
      { label: "Molduras", value: "Preta e branca" },
    ],
  },
  {
    slug: "lightbox-kakashi",
    name: "Kakashi Hatake",
    categoryId: "naruto",
    shortTitle: `${titleBase} — Kakashi Hatake`,
    description: "Kakashi com Sharingan em destaque. Lightbox 3D com profundidade real e iluminação LED.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Naruto", "LED"],
    images: [{ src: "/media/products/naruto/kakashi.webp", alt: "Lightbox Kakashi Hatake" }],
    videos: [],
    specs: [{ label: "Personagem", value: "Kakashi Hatake" }],
  },
  {
    slug: "lightbox-obito",
    name: "Obito Uchiha",
    categoryId: "naruto",
    shortTitle: `${titleBase} — Obito Uchiha`,
    description: "Obito com padrão Akatsuki. Camadas 3D e contraste forte entre preto, vermelho e roxo.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Naruto", "Akatsuki"],
    images: [{ src: "/media/products/naruto/obito.webp", alt: "Lightbox Obito Uchiha" }],
    videos: [],
    specs: [{ label: "Personagem", value: "Obito Uchiha" }],
  },
  {
    slug: "lightbox-madara",
    name: "Madara Uchiha",
    categoryId: "naruto",
    shortTitle: `${titleBase} — Madara Uchiha`,
    description: "Madara com Rinnegan em evidência. Visual dramático para fãs de Naruto.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Naruto", "Uchiha"],
    images: [{ src: "/media/products/naruto/madara.webp", alt: "Lightbox Madara Uchiha" }],
    videos: [],
    specs: [{ label: "Personagem", value: "Madara Uchiha" }],
  },
  {
    slug: "lightbox-sakura",
    name: "Sakura Haruno",
    categoryId: "naruto",
    shortTitle: `${titleBase} — Sakura Haruno`,
    description: "Sakura com fundo floral e kunais. Cores vivas e acabamento premium GeekDom.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Naruto"],
    images: [{ src: "/media/products/naruto/sakura.webp", alt: "Lightbox Sakura Haruno" }],
    videos: [],
    specs: [{ label: "Personagem", value: "Sakura Haruno" }],
  },
  {
    slug: "lightbox-bakugo",
    name: "Katsuki Bakugo",
    categoryId: "anime",
    shortTitle: `${titleBase} — Katsuki Bakugo`,
    description:
      "Bakugo em explosão de energia — amarelo, laranja e azul em camadas 3D. Moldura preta ou branca.",
    price: "R$ 113,05",
    featured: true,
    tags: ["My Hero Academia", "LED"],
    images: [
      { src: "/media/products/bakugo-preto.jpg", alt: "Lightbox Bakugo — moldura preta" },
      { src: "/media/products/bakugo-branco.jpg", alt: "Lightbox Bakugo — moldura branca" },
    ],
    videos: [],
    specs: [
      { label: "Personagem", value: "Katsuki Bakugo" },
      { label: "Molduras", value: "Preta e branca" },
    ],
  },
  {
    slug: "lightbox-levi",
    name: "Levi Ackerman",
    categoryId: "anime",
    shortTitle: `${titleBase} — Levi Ackerman`,
    description: "Levi com asas da liberdade e olhar intenso. Peça icônica de Attack on Titan em lightbox 3D.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Attack on Titan", "LED"],
    images: [
      { src: "/media/products/levi-preto.jpg", alt: "Lightbox Levi — moldura preta" },
      { src: "/media/products/levi-branco.jpg", alt: "Lightbox Levi — moldura branca" },
    ],
    videos: [],
    specs: [
      { label: "Personagem", value: "Levi Ackerman" },
      { label: "Molduras", value: "Preta e branca" },
    ],
  },
  {
    slug: "lightbox-guts",
    name: "Guts",
    categoryId: "anime",
    shortTitle: `${titleBase} — Guts (Berserk)`,
    description: "Guts com olho vermelho e marcas de sacrifício. Visual sombrio e marcante de Berserk.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Berserk", "LED"],
    images: [
      { src: "/media/products/guts-preto.jpg", alt: "Lightbox Guts — moldura preta" },
      { src: "/media/products/guts-branco.jpg", alt: "Lightbox Guts — moldura branca" },
    ],
    videos: [],
    specs: [
      { label: "Personagem", value: "Guts" },
      { label: "Molduras", value: "Preta e branca" },
    ],
  },
  {
    slug: "lightbox-gengar",
    name: "Gengar",
    categoryId: "pokemon",
    shortTitle: `${titleBase} — Gengar`,
    description: "Gengar com olhos vermelhos e padrão repetido no fundo. Um dos favoritos da coleção Pokémon.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Pokémon", "LED"],
    images: [
      { src: "/media/products/gengar-preto.jpg", alt: "Lightbox Gengar — moldura preta" },
      { src: "/media/products/gengar-branco.jpg", alt: "Lightbox Gengar — moldura branca" },
    ],
    videos: [],
    specs: [
      { label: "Personagem", value: "Gengar" },
      { label: "Molduras", value: "Preta e branca" },
    ],
  },
  {
    slug: "lightbox-hello-kitty",
    name: "Hello Kitty",
    categoryId: "kawaii",
    shortTitle: `${titleBase} — Hello Kitty`,
    description: "Hello Kitty em rosa e branco com laços. Lightbox kawaii para quarto, estúdio ou presente.",
    price: "R$ 113,05",
    featured: true,
    tags: ["Kawaii", "Hello Kitty"],
    images: [
      { src: "/media/products/hello-kitty-preto.jpg", alt: "Lightbox Hello Kitty — moldura preta" },
      { src: "/media/products/hello-kitty-branco.jpg", alt: "Lightbox Hello Kitty — moldura branca" },
    ],
    videos: [],
    specs: [
      { label: "Personagem", value: "Hello Kitty" },
      { label: "Molduras", value: "Preta e branca" },
    ],
  },
];

export const getProductBySlug = (slug: string) => products.find((item) => item.slug === slug);

export const getFeaturedProducts = () => products.filter((item) => item.featured);

export const getProductsByCategoryId = (categoryId: string) =>
  products.filter((item) => item.categoryId === categoryId);

export const filterProductsByLabel = (label: (typeof FILTER_LABELS)[number]) => {
  if (label === "Todos") return products;
  const map: Record<string, string> = {
    Naruto: "naruto",
    Anime: "anime",
    "Pokémon": "pokemon",
    Kawaii: "kawaii",
  };
  const id = map[label];
  return id ? getProductsByCategoryId(id) : products;
};
