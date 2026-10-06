# Estado do projeto

Atualizado em 05/10/2026. Protótipo não oficial do Grêmio Esportivo Bagé, com
identidade Jalde Contemporâneo e `noindex, nofollow` preservados.

## Base e rodada atual

- Checkpoint oficial: `origin/codex/news-system`, commit
  `d9f4d3ab7b49b021dc354b4d2b1d44766463d814`
  (`feat: checkpoint news club and site refinements`).
- Rodada de pré-apresentação em `feature/pre-presentation-polish`, no worktree
  isolado de revisão, criada exatamente de
  `b4c8f16833d1e9954db159472020a852da0ea104` (`feature/final-mobile-polish`).
  O checkpoint `d9f4d3a` é ancestral dessa base; sem merge ou alterações nas
  branches compartilhadas. Mudanças desta rodada ainda locais para revisão.
- Home, Jogos, Elenco, História, Sócios, Notícias, Clube e 404 estão implementados.
  A rodada preserva as composições aprovadas e corrige problemas concretos.

## Produto e dados preservados

- Home: hero fotográfico, Agora, rail dos 30 atletas, temporada, História e 12
  patrocinadores. Notícia e próximo jogo do hero são demonstrativos identificados;
  último resultado e balanço vêm do cadastro de Jogos.
- Jogos: 23 partidas oficiais de 2026; 6 vitórias, 8 empates, 9 derrotas, 20 gols
  marcados e 26 sofridos, saldo -6. O balanço recebido de 25 sofridos diverge dos
  placares (7 na Copa FGF e 19 na Série A2): manter 26 conforme decisão do responsável.
  Amistoso contra o Stand excluído. Semifinal: volta 0–1, agregado 1–1 e pênaltis
  3–0 para o Gramadense são dados distintos. Nenhum resultado ou autor foi alterado.
- Elenco: 30 profissionais (3 goleiros, 10 defensores, 9 meio-campistas, 8 atacantes),
  23 retratos e 7 fallbacks, com perfis individuais. Números repetidos são intencionais.
  Retratos extras fornecidos continuam preservados. Base e Diretoria aguardam dados.
- História: 12 cenas e cronologia alternativa de 19 registros. Fotografia atual do
  Pedra Moura identificada como atual; sem simular acervo histórico.
- Sócios: 15 modalidades, preços fornecidos, virada, detalhes e WhatsApp. Benefícios
  demonstrativos, sem associação online ou pagamento.
- Notícias: 10 matérias com capas editoriais em `/images/news/` e três destaques
  no Agora, derivados do mesmo cadastro. Anúncio de Michel Henrique (11/05)
  substitui a matéria de estreia de 13/05. Créditos omitidos até confirmação;
  imagens internas provisórias removidas e dois assets de reserva preservados.
- Clube: primeiro frame, entrada em vídeo e interior com cinco pontos (camisa,
  três conquistas e escudo), conteúdo fornecido e CTA para História.
- Ba-Gua: regra permanente em `AGENTS.md`, com texto completo em `docs/product.md`.
  Busca global revisou adversários de Jogos, notícia do clássico, primeiro Ba-Gua,
  7–0 de 1940, combinado contra o Santos em 1957 e conquista de 1974. Menções
  necessárias e factuais preservadas, sem promoção institucional do rival.

## Polimento final

- Clube: cinco botões sobre a cena 16:9 e um único card contextual interno. Até
  1023 px, overlay inferior com scroll interno; desktop conserva posicionamento
  próximo do objeto e conector. Sem seletores ou painel abaixo da imagem. Fechar,
  ESC, clique fora, troca, retorno de foco/entrada, vídeo, pular, blend e fallback
  preservados. Textos enxutos, sem repetir clube/cidade no card do escudo.
- História: indicador escolhe a última área visível na ordem da narrativa, evitando
  voltar ao capítulo anterior ao expandir o Arquivo.
- Editorial: removidas repetições e frases de preenchimento em Notícias, História,
  Elenco e Sócios; fatos históricos e dados esportivos preservados. A notícia do
  Ba-Gua identifica o clássico e o rival, sem alterar nomes funcionais ou resultados.
- Sócios: motivo abstrato de abelha em SVG monocromático no verso dos 15 cartões,
  decorativo e sem representar arte oficial do mascote. Não aparece no Clube.
  Preços, benefícios demonstrativos, flip protegido para WebKit e painel único
  após a linha selecionada permanecem.
- Home em telas baixas: altura e espaço superior do hero ajustados para comunicar
  manchete e CTA na primeira viewport curta, sem alterar a composição normal.
- Jogos até 359 px: estado da partida abaixo do placar libera espaço para nomes
  longos dos adversários, evitando letras isoladas sem reduzir a tipografia.
- Header: menu com JS preservado; CSS em `noscript` expõe a mesma navegação em
  fluxo, sem duplicar links ou manter um botão inoperante.
- Footer: navegação mobile em grade estável de duas linhas e alvos mínimos de 44 px.
  A fonte antes mudava a navegação de duas para três linhas e produzia CLS ~0,150;
  seis repetições locais, normais e com fonte atrasada, mediram CLS 0 após o ajuste.
- Sócios: aviso demonstrativo passou de `aside` para `section` nomeada, corrigindo
  `landmark-complementary-is-top-level` sem mudar a apresentação.
- Favicon ICO derivado do escudo aprovado, com tamanhos 16/32/48/64. Descrições
  próprias de Clube/Elenco e descrição global coerente com protótipo; metadata de
  artigos e bloqueio de indexação preservados.

