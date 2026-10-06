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
- Notícias: dez matérias factuais de Futebol/Clube, listagem cronológica, template
  único e três destaques curados no Agora. Dez capas editoriais locais e créditos opcionais, sem atribuições presumidas.
- Clube: primeiro frame, vídeo de entrada e interior interativo com camisa, três
  conquistas e escudo. Cards contextuais dentro da cena em todas as larguras;
  mobile/tablet usam overlay inferior com scroll interno quando necessário.
  Conteúdo local fornecido, painel único e entrada sem vídeo em reduced motion.
- A notícia e o próximo jogo do hero
  são demonstrativos; o último resultado utiliza o dataset real de Jogos.

## Identidade e conteúdo

Jalde Contemporâneo: preto, jalde e marfim; Archivo como voz principal e Barlow
Condensed para números e linguagem esportiva. Fotografia, tipografia e composição
sustentam a identidade. Preservar os visuais aprovados, mobile, foco e reduced motion.

Não inventar notícias, atletas, partidas, estatísticas, história ou patrocinadores.
Exemplos exigem autorização e identificação visível. Usar as fontes existentes;
não duplicar datasets. Assets fornecidos não devem ser recriados ou recoloridos.
O protótipo mantém `noindex, nofollow` e não declara oficialidade. Cada linha
visível deve acrescentar informação: remover redundâncias sem cortar fatos,
instruções ou identificação necessária de conteúdo demonstrativo. Sócios usa
um motivo geométrico decorativo inspirado na abelha, sem representar arte oficial
do mascote; não há mascote nem novo hotspot em Clube.

### Perspectiva editorial do Ba-Gua

O Guarany pode e deve ser mencionado quando necessário para contextualizar fatos
históricos, partidas e acontecimentos do G.E. Bagé. O site deve sempre manter
perspectiva jalde-negra: o Bagé é o protagonista. Quando pertinente à narrativa,
identificar o Guarany como rival e o confronto como clássico Ba-Gua, sem aplicar
a expressão mecanicamente aos dados funcionais. Evitar conteúdo que desenvolva,
promova ou dê protagonismo institucional ao rival. Ao mesmo tempo, manter linguagem
factual, respeitosa e não depreciativa.

Essa regra orienta o foco da narrativa, sem ocultar derrotas, alterar placares ou
apagar contexto histórico. Preservar a identificação dos adversários, o primeiro
Ba-Gua, o 7–0 e a composição real do combinado que enfrentou o Santos em 1957.

## Domínios

`src/features` organiza `home`, `news`, `athletes`, `matches`, `competitions`,
`history`, `memberships`, `sponsors` e `club`. Classificação permanece reservada
para necessidade futura, sem regras ou conteúdo inventados.

## Limites e próximas definições

Sócios informa modalidades e encaminha o contato; não há associação online,
checkout, pagamentos ou cadastro. Sem backend, banco, CMS, autenticação ou API
esportiva nesta fase. Novas áreas e integrações dependem de escopo autorizado.

Aguardar revisão visual humana e condições oficiais dos benefícios, calendário
futuro confirmado, fotografias específicas das matérias e dados restantes de atletas/Base/Diretoria.
Conteúdo, direitos de uso e fluxos editoriais devem ser definidos pelo responsável
antes de novas integrações.
