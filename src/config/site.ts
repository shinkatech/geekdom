export const SITE = {
  name: "GeekDom",
  tagline: "Lightboxes 3D LED com alma de anime — peças que transformam seu setup.",
  shopeeUrl:
    "https://shopee.com.br/geekd0m?entryPoint=ShopBySearch&searchKeyword=geekdom&is_from_signup=true",
  shopeeLabel: "Loja na Shopee",
  instagramUrl: "https://www.instagram.com/lojageekdom/",
  whatsapp: "5511999999999",
  logoSrc: "/media/brand/logo.webp",
  shinkaName: "ShinkaTech",
  shinkaUrl: "https://www.shinkatech.com.br/",
  shinkaIconSrc: "/media/brand/shinka.svg",
} as const;

export const buildWhatsAppUrl = (message: string) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
};
