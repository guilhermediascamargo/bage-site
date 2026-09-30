# Instruções para agentes

## Escopo e verdade dos dados

- Este repositório contém apenas a fundação técnica do Grêmio Esportivo Bagé.
- Leia `README.md`, `docs/product.md` e `docs/architecture.md` antes de trabalhar.
- Não invente notícias, atletas, partidas, resultados, patrocinadores ou história.
- Não implemente novas áreas, identidade visual final ou integrações sem escopo
  autorizado. A rota `/` atual é técnica e temporária, não é a Home do produto.

## Stack e dependências

- Next.js 16 App Router, sempre no patch estável de segurança mais recente da linha
  16; sem canary. Node.js 24 LTS, TypeScript strict, pnpm e Tailwind CSS 4.
- React estável compatível com Next.js 16. Prisma ORM 7 estável ao iniciar banco;
  não usar Prisma 8 RC. Não trocar a stack sem avisar e explicar ao responsável.
- Use somente pnpm; mantenha `pnpm-lock.yaml` versionado e instale versões exatas.
- Consulte fontes oficiais e o registro ao atualizar; rode todas as verificações.
- Não instale dependências sem uso imediato. shadcn/ui somente para primitives e
  componentes funcionais necessários ao design system próprio.

## Arquitetura

- Uma aplicação full-stack, monólito modular, sem monorepo ou microserviços.
- `src/app`: rotas e composição; Server Components por padrão. `use client` somente
  para interação, estado ou APIs do navegador que o exijam.
- `src/components`: compartilhados; `src/features`: regras e UI por domínio;
  `src/server`: código privado, integrações e adaptadores.
- Ao implementar módulos server-only, instale `server-only` e marque seus pontos
  de entrada. Nunca exponha segredos em Client Components ou `NEXT_PUBLIC_*`.
- Regras de domínio não dependem de Next.js, Prisma, Neon, R2 ou Netlify.
- Priorize geração estática/ISR e SEO para conteúdo público. Defina revalidação
  quando existir uma fonte de dados real; não force renderização dinâmica global.
- Futuro banco: PostgreSQL no Neon, Prisma 7. Arquivos no R2; banco guarda apenas
  referências e metadados. Sem CMS externo.
- Futuro `/admin` e Better Auth na mesma aplicação; autenticação e autorização
  devem ser verificadas no servidor antes de liberar mutações administrativas.

## Qualidade e entrega

- Preserve strict mode; não silencie erros com `any`, desativação de lint ou flags
  de build. Faça mudanças pequenas e diretamente relacionadas à tarefa.
- Execute `pnpm check` antes de entregar (formatação, lint, tipos, build e smoke).
- `pnpm test` requer `pnpm build` prévio. Ao substituir a rota técnica, atualize
  os smoke tests para o comportamento aprovado. Testes de domínio surgem com regras reais.
- Nunca versione credenciais, `.env.local`, `node_modules` ou `.next`.
- Trabalhe em branches e Pull Requests. Nunca faça push direto para `main`.
- Não publique nem crie recursos pagos fora do escopo autorizado. GitHub privado;
  produção futura na Netlify Pro com Deploy Previews e deploy automático após merge.
- Documente decisões e relate arquivos alterados, verificações e limitações reais.