## Mídia do Clube

Imagens-fonte WebP 2560×1440 preservadas. Uso de `next/image` volta ao pipeline
responsivo existente; removidos `unoptimized` e poster redundante do vídeo. Vídeo
com `preload="none"`; o carregamento começa na intenção de entrar (hover, foco ou
clique), evitando tráfego de vídeo ao simplesmente abrir a página. Em
largura entregue de 828 px, poster passou de 1.450.482 para 44.040 bytes (~97,0%) e
interior de 1.693.660 para 26.976 bytes (~98,4%), com qualidade 75 do pipeline.
Os tamanhos entregues variam com viewport/DPR e negociação de formato.

Vídeo original `entrance.mp4` preservado, 18.927.300 bytes, 1920×1080, 30 fps,
7,233 s, reproduzido sem áudio. Derivado `entrance-720p.mp4`: 3.430.563 bytes
(-81,9%), H.264 baseline, 1280×720, captura nominal 30 fps/4 Mbps (VFR, ~27 fps
efetivos), sem faixa de áudio,
7,456 s. A captura em tempo real acrescenta ~0,223 s sem remover a sequência.
Gerado com Chromium/MediaRecorder disponível no ambiente, sem instalar FFmpeg ou
adicionar dependências ao projeto. Duração do cabeçalho MP4 normalizada aos ticks
dos fragmentos; comparados primeiro frame, meio, final, seek e encerramento.
Otimização e métricas locais não equivalem a testes em 4G ou produção.

## Ambiente e arquitetura

O projeto declara Node.js 24 e pnpm 11.19.0. Nesta revisão, o ambiente usa Node.js
24.18.0 e pnpm 11.25.0; validação por executáveis locais, sem mudar dependências
ou a versão declarada. Next.js 16.3.6,
React 19.3.0, TypeScript strict e Tailwind CSS 4. App Router e monólito modular:
`src/app` compõe rotas; `src/components` compartilha UI; `src/features` organiza
os domínios; `src/server` reserva integrações privadas. Server Components por
padrão; fronteiras Client limitadas às interações existentes. Sem novas dependências.
`next/font/google` pode exigir rede ao obter fontes no build.

## Validações da pré-apresentação

`pnpm check` permanece bloqueado pelo mismatch 11.19.0/11.25.0. Os executáveis
locais equivalentes passaram, sem alterar dependências:
Prettier, ESLint sem warnings, Next typegen, TypeScript, build com 50 páginas e
32 testes de domínio/smoke HTTP aprovados. A expectativa da legenda de História
foi atualizada para preservar a distinção entre foto atual e o ano de 1977.

Revisão no navegador Chromium em 320, 390, 768, 1280 e 1440 px: nove rotas
principais/artigo/perfil, sem overflow horizontal ou imagens quebradas nas
45 combinações. Os cinco hotspots foram abertos em cada largura: um único card,
sempre dentro da cena. Conferidos flip, detalhes e foco de Sócios, filtros
combinados, menu, cronologia/indicador, pular/voltar à entrada e ESC.
Reduced motion e fallback também revisados no código e nos testes de domínio;
esta rodada não executou Safari/iPhone físico nem emulação de WebKit.
Capturas ficam fora do Git, no diretório de visualizações do Codex.

## Validação anterior (commit-base do Rogério)

`pnpm check` passou: Prettier, ESLint sem warnings, Next typegen, TypeScript,
build padrão com Turbopack (50 páginas geradas) e 32 testes de domínio/smoke HTTP.
Favicon retorna 200; rota inexistente retorna 404. Regressões de favicon,
navegação única sem JS e semântica de Sócios cobertas pelo smoke.

Revisão Chromium/Playwright em 320, 360, 375, 390, 430, 768, 1280, 1440 e 1920 px,
com alturas de 568, 844 e 900 px. Verificados filtros combinados, tabs, perfis,
12 cenas/arquivo, 15 modalidades, matérias/relacionadas, rail, menu/footer e os
cinco hotspots, teclado, touch emulado, reduced motion e falha de vídeo.
Matriz de 240 combinações página/viewport e 78 cenários de interação aprovados;
51 rotas/âncoras internas sem falhas, 32 verificações axe sem violações. Sem erros
de hidratação, exceções JS, assets ausentes ou overflow horizontal. Emulação de
iPhone pequeno/moderno, Android e tablet complementou as larguras prescritas.
Capturas, roteiros e relatórios ficam fora do Git, em
`C:\Users\Rogério\Documents\bage-final-review-2026-10-04`.

## Pendências reais

- Desenvolvimento: avisos de LCP para o primeiro retrato do Elenco e o escudo
  apareceram em algumas navegações. Não há falha de carregamento; avaliar prioridade
  com medição de performance antes de mudar a estratégia de imagens.
- Antes da apresentação: revisão humana final e validação em Safari/iPhone físico;
  emulação Chromium não substitui WebKit/aparelho real.
- Material oficial: fotos específicas e créditos das matérias, acervo histórico,
  sete retratos restantes, dados pessoais verificados, Base/Diretoria, calendário
  futuro e condições oficiais de benefícios. Preservar sinalização do protótipo.
- Eventual produção: política de indexação, direitos de uso, textos legais,
  conteúdo oficial, infraestrutura e integrações mediante novo escopo. Banco,
  CMS, login, pagamentos, Analytics e associação real não fazem parte desta rodada.
