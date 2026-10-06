import { matches2026 } from "../../matches/data/matches-2026";
import { seasonSummary } from "../../matches/domain/season-helpers";
import type { SeasonMatch } from "../../matches/domain/season-match";
import type { NewsArticle, NewsBlock } from "../domain/news-article";

// Os registros de Jogos continuam sendo a fonte dos fatos esportivos.
function matchRecord(id: string) {
  const match = matches2026.find((item) => item.id === id);
  if (!match?.date) {
    throw new Error(`Registro esportivo incompleto para a notícia: ${id}`);
  }
  return {
    ...match,
    date: match.date,
  };
}

function goalsText(match: SeasonMatch, teamSlug: string) {
  return match.goals
    .filter((goal) => goal.teamSlug === teamSlug)
    .map(({ scorer, minute }) => `${scorer} (${minute})`)
    .join(", ");
}

const paragraph = (text: string): NewsBlock => ({ type: "paragraph", text });
const heading = (text: string): NewsBlock => ({ type: "heading", text });
const closing = matchRecord("a2-15");
const guarani = matchRecord("a2-06");
const birthday = matchRecord("a2-02");
const semifinal = matchRecord("fgf-sf-02");
if (!semifinal.aggregate || !semifinal.shootout) {
  throw new Error(
    "A semifinal precisa preservar agregado e pênaltis no registro esportivo.",
  );
}
const qualification = matchRecord("fgf-06");
const derby = matchRecord("fgf-02");
const brasilDraw = matchRecord("fgf-04");
const pelotasDraw = matchRecord("a2-03");
const summary = seasonSummary(matches2026);

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: "bage-fecha-temporada-com-vitoria-no-pedra-moura",
    title: "Bagé fecha a temporada com vitória por 4 a 1 no Pedra Moura",
    excerpt: "Vitória sobre o Brasil de Pelotas encerra a temporada de 2026.",
    category: "FUTEBOL",
    publishedAt: closing.date,
    cover: {
      src: "/images/news/2026-09-27-bage-4x1-brasil-pelotas.webp",
      alt: "Jogadores do Bagé comemoram durante a vitória sobre o Brasil de Pelotas no Pedra Moura.",
      objectPosition: "50% 25%",
    },
    body: [
      paragraph(
        `O Bagé venceu o Brasil de Pelotas por ${closing.homeScore} a ${closing.awayScore} no Pedra Moura, em 27 de setembro. A partida foi válida pela ${closing.phaseOrRound.toLowerCase()} da ${closing.competition}.`,
      ),
      paragraph(
        `Os gols do Jalde-Negro foram marcados por ${goalsText(closing, "bage")}.`,
      ),
      paragraph(
        `Pelo Brasil de Pelotas, marcou ${goalsText(closing, closing.awayTeam.slug)}.`,
      ),
    ],
  },
  {
    slug: "bage-vence-guarani-va-no-pedra-moura",
    title: "Bagé vence o Guarani-VA no Pedra Moura",
    excerpt: "João Victor Castro marcou na vitória por 1 a 0 pela Série A2.",
    category: "FUTEBOL",
    publishedAt: guarani.date,
    cover: {
      src: "/images/news/2026-08-26-bage-x-guarani-va.webp",
      alt: "Jogadores do Bagé durante a partida contra o Guarani de Venâncio Aires no Pedra Moura.",
      objectPosition: "50% 40%",
    },
    body: [
      paragraph(
        `No dia 26 de agosto, o Bagé venceu o ${guarani.awayTeam.name} por ${guarani.homeScore} a ${guarani.awayScore} no Pedra Moura, pela ${guarani.competition}.`,
      ),
      paragraph(
        `O gol da partida foi marcado por ${goalsText(guarani, "bage")}.`,
      ),
      paragraph(
        "O jogo corresponde à rodada 6, disputada depois da rodada 7 no calendário registrado da competição.",
      ),
    ],
  },
  {
    slug: "bage-celebra-106-anos-com-vitoria-no-pedra-moura",
    title: "Bagé celebra 106 anos com vitória no Pedra Moura",
    excerpt:
      "Em 5 de agosto, o clube venceu o Lajeadense por 2 a 0 pela Série A2.",
    category: "CLUBE",
    publishedAt: birthday.date,
    cover: {
      src: "/images/news/2026-08-05-bage-106-anos.webp",
      alt: "Bagé em campo no Pedra Moura na partida disputada no aniversário de 106 anos do clube.",
      objectPosition: "50% 40%",
    },
    homeFeatured: 2,
    body: [
      paragraph(
        "Fundado em 5 de agosto de 1920, o Grêmio Esportivo Bagé completou 106 anos em 2026.",
      ),
      paragraph(
        `Na mesma data, o Jalde-Negro venceu o ${birthday.awayTeam.name} por ${birthday.homeScore} a ${birthday.awayScore}, no Pedra Moura. O confronto foi válido pela ${birthday.phaseOrRound.toLowerCase()} da ${birthday.competition}.`,
      ),
      paragraph(`Os gols foram marcados por ${goalsText(birthday, "bage")}.`),
    ],
  },
  {
    slug: "bage-vence-em-gramado-e-encerra-campanha-na-copa-fgf",
    title:
      "Bagé vence em Gramado, mas encerra campanha na semifinal da Copa FGF",
    excerpt:
      "Vitória por 1 a 0 deixou o agregado em 1 a 1; o Gramadense avançou nos pênaltis.",
    category: "FUTEBOL",
    publishedAt: semifinal.date,
    cover: {
      src: "/images/news/2026-07-05-gramadense-x-bage.webp",
      alt: "Bagé em campo diante do Gramadense pela semifinal da Copa FGF.",
    },
    body: [
      paragraph(
        `O Bagé venceu o ${semifinal.homeTeam.name} por ${semifinal.awayScore} a ${semifinal.homeScore} em 5 de julho, na Vila Olímpica, em Gramado. Foi o jogo de volta da semifinal da ${semifinal.competition}.`,
      ),
      paragraph(
        `O gol do Jalde-Negro foi marcado por ${goalsText(semifinal, "bage")}.`,
      ),
      heading("Decisão nos pênaltis"),
      paragraph(
        `A vitória levou o placar agregado a ${semifinal.aggregate?.join(" a ")}. Na disputa de pênaltis, o Gramadense venceu por ${semifinal.shootout?.join(" a ")} e avançou à final.`,
      ),
    ],
  },
  {
    slug: "bage-vence-farroupilha-e-avanca-a-semifinal-da-copa-fgf",
    title: "Bagé vence o Farroupilha e avança à semifinal da Copa FGF",
    excerpt:
      "Vitória por 2 a 1 na Boca do Lobo garantiu a classificação na última rodada da primeira fase.",
    category: "FUTEBOL",
    publishedAt: qualification.date,
    cover: {
      src: "/images/news/2026-06-17-bage-x-farroupilha.webp",
      alt: "Bagé enfrenta o Farroupilha pela Copa FGF.",
      objectPosition: "50% 8%",
    },
    homeFeatured: 3,
    body: [
      paragraph(
        `O Bagé venceu o ${qualification.homeTeam.name} por ${qualification.awayScore} a ${qualification.homeScore} em 17 de junho, na Boca do Lobo, em Pelotas. A partida foi válida pela ${qualification.phaseOrRound.toLowerCase()} da ${qualification.competition}.`,
      ),
      paragraph(
        `Marcaram pelo Jalde-Negro ${goalsText(qualification, "bage")}. Pelo Farroupilha, marcou ${goalsText(qualification, qualification.homeTeam.slug)}.`,
      ),
      paragraph("Com o resultado, o Bagé avançou à semifinal da Copa FGF."),
    ],
  },
  {
    slug: "bage-vence-ba-gua-pela-copa-fgf",
    title: "Bagé vence o Ba-Gua pela Copa FGF",
    excerpt: "Chaves marcou o gol do 1 a 0 sobre o Guarany no Estrela D’Alva.",
    category: "FUTEBOL",
    publishedAt: derby.date,
    cover: {
      src: "/images/news/2026-05-20-bage-x-guarany-bagua.webp",
      alt: "Bagé e Guarany disputam o clássico Ba-Gua pela Copa FGF.",
    },
    body: [
      paragraph(
        `No clássico Ba-Gua de 20 de maio, o Bagé venceu o rival ${derby.homeTeam.name} por ${derby.awayScore} a ${derby.homeScore}, no Estrela D’Alva.`,
      ),
      paragraph(
        `O gol do clássico foi marcado por ${goalsText(derby, "bage")}.`,
      ),
      paragraph(
        `O Ba-Gua foi válido pela ${derby.phaseOrRound.toLowerCase()} da ${derby.competition}.`,
      ),
    ],
  },
  {
    slug: "bage-e-brasil-de-pelotas-empatam-no-pedra-moura",
    title: "Bagé e Brasil de Pelotas empatam no Pedra Moura",
    excerpt:
      "Gols de Guty e Michel definiram o empate por 1 a 1 pela Copa FGF.",
    category: "FUTEBOL",
    publishedAt: brasilDraw.date,
    cover: {
      src: "/images/news/2026-06-04-bage-x-brasil-pelotas.webp",
      alt: "Bagé e Brasil de Pelotas em campo no Pedra Moura pela Copa FGF.",
    },
    body: [
      paragraph(
        `Bagé e ${brasilDraw.awayTeam.name} empataram por ${brasilDraw.homeScore} a ${brasilDraw.awayScore} em 4 de junho, no Pedra Moura.`,
      ),
      paragraph(
        `Pelo Brasil de Pelotas, marcou ${goalsText(brasilDraw, brasilDraw.awayTeam.slug)}. Pelo Bagé, marcou ${goalsText(brasilDraw, "bage")}.`,
      ),
      paragraph(
        `A partida foi válida pela ${brasilDraw.phaseOrRound.toLowerCase()} da ${brasilDraw.competition}.`,
      ),
    ],
  },
  {
    slug: "bage-anuncia-michel-henrique-para-reforcar-o-ataque",
    title: "Bagé anuncia Michel Henrique para reforçar o ataque",
    excerpt:
      "O Jalde-Negro confirmou a contratação do centroavante Michel Henrique para a disputa da Copa FGF e a sequência da temporada 2026.",
    category: "FUTEBOL",
    publishedAt: "2026-05-11",
    cover: {
      src: "/images/news/2026-05-11-michel-henrique.webp",
      alt: "Michel Henrique em material de anúncio como reforço do Bagé em 2026.",
      objectFit: "contain",
    },
    body: [
      {
        type: "paragraph",
        text: "O Bagé confirmou, em 11 de maio de 2026, a contratação do centroavante Michel Henrique para reforçar o setor ofensivo na Copa FGF.",
      },
      {
        type: "paragraph",
        text: "Natural de São Gabriel, o atacante chegou ao Pedra Moura após passagem pelo Marília-SP. No primeiro trimestre da temporada, também havia defendido o Inter-SM no Campeonato Gaúcho.",
      },
      {
        type: "paragraph",
        text: "Michel chegou ao clube trazendo experiência acumulada no futebol gaúcho. O centroavante já havia sido artilheiro do Gauchão em duas oportunidades, pelo Passo Fundo em 2015 e pelo São Luiz em 2018.",
      },
      {
        type: "paragraph",
        text: "A contratação reforçou as opções ofensivas do elenco jalde-negro às vésperas da estreia na Copa FGF.",
      },
    ],
  },
  {
    slug: "bage-empata-com-pelotas-na-boca-do-lobo",
    title: "Bagé empata com o Pelotas na Boca do Lobo",
    excerpt:
      "Pedro marcou para o Jalde-Negro no empate por 1 a 1 pela Série A2.",
    category: "FUTEBOL",
    publishedAt: pelotasDraw.date,
    cover: {
      src: "/images/news/2026-08-09-pelotas-x-bage.webp",
      alt: "Bagé enfrenta o Pelotas na Boca do Lobo.",
    },
    body: [
      paragraph(
        `Pelotas e Bagé empataram por ${pelotasDraw.homeScore} a ${pelotasDraw.awayScore} em 9 de agosto, na Boca do Lobo, em Pelotas.`,
      ),
      paragraph(
        `Pelo Bagé, marcou ${goalsText(pelotasDraw, "bage")}. O gol do Pelotas foi de ${goalsText(pelotasDraw, pelotasDraw.homeTeam.slug)}.`,
      ),
      paragraph(
        `O confronto foi válido pela ${pelotasDraw.phaseOrRound.toLowerCase()} da ${pelotasDraw.competition}.`,
      ),
    ],
  },
  {
    slug: "os-numeros-do-bage-na-temporada-2026",
    title: "Os números do Bagé na temporada 2026",
    excerpt: `${summary.played} partidas oficiais entre Copa FGF e Série A2.`,
    category: "CLUBE",
    publishedAt: "2026-09-28",
    cover: {
      src: "/images/news/2026-temporada-bage.webp",
      alt: "Jogadores do Bagé reunidos durante a temporada 2026.",
      objectPosition: "50% 70%",
    },
    homeFeatured: 1,
    body: [
      paragraph(
        `A temporada 2026 do Bagé reúne ${summary.played} partidas oficiais registradas, entre a Copa FGF e a Série A2.`,
      ),
      heading("Resultados"),
      paragraph(
        `Foram ${summary.win} vitórias, ${summary.draw} empates e ${summary.loss} derrotas. O balanço considera o resultado de cada partida no tempo regulamentar, sem somar disputas de pênaltis ou amistosos.`,
      ),
      paragraph(
        `São ${matches2026.filter(({ competition }) => competition === "Copa FGF").length} jogos pela Copa FGF e ${matches2026.filter(({ competition }) => competition === "Série A2").length} pela Série A2.`,
      ),
      heading("Gols"),
      paragraph(
        `O Jalde-Negro marcou ${summary.goalsFor} gols e sofreu ${summary.goalsAgainst}. O saldo foi de ${summary.goalsFor - summary.goalsAgainst}.`,
      ),
      paragraph(
        `A última partida registrada foi a vitória por ${closing.homeScore} a ${closing.awayScore} sobre o Brasil de Pelotas, no Pedra Moura, em 27 de setembro.`,
      ),
    ],
  },
];
