# GeekDom

Landing + catálogo digital (React, TypeScript, Tailwind) com identidade anime — preto e laranja `#FB8C28`.

## Rotas

- `/` — landing (inclui link da [Shopee @geekd0m](https://shopee.com.br/geekd0m))
- `/catalogo` — grade de produtos
- `/catalogo/:slug` — ficha do produto

## Configuração

Edite [`src/config/site.ts`](src/config/site.ts):

- `shopeeUrl` — loja Shopee
- `whatsapp` — número com DDI (só dígitos)

Produtos: [`src/data/products.ts`](src/data/products.ts)  
Mídias: `public/media/products/{slug}/`

## Desenvolvimento

Requer [Node.js](https://nodejs.org/) (LTS) com npm no PATH:

```bash
cd geekdom
npm install
npm run dev
```

Abre em `http://localhost:5174`.
