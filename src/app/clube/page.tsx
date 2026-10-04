import type { Metadata } from "next";
import ClubExperience from "@/features/club/components/club-experience";
import { clubHotspots } from "@/features/club/data/club-hotspots";

export const metadata: Metadata = {
  title: "Clube | Grêmio Esportivo Bagé",
  description:
    "Explore a identidade e as conquistas do Grêmio Esportivo Bagé em uma experiência interativa deste protótipo não oficial.",
};

export default function ClubPage() {
  return (
    <main>
      <h1 className="sr-only">Clube</h1>
      <ClubExperience hotspots={clubHotspots} />
    </main>
  );
}
