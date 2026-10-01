import type {
  FinishedMatch,
  ScheduledMatch,
  TeamSummary,
} from "@/features/matches/domain/match-summary";

const bage: TeamSummary = {
  name: "Grêmio Esportivo Bagé",
  shortName: "Bagé",
  crest: "/images/brand/ge-bage-escudo.png",
};

const opponent: TeamSummary = { name: "Adversário" };

export const demoNextMatch: ScheduledMatch | null = {
  id: "demo-next-match",
  competition: "Competição demonstrativa",
  season: "2026",
  homeTeam: bage,
  awayTeam: opponent,
  date: "18/10/2026",
  time: "16h",
  venue: "Local demonstrativo",
  status: "scheduled",
  contentStatus: "demo",
};

export const demoLastResult: FinishedMatch | null = {
  id: "demo-last-result",
  competition: "Competição demonstrativa",
  season: "2026",
  homeTeam: opponent,
  awayTeam: bage,
  date: "27/09/2026",
  status: "finished",
  score: { home: 1, away: 2 },
  contentStatus: "demo",
};
