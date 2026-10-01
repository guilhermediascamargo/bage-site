import Image from "next/image";
import HomeHub from "@/features/home/components/home-hub";
import LastResult from "@/features/matches/components/last-result";
import NextMatch from "@/features/matches/components/next-match";
import {
  demoLastResult,
  demoNextMatch,
} from "@/features/matches/data/demo-matches";
import FeaturedNews from "@/features/news/components/featured-news";
import { demoFeaturedNews } from "@/features/news/data/demo-news";
import styles from "./page.module.css";

export default function HomePage() {
  const hasDemoContent = [demoNextMatch, demoFeaturedNews, demoLastResult].some(
    (content) => content?.contentStatus === "demo",
  );
  return (
    <main>
      <section
        className={styles.opening}
        aria-label="Destaques do Grêmio Esportivo Bagé"
        aria-describedby={hasDemoContent ? "demo-notice" : undefined}
      >
        <div className={styles.photograph}>
          <Image
            src="/images/prototype/home/hero-jogador.jpg"
            alt="Jogador com uniforme jalde e negro, de braços abertos em campo."
            fill
            sizes="100vw"
            preload
            className={styles.image}
          />
        </div>
        <div className={styles.editorial}>
          <FeaturedNews news={demoFeaturedNews} />
          {hasDemoContent && (
            <p
              id="demo-notice"
              className="mt-7 max-w-md text-xs leading-relaxed text-bage-ivory/85"
            >
              <strong className="font-semibold">Conteúdo demonstrativo.</strong>{" "}
              Notícia e dados esportivos ilustrativos, sem caráter oficial.
            </p>
          )}
        </div>
        <div className={styles.fixture}>
          <NextMatch match={demoNextMatch} />
        </div>
        <div className={styles.result}>
          <LastResult
            match={demoLastResult}
            prominent={demoNextMatch === null}
          />
        </div>
      </section>
      <HomeHub />
    </main>
  );
}
