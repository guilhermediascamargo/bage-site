# Estado do projeto — Grêmio Esportivo Bagé

## Fase atual

Protótipo da Home v1, na direção **Jalde Contemporâneo**.
Fundação técnica, visual e estrutura global concluídas.
A abertura da Home foi reconstruída com hero fotográfico; “Bagé Agora” foi removido.
`/elenco` deixou de ser placeholder e oferece Profissional, Base e Diretoria.
O profissional e seus 30 perfis individuais estão implementados; Base e Diretoria
aguardam dados. As experiências aguardam revisão humana. A Home inteira não está
finalizada e não foi redesenhada na etapa de elenco.

## Etapas concluídas

- Fundação técnica, tokens institucionais, Header, Footer e navegação desktop/mobile.
- Escudo institucional, rotas placeholder e smoke tests.
- Checkpoints publicados em `origin/main`.
- Hero da Home: fotografia real do protótipo, manchete, próximo jogo e resultado
  integrados, com conteúdo demonstrativo identificado.
- Archivo como fonte principal; Barlow Condensed para números e linguagem esportiva.
  Source Sans 3 removida da configuração.
- Elenco profissional: 30 atletas da base pública reconciliada de 2026 fornecida
  pelo responsável, em dataset tipado único: 3 goleiros, 10 defensores,
  9 meio-campistas e 8 atacantes.
- Navegação Profissional / Base / Diretoria, cards clicáveis agrupados por posição
  e rotas individuais para todos os atletas. O personagem demonstrativo foi removido.
- Microinterações dos cards finalizadas: hover e foco coordenados, suporte a
  reduced motion e retratos ancorados à base com fade inferior em CSS.

## Estado técnico atual

Next.js com App Router, React, TypeScript strict, Tailwind CSS 4 e pnpm.
`src/app` compõe rotas; `src/components` contém compartilhados; `src/features`
organiza `matches`, `news` e `athletes`; `src/server` reserva integrações privadas.
Server Components por padrão; Header e seletor das áreas do elenco são as
fronteiras Client. Os painéis, cards e perfis são compostos no servidor.
Protótipo com `noindex, nofollow`. Sem banco, autenticação, CMS, storage externo ou
API esportiva.

## Assets aprovados

- Escudo institucional: `public/images/brand/ge-bage-escudo.png`.
- Foto da Home: `public/images/prototype/home/hero-jogador.jpg`, incorporada sem
  modificar o arquivo-fonte.
- `public/images/prototype/stadium/arquibancada.jpg` está disponível, mas não é
  utilizada nesta composição.

## Atletas e Media Day

Padrão futuro: retratos individuais posados de media day, preferencialmente de
corpo inteiro ou quase inteiro. Cards e perfis já possuem camadas para elementos
gráficos ao fundo, retrato e nome editorial. Adicionar o arquivo e preencher `portraitImage.src` e
`portraitImage.alt`; `objectPosition` é opcional para ajustar o enquadramento.
Para o número aparecer atrás do corpo, fornecer retrato com fundo transparente.
Os 30 atletas possuem a numeração mais recente documentada em 2026, sem garantia
de camisa fixa; repetições são intencionais. Há 23 retratos PNG integrados e 7
atletas com fallback gráfico. Os 10 retratos extras foram preservados para uso futuro.
O número 10 demonstrativo foi removido. Nascimento, naturalidade e demais dados
detalhados ainda serão alimentados. A foto da Home não é usada no atleta.
`actionImage` opcional permite uma segunda fotografia; campos ausentes e biografias
sem texto não aparecem. Estatísticas ainda não foram implementadas.
Base tem área própria para futuras categorias confirmadas, sem categorias ou
atletas inventados. Diretoria tem componente institucional independente, sem
nomes, cargos ou fotos inventados. Nenhuma infraestrutura de backend foi adicionada.

## Últimos checkpoints publicados

- Fundação e estrutura: `bbbb1df8564d23837d2179b7a6752576fee01801` —
  `feat: establish visual foundation and site shell`.
- Documento de estado: `88c8b086e076e7ce5167f7856f28d5799033982b` —
  `docs: add project status tracking`.

Checkpoint da Home e do elenco preparado na branch `codex/checkpoint-home-elenco`,
com validações finais. A publicação desta branch não significa merge em `main`.

## Próxima etapa

Próximo foco: página Jogos, mediante definição de escopo. Aguardar dados verificados
para Base, Diretoria e informações pessoais, além dos sete retratos restantes.
Revisão humana e integrações continuam dependentes de autorização.

## Pendências técnicas conhecidas

- Projeto declara pnpm 11.19.0; ambiente utiliza pnpm 11.25.0. Os validadores
  equivalentes passam, mas `pnpm check` é bloqueado pela divergência.
- `next/font/google` exige rede no build quando as fontes precisam ser obtidas.
- Aguardar os sete retratos restantes e dados individuais detalhados. Notícias e jogos
  da Home continuam demonstrativos; o elenco utiliza a lista fornecida de 2026.

As condições do ambiente não representam falha estrutural.

## Decisões que devem ser preservadas

Não recriar o projeto; preservar arquitetura modular e `src/features`, sem
`src/modules`. Evitar dependências e infraestrutura sem necessidade concreta.
Server Components por padrão. Não inventar fatos do clube; exemplos sempre
identificados como demonstrativos. Não recolorir ou recriar o escudo. Jalde como
assinatura, fotografia e tipografia como base da composição. Mobile desde o início.

## Última validação conhecida

Integração de retratos e numeração: ESLint, Next typegen, TypeScript, Next build,
8 testes (incluindo os 30 perfis), Prettier e `git diff --check` aprovados.
Cards e cartazes revisados em 390, 1280 e 1440 px, sem overflow horizontal.

Em 30/09/2026: Prettier, ESLint, Next typegen, TypeScript, Next build, smoke HTTP e
`git diff --check`. Elenco e perfil verificados em 320, 390, 768, 1280 e 1920 px,
sem overflow ou corte de cards. Os 30 cards foram clicados e os 30 perfis testados
por HTTP. Teste de unicidade de slugs/atletas, grupos e contagens; 404 para slug
inexistente e personagem removido; tabs por clique e teclado; `noindex` preservado.
Home mantém a implementação e as verificações anteriores. Este registro não
substitui validações futuras nem aprovação humana.

## Histórico resumido

| Etapa               | Estado             | Resultado                               |
| ------------------- | ------------------ | --------------------------------------- |
| Fundação técnica    | concluída          | Base Next.js estabelecida               |
| Fundação visual     | refinada           | Archivo, Barlow e tokens institucionais |
| Estrutura global    | concluída          | Header, Footer e navegação              |
| Checkpoints Git     | publicados         | Fundação e documento em origin/main     |
| Abertura da Home    | aguardando revisão | Hero fotográfico substitui Bagé Agora   |
| Elenco profissional | aguardando revisão | 30 cards e perfis; estrutura Media Day  |
| Base e Diretoria    | aguardando dados   | Áreas próprias, sem conteúdo inventado  |
