# Grêmio Esportivo Bagé — fundação técnica

Aplicação full-stack única, organizada como monólito modular. Esta etapa prepara
ferramentas, estrutura e validação. Não contém Home de produto, conteúdo do clube,
banco, autenticação ou painel administrativo.

## Requisitos

- Node.js **24 LTS** (validado inicialmente com 24.18.0).
- pnpm **11.19.0**, fixado em `packageManager`.
- Git.

Se precisar instalar o pnpm no seu ambiente com Node 24:

```sh
npm install --global pnpm@11.19.0
```

Esse é apenas o bootstrap do gerenciador; use pnpm para todas as dependências do
projeto. `.nvmrc` e `.node-version` selecionam a linha 24; mantenha os patches de
segurança dessa linha atualizados.

## Rodar localmente

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra [localhost:3000](http://localhost:3000). A rota `/` exibe somente uma mensagem
técnica, sem dados ou identidade visual do clube, e está marcada como `noindex`.

Nenhuma variável de ambiente é necessária nesta etapa. `.env.example` documenta
integrações futuras sem credenciais. Quando necessário, copie para `.env.local`
(`Copy-Item .env.example .env.local` no PowerShell) e preencha localmente.

## Comandos

| Comando             | Finalidade                                               |
| ------------------- | -------------------------------------------------------- |
| `pnpm dev`          | Desenvolvimento com Next.js / Turbopack                  |
| `pnpm lint`         | ESLint, sem tolerar warnings                             |
| `pnpm typecheck`    | Gera tipos das rotas e verifica TypeScript strict        |
| `pnpm format`       | Formata fontes e documentação com Prettier               |
| `pnpm format:check` | Verifica formatação sem modificar arquivos               |
| `pnpm build`        | Compila a aplicação para produção                        |
| `pnpm start`        | Serve o build de produção                                |
| `pnpm test`         | Smoke HTTP contra o build existente; execute build antes |
| `pnpm check`        | Formatação, lint, tipos, build e testes, em sequência    |

O smoke test usa o runner nativo do Node 24, inicia `next start` em porta livre e
valida HTML, CSS do Tailwind e resposta 404. Não exige navegador, credenciais ou
serviços externos. Não há testes de regras de negócio porque elas ainda não existem.

## Estrutura

```text
.github/             CI, atualizações de dependências e template de PR
docs/                Produto, arquitetura e operação
public/              Arquivos públicos estáticos (vazio)
src/
  app/               App Router: layout e rota técnica temporária
  components/        Componentes compartilhados (reservado)
  features/
    news/            Domínios reservados, sem implementação
    athletes/
    matches/
    competitions/
    standings/
    sponsors/
    club/
  server/            Integrações privadas e adaptadores (reservado)
  styles/            CSS global e futura base do design system
tests/               Verificação HTTP de produção
```

## Stack instalada

Next.js 16.3.6, React/React DOM 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.3,
PostCSS, ESLint com regras do Next.js e TypeScript, Prettier e tipos do Node/React.
Versões exatas constam em `package.json`; resolução completa em `pnpm-lock.yaml`.

PostgreSQL/Neon, Prisma **7**, Cloudflare R2, Better Auth e primitives shadcn/ui
continuam sendo as escolhas previstas. Seus clientes não foram instalados porque
a etapa não possui banco, uploads, autenticação ou componentes que precisem deles.
Nenhuma alternativa de stack foi introduzida.

## Colaboração e deploy futuro

Use branches e Pull Requests; não envie alterações diretamente para `main`.
O workflow `CI` prepara instalação reproduzível, formatação, lint, typecheck, build
e smoke tests. O arquivo `netlify.toml` prepara build na Netlify, sem publicar.

GitHub privado, proteção de `main`, Netlify Pro, Deploy Previews, credenciais e
serviços gerenciados precisam ser configurados nas respectivas contas antes do
primeiro deploy. Arquivos locais não ativam essas configurações remotas.

Leia [AGENTS.md](AGENTS.md), [produto](docs/product.md),
[arquitetura](docs/architecture.md) e [operação](docs/development.md).
