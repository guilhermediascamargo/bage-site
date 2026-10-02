# Estado do projeto — Grêmio Esportivo Bagé

## Fase atual

Protótipo da Home v1, na direção **Jalde Contemporâneo**.
Fundação técnica, visual e estrutura global concluídas.
A abertura da Home foi reconstruída com hero fotográfico; “Bagé Agora” foi removido.
`/elenco` deixou de ser placeholder e oferece Profissional, Base e Diretoria.
O profissional e seus 30 perfis individuais estão implementados; Base e Diretoria
aguardam dados. As experiências aguardam revisão humana.
A Home-hub foi ampliada com o conceito Fio Jalde, preservando o hero aprovado:
Agora, rail dos 30 atletas profissionais, vitrine da temporada, entrada histórica e 12 patrocinadores.
O footer global passou a ter eixo central institucional, sem o BAGÉ monumental.
A Home aguarda revisão por prints antes de qualquer novo checkpoint.
`/jogos` apresenta os 23 jogos fornecidos de 2026, em timeline mensal com filtros
por competição e mando, balanço da temporada e cards informativos sem rota individual.

Rodada atual em `codex/home-socios-next`, originada no checkpoint `c596566`:
rail com autoplay lento em desktop, loop visual, setas, arraste com mouse e scroll
nativo no touch. Interação pausa o movimento; retomada é explícita. Reduced motion
desativa autoplay. Logos locais de Copa FGF, Série A2 e Amistosos integradas sem
alterar as estatísticas oficiais. Próximo jogo demonstrativo mantém identificação
e agora tem countdown baseado em data/hora com fuso; sem confirmação ou após o
horário previsto, usa estado neutro, sem simulação de live.
`/socios` apresenta as 15 modalidades e valores fornecidos, em carteirinhas por
família, com seleção/virada, detalhes e contato via WhatsApp. Benefícios são
explicitamente **demonstrativos, não oficiais**. Não realiza associação online,
pagamento ou cadastro. Sócios incluído na navegação compartilhada e no footer.
Estas evoluções aguardam revisão visual humana e foram preservadas no checkpoint
local `758389b`. História foi integrada de `origin/feature/historia`, commit
`4c61111`, mantendo a implementação do colaborador; integração ainda sem push.
`/historia` deixou de ser placeholder e apresenta scrollytelling e cronologia.

Polimento pré-lançamento: logos de competição sobre fundo transparente, sem caixas;
bloco de registro do protótipo/amistosos e inscrição decorativa removidos de Jogos.
Último resultado do hero derivado de `matches2026`, compartilhando a ordenação da
vitrine de temporada. Carteirinha selecionada oferece acesso direto aos detalhes,
com foco e reduced motion; instruções e metadados funcionais ganharam legibilidade.
404 em português na identidade atual, metadata neutra e indicador próprio de
Arquivo na História, sem modificar a narrativa. Mudanças locais aguardam revisão humana.

## Etapas concluídas

- Fundação técnica, tokens institucionais, Header, Footer e navegação desktop/mobile.
- Escudo institucional, rotas placeholder e smoke tests.
- Checkpoints publicados em `origin/main`.
- Hero da Home: fotografia real do protótipo, manchete, próximo jogo e resultado
  integrados; notícia e próximo jogo demonstrativos identificados, último resultado real.
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
organiza os domínios, incluindo `matches`, `news`, `athletes`, `competitions` e
`memberships`; `src/server` reserva integrações privadas.
Server Components por padrão; Header e seletor das áreas do elenco são as
fronteiras Client, junto aos filtros de Jogos, controles do rail da Home e navegação/
voltar ao topo do footer, countdown e coleção interativa de Sócios. As rotas,
vitrines e perfis continuam compostos no servidor.
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

Próximo foco: revisão humana do polimento pré-lançamento, incluindo Jogos,
acesso aos detalhes de Sócios e 404; preservar as composições aprovadas.
Aguardar dados verificados
para Base, Diretoria e informações pessoais, além dos sete retratos restantes.
Revisão humana e integrações continuam dependentes de autorização.

## Pendências técnicas conhecidas

- Projeto declara pnpm 11.19.0; ambiente utiliza pnpm 11.25.0. Os validadores
  equivalentes passam, mas `pnpm check` é bloqueado pela divergência.
- `next/font/google` exige rede no build quando as fontes precisam ser obtidas.
- Aguardar os sete retratos restantes e dados individuais detalhados. O hero mantém
  notícia e próximo jogo demonstrativos identificados; resultado e vitrine usam Jogos 2026.
- Não há notícias verificadas nem acervo fotográfico histórico no repositório.
  Agora permanece compacto; a entrada histórica da Home utiliza a fundação já
  registrada em 5 de agosto de 1920 e o escudo. Notícias e Clube continuam placeholders.
  História agora possui narrativa e cronologia próprias; utiliza fotografia atual
  do Pedra Moura identificada como atual, sem simular acervo histórico.
