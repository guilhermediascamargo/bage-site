# Estado do projeto

Atualizado em 05/10/2026. Protótipo não oficial do Grêmio Esportivo Bagé, com
identidade Jalde Contemporâneo e `noindex, nofollow` preservados.

## Base e rodada atual

- Checkpoint oficial: `origin/codex/news-system`, commit
  `d9f4d3ab7b49b021dc354b4d2b1d44766463d814`
  (`feat: checkpoint news club and site refinements`).
- Polimento implementado em `feature/final-mobile-polish`, criada exatamente desse
  commit após fetch e confirmação de working tree limpo. Sem merge ou trabalho
  direto nas branches compartilhadas.
- Rodada tablet em `feature/tablet-responsive-polish`, criada exatamente de
  `origin/feature/final-mobile-polish` no commit
  `b4c8f16833d1e9954db159472020a852da0ea104`, após fetch e working tree limpo.
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
- Notícias: 10 matérias, três destaques no Agora e quatro imagens internas. Fotos
  de referência provisórias, sem simular fotos das partidas ou inventar créditos.
- Clube: primeiro frame, entrada em vídeo e interior com cinco pontos (camisa,
  três conquistas e escudo), conteúdo fornecido e CTA para História.
- Ba-Gua: regra permanente em `AGENTS.md`, com texto completo em `docs/product.md`.
  Busca global revisou adversários de Jogos, notícia do clássico, primeiro Ba-Gua,
  7–0 de 1940, combinado contra o Santos em 1957 e conquista de 1974. Menções
  necessárias e factuais preservadas, sem promoção institucional do rival.

## Polimento do checkpoint mobile

- Clube até 1023 px: cena 16:9 com marcadores numerados, seletores identificados de
  pelo menos 60 px e painel completo abaixo da cena. Duas colunas de seletores a
  partir de 600 px. Conteúdo sem rolagem interna; ano, título, descrição e CTA visíveis.
  Desktop mantém pontos sobre a imagem, cards e conectores. Fechar, ESC, clique
  fora, troca, retorno de foco/entrada, vídeo, pular, blend e fallback preservados.
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

## Experiência de tablet

- Faixa de ajustes de 600 a 1199 px; celular pequeno e desktop de 1440 px
  preservam suas composições. Breakpoints por conteúdo, sem uma troca global de layout.
- Home: hero limitado entre 32 e 44 rem em portrait; notícia e próximo jogo lado
  a lado em landscape a partir de 900 px, com card de jogo mais enxuto. Rail mostra
  mais de um atleta por vez, mantendo swipe e setas. Patrocinadores em três colunas
  até 899 px e quatro acima; Agora e dados da temporada preservados.
- Jogos: estádio lateral a partir de 768 px, com conteúdo e placares legíveis.
  Filtros, gols, agregado e pênaltis preservam o cadastro.
- Elenco: mantidos dois cartazes em portrait, três a partir de 900 px e quatro
  a partir de 1200 px. Retratos, fallbacks, tabs e perfis não precisaram de alteração.
- História: casa e imortais em sequência linear em portrait, sem sticky nessas
  cenas. Landscape mantém composição dividida; abertura mais curta e capítulo
  visível na navegação a partir de 900 px. Sticky é desativado nas alturas baixas
  e em reduced motion. Doze cenas e arquivo preservados.
- Sócios: duas colunas de 600 a 1099 px; três a partir de 1100 px. Cards com altura
  suficiente para as duas faces, detalhes após a linha selecionada e foco preservado
  quando a rotação reposiciona o painel ou seu link de WhatsApp.
- Notícias: destaque 16:9 e duas colunas de listagem/secundárias de 600 a 959 px;
  composição editorial existente nas larguras maiores. Artigos e relacionadas preservados.
- Clube: até 599 px mantém a experiência mobile. Portrait a partir de 700 px
  apresenta cena acima e seletores/painel lado a lado abaixo; em 600 px, painel
  abaixo da grade de seletores. Landscape de tablet apresenta cena à esquerda e
  seletores à direita; com ponto aberto, painel à direita e seletores sob a cena.
  Sem sobrepor a imagem ou exigir rolagem interna. Rotação preserva seleção e foco
  e revela o contexto quando o painel tem foco. Desktop a partir de 1200 px mantém
  hotspots, posicionamento e conectores originais.
- Header: navegação direta a partir de 900 px, com texto de 14 px até 1199 px,
  sete links e alvos de 44 px; abaixo, menu expansível. Foco migra ao controle
  visível quando o breakpoint muda, inclusive se o navegador desfocar antes
  do evento. Footer em sete colunas estáveis na faixa tablet.
- Imagens de estádio/notícias/interior usam `sizes` coerentes com as novas colunas.
  Vídeo otimizado, assets, dependências, arquitetura e política editorial inalterados.

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

Node.js 24.21.0 e pnpm 11.19.0, coerentes com `package.json`. Next.js 16.3.6,
React 19.3.0, TypeScript strict e Tailwind CSS 4. App Router e monólito modular:
`src/app` compõe rotas; `src/components` compartilha UI; `src/features` organiza
os domínios; `src/server` reserva integrações privadas. Server Components por
padrão; fronteiras Client limitadas às interações existentes. Sem novas dependências.
`next/font/google` pode exigir rede ao obter fontes no build.

## Validações do checkpoint mobile

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

## Validações da rodada tablet

- `pnpm check`: formatação, lint sem warnings, typecheck, build padrão Turbopack
  (50 páginas) e 32 testes aprovados; `git diff --check` sem erros.
- Matriz de 256 combinações: 16 páginas em 16 viewports, incluindo todas as larguras
  solicitadas, portrait/landscape, 1024×600, 1180×700 e regressão 320/390/1440.
  Sem overflow horizontal, exceções JS, erros de hidratação ou assets ausentes.
- 120 cenários de interação, cobrindo filtros combinados, tabs, 15 modalidades,
  12 cenas/arquivo, cinco hotspots, teclado/ESC, rail, menu/footer, vídeo/fallback,
  reduced motion e conteúdo sem JS. Mais 20 cenários de toque e rotação em quatro
  pares portrait/landscape, preservando foco, seleção, filtros e tabs.
- 80 auditorias axe nas páginas e quatro com painel do Clube aberto, sem violações.
  60 verificações nas bordas 599/600, 699/700, 767/768, 899/900, 1099/1100 e
  1199/1200 px sem sobreposição na navegação ou overflow; 51 rotas/âncoras aprovadas.
- Em 1024×768 e DPR 1, interior do Clube entregue pelo pipeline de 750 px para
  cena de aproximadamente 676 px; poster de entrada mantém dimensão da entrada.
  Reduced motion não solicita vídeo. Nenhum asset ou dependência acrescentado.
- Capturas, roteiros e relatórios externos:
  `C:\Users\Rogério\Documents\bage-tablet-review-2026-10-05`.
  Testes visuais e touch em Chromium emulado; aparelho físico e Safari/WebKit
  continuam dependendo de revisão humana.

## Pendências reais

- Antes da apresentação: revisão humana final e validação em Safari/iPhone físico;
  emulação Chromium não substitui WebKit/aparelho real.
- Material oficial: fotos específicas e créditos das matérias, acervo histórico,
  sete retratos restantes, dados pessoais verificados, Base/Diretoria, calendário
  futuro e condições oficiais de benefícios. Preservar sinalização do protótipo.
- Eventual produção: política de indexação, direitos de uso, textos legais,
  conteúdo oficial, infraestrutura e integrações mediante novo escopo. Banco,
  CMS, login, pagamentos, Analytics e associação real não fazem parte desta rodada.
