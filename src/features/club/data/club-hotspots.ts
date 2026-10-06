import type { ClubHotspot } from "../domain/club-hotspot";

// Imagens fornecidas e vídeo derivado; os três arquivos originais foram preservados.
export const clubMedia = {
  entryPoster: "/images/club/entry-poster.webp",
  interior: "/images/club/interior.webp",
  entrance: "/images/videos/club/entrance-720p.mp4",
} as const;

export const clubHotspots = [
  {
    id: "camisa",
    index: "01 / 05",
    kind: "shirt",
    eyebrow: "Identidade jalde-negra",
    title: "Camisa principal 2026",
    description:
      "A camisa principal de 2026 leva o jalde e o preto, cores do clube.",
    position: { x: 25.6, y: 48 },
    placement: "right",
    cardOffsetY: 25,
  },
  {
    id: "gaucho-1925",
    index: "02 / 05",
    kind: "trophy",
    eyebrow: "Conquistas",
    title: "1x Campeão Gaúcho",
    meta: "1925",
    description:
      "O título estadual de 1925 foi conquistado pelos Imortais de 25.",
    position: { x: 13.5, y: 37 },
    placement: "right",
    cardOffsetY: -20,
    href: "/historia",
    linkLabel: "Ver na História",
  },
  {
    id: "copa-governador-1974",
    index: "03 / 05",
    kind: "trophy",
    eyebrow: "Conquistas",
    title: "1x Campeão da Copa Governador do Estado",
    meta: "1974",
    description:
      "A conquista de 1974 teve um Ba-Gua decisivo na fase por pontos, sem final única.",
    position: { x: 13.5, y: 56 },
    placement: "right",
    cardOffsetY: -35,
    href: "/historia",
    linkLabel: "Ver na História",
  },
  {
    id: "segunda-divisao",
    index: "04 / 05",
    kind: "trophy",
    eyebrow: "Conquistas",
    title: "3x Campeão Gaúcho da 2ª Divisão",
    meta: "1964 · 1982 · 1985",
    position: { x: 13.5, y: 73 },
    placement: "right",
    cardOffsetY: 20,
    href: "/historia",
    linkLabel: "Ver na História",
  },
  {
    id: "escudo",
    index: "05 / 05",
    kind: "crest",
    eyebrow: "Desde 1920",
    title: "Símbolo Jalde-Negro",
    description:
      "O escudo reúne as iniciais GEB e as cores jalde e preta. O clube foi fundado em 5 de agosto de 1920.",
    position: { x: 49.2, y: 39 },
    placement: "bottom",
    href: "/historia",
    linkLabel: "Conhecer a História",
  },
] as const satisfies readonly ClubHotspot[];
