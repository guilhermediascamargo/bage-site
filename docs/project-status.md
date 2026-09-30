# Estado do projeto — Grêmio Esportivo Bagé

## Fase atual

Protótipo da Home v1.

Fundação técnica, fundação visual e estrutura global concluídas.

A Home de produto ainda não foi implementada.

## Etapas concluídas

- Fundação técnica
- Fundação visual e tipográfica
- Tokens institucionais
- Barlow Condensed
- Source Sans 3
- Header
- Footer
- Navegação desktop/mobile
- Escudo institucional
- Rotas placeholder
- Smoke tests ampliados
- Checkpoint Git publicado em origin/main

## Estado técnico atual

- Next.js com App Router, React, TypeScript strict, Tailwind CSS 4 e pnpm.
- `src/app`: rotas e composição.
- `src/components`: componentes compartilhados.
- `src/features`: domínios.
- `src/server`: integrações privadas futuras.
- Server Components como padrão; Client Components somente nas fronteiras de interação.
- `noindex, nofollow` enquanto protótipo.

Atualmente não existem banco de dados, autenticação, CMS, storage externo ou API
esportiva implementados.

## Asset institucional aprovado

`public/images/brand/ge-bage-escudo.png` é o escudo institucional atualmente
utilizado pelo projeto.

## Último checkpoint

- Hash: `bbbb1df8564d23837d2179b7a6752576fee01801`
- Mensagem: `feat: establish visual foundation and site shell`
- Estado: publicado em `origin/main`.

## Próxima etapa

Prompt 04 — Bagé Agora.

Objetivo: implementar o primeiro bloco real da Home com próximo jogo, notícia
principal, último resultado, comportamento desktop/mobile e estados especiais
definidos pelo Produto. Ainda não implementado.

## Pendências técnicas conhecidas

- O projeto declara pnpm 11.19.0; o ambiente observado utiliza pnpm 11.25.0.
- Os validadores equivalentes vêm passando, apesar do bloqueio de `pnpm check`
  pela diferença de versão do gerenciador.
- `next/font/google` exige acesso à rede durante o build quando as fontes ainda
  precisam ser obtidas.

Essas condições do ambiente não representam falha estrutural do projeto.

## Decisões que devem ser preservadas

- Não recriar o projeto; preservar a arquitetura modular existente.
- Usar `src/features`, sem criar `src/modules`.
- Evitar dependências sem necessidade; manter Server Components como padrão.
- Não inventar dados do clube; conteúdo fictício somente quando claramente
  marcado como demonstrativo, nunca apresentado como fato oficial.
- Não adicionar banco, autenticação, storage ou API antes de necessidade concreta.
- Não recolorir nem recriar o escudo institucional.
- Preservar a identidade “Jalde Contemporâneo”, com amarelo como assinatura,
  sem preenchimento indiscriminado.
- Tratar mobile como requisito desde o início.

## Última validação conhecida

A última implementação aprovada passou em Prettier, ESLint, TypeScript, Next build,
smoke tests e `git diff --check`. Os validadores foram executados diretamente
quando necessário devido à versão do pnpm no ambiente.

Este registro representa a última validação conhecida e não substitui validações
futuras.

## Histórico resumido

| Etapa            | Estado    | Resultado                      |
| ---------------- | --------- | ------------------------------ |
| Fundação técnica | concluída | Base Next.js estabelecida      |
| Fundação visual  | concluída | Fontes e tokens institucionais |
| Estrutura global | concluída | Header, Footer e navegação     |
| Checkpoint Git   | concluído | Publicado em origin/main       |
| Bagé Agora       | próxima   | Ainda não implementada         |
