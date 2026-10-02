# Produto e escopo

Protótipo não oficial do site do Grêmio Esportivo Bagé. O estado detalhado e as
validações conhecidas ficam em `docs/project-status.md`.

## Experiência atual

- Home-hub: hero fotográfico, entrada de Notícias, rail dos 30 atletas, vitrine de
  Jogos 2026, entrada histórica e 12 patrocinadores.
- Jogos: 23 partidas oficiais de 2026, filtros, gols e decisão por agregado/pênaltis.
  Amistosos não integram as estatísticas; os placares somam 26 gols sofridos.
- Elenco: 30 profissionais, 23 retratos e 7 fallbacks, perfis individuais; Base e
  Diretoria aguardam dados verificados.
- História: scrollytelling e cronologia alternativa, preservando a narrativa integrada.
- Sócios: 15 modalidades e preços fornecidos, carteirinhas, detalhes e contato com
  o clube pelo WhatsApp. Benefícios explicitamente demonstrativos, não oficiais.
- Notícias e Clube permanecem placeholders. A notícia e o próximo jogo do hero
  são demonstrativos; o último resultado utiliza o dataset real de Jogos.

## Identidade e conteúdo

Jalde Contemporâneo: preto, jalde e marfim; Archivo como voz principal e Barlow
Condensed para números e linguagem esportiva. Fotografia, tipografia e composição
sustentam a identidade. Preservar os visuais aprovados, mobile, foco e reduced motion.

Não inventar notícias, atletas, partidas, estatísticas, história ou patrocinadores.
Exemplos exigem autorização e identificação visível. Usar as fontes existentes;
não duplicar datasets. Assets fornecidos não devem ser recriados ou recoloridos.
O protótipo mantém `noindex, nofollow` e não declara oficialidade.

## Domínios

`src/features` organiza `home`, `news`, `athletes`, `matches`, `competitions`,
`history`, `memberships`, `sponsors` e `club`. Classificação permanece reservada
para necessidade futura, sem regras ou conteúdo inventados.

## Limites e próximas definições

Sócios informa modalidades e encaminha o contato; não há associação online,
checkout, pagamentos ou cadastro. Sem backend, banco, CMS, autenticação ou API
esportiva nesta fase. Novas áreas e integrações dependem de escopo autorizado.

Aguardar revisão visual humana e condições oficiais dos benefícios, calendário
futuro confirmado, notícias verificadas e dados restantes de atletas/Base/Diretoria.
Conteúdo, direitos de uso e fluxos editoriais devem ser definidos pelo responsável
antes de novas integrações.