- Os 12 logos fornecidos estão integrados sem modificar os arquivos. Redes sociais,
  rotas legais e crédito de desenvolvimento não foram inventados no footer.

As condições do ambiente não representam falha estrutural.

## Jogos 2026

Base fornecida pelo responsável: 23 jogos, 6 vitórias, 8 empates, 9 derrotas,
20 gols marcados e 26 sofridos, saldo -6. O balanço informado de 25 sofridos
diverge dos placares: Copa FGF soma 7 e Série A2 soma 19. Por decisão do responsável,
manter o cálculo de 26 até corrigir o placar divergente; nenhum resultado foi alterado.
O amistoso contra o Stand não integra os 23 jogos nem as estatísticas.
Datas, horários, cidades e autores/minutos dos gols foram alimentados com a base
fornecida. Rodadas adiadas, gol contra e pênalti estão representados explicitamente.
Na semifinal de volta, placar 0–1, agregado 1–1 e pênaltis 3–0 para o Gramadense
são informações separadas. As 11 fotos de estádios e os 17 escudos adversários
possuem mapeamento centralizado, sem alterar os arquivos. A visita ao Farroupilha
usa Boca do Lobo. Escudo do Stand preservado, sem incluir o clube no dataset.
Textos redundantes removidos, anatomia visual e filtros preservados.
Sem backend ou novas dependências. Aguardar revisão humana da consolidação.

## Decisões que devem ser preservadas

Não recriar o projeto; preservar arquitetura modular e `src/features`, sem
`src/modules`. Evitar dependências e infraestrutura sem necessidade concreta.
Server Components por padrão. Não inventar fatos do clube; exemplos sempre
identificados como demonstrativos. Não recolorir ou recriar o escudo. Jalde como
assinatura, fotografia e tipografia como base da composição. Mobile desde o início.

## Última validação conhecida

Polimento pré-lançamento em 02/10/2026: Prettier, ESLint, Next typegen, TypeScript,
build estático, 19 testes de domínio/smoke e `git diff --check` aprovados.
`pnpm check` bloqueado por versão; executados os binários locais equivalentes.
Build precisou de acesso à rede para obter as fontes já utilizadas.
Home, Jogos, Sócios e 404 conferidos em 320, 390, 768, 1280 e 1440 px, sem overflow.
Verificados acesso aos detalhes por teclado, foco no painel, mensagem específica
do WhatsApp, retorno da 404 à Home e indicador Arquivo da História.
Reduced motion tratado no controle de navegação; validar também em aparelho real.
Assets e datasets esportivos preservados. Aguardar revisão humana, sem commit/push.

Integração local de História: Prettier, ESLint, Next typegen, TypeScript, build
estático, 18 testes de domínio/smoke e `git diff --check` aprovados. Home, Jogos,
Elenco, Sócios e História abriram pela navegação compartilhada, sem erros de console.
O único conflito de merge foi no smoke test: preservados Home/Sócios e os novos
testes da narrativa histórica. Naquela validação, código de História idêntico ao commit `4c61111`;
demais implementações e assets preservados. Aguardar revisão antes de push.

Rodada Home/Sócios: Prettier, ESLint, Next typegen, TypeScript, build estático,
17 testes de domínio/smoke e `git diff --check` aprovados. Home e Sócios conferidas
em 320, 390, 768, 1280 e 1440 px, sem overflow horizontal. Verificados os 30 links
do rail, avanço automático, pausa, arraste e clique em perfil; as 15 seleções,
viradas, painel, preços e mensagens do WhatsApp. Reduced motion tratado no código;
swipe físico e preferência do sistema ainda merecem revisão em dispositivo real.
Capturas de desktop/mobile preparadas para revisão humana.

Home-hub: Prettier, ESLint, Next typegen, TypeScript, build estático e 14 testes
(incluindo vitrines, links, 12 patrocinadores e os 30 perfis) aprovados.
Reflow conferido em 320, 390, 768, 1280 e 1440 px, sem overflow horizontal da página.
Rail por setas e foco, logos e voltar ao topo por teclado conferidos; reduced motion
tratado em CSS e nos controles de scroll. Aguardar revisão humana dos prints.

Consolidação de Jogos 2026: Prettier, ESLint, Next typegen, TypeScript, build e 13 testes
(domínio e smoke HTTP) aprovados. Filtros conferidos nas nove combinações e por
teclado; revisão visual em 320, 390, 768, 1280 e 1440 px, sem overflow horizontal.
Fotos e escudos carregaram nos 23 cards; cinco gols, gol contra e decisão por
pênaltis revisados no mobile. Reduced motion preservado em CSS.

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
