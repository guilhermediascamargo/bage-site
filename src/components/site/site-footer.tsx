import Image from "next/image";
import Link from "next/link";
import FooterExperience from "./footer-experience";
import styles from "./site-footer.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.institutional}>
        <div className={styles.institutionalInner}>
          <Link
            href="/"
            className={styles.identity}
            aria-label="Grêmio Esportivo Bagé — início"
          >
            <Image
              src="/images/brand/ge-bage-escudo.png"
              alt="Escudo do Grêmio Esportivo Bagé"
              width={1280}
              height={1537}
              sizes="72px"
              className={styles.crest}
            />
            <span>G.E. BAGÉ</span>
          </Link>
          <FooterExperience />
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.legalInner}>
          <p className={styles.status}>
            Protótipo não oficial · desenvolvido para apresentação ao Grêmio
            Esportivo Bagé.
          </p>
          <div className={styles.authorship}>
            <p>Conceito e desenvolvimento</p>
            <Image
              src="/images/brand/cancha/cancha-digital-horizontal-white.png"
              alt="Cancha Digital"
              width={1672}
              height={941}
              sizes="180px"
              className={styles.cancha}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
