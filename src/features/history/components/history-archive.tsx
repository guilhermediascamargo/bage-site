import { historyChronology } from "../data/chronology";
import styles from "./history-story.module.css";

export default function HistoryArchive() {
  return (
    <section
      id="arquivo"
      className={styles.archive}
      aria-labelledby="archive-title"
    >
      <h2 id="archive-title">Arquivo jalde-negro.</h2>
      <details>
        <summary>
          Consultar a cronologia <span aria-hidden="true">+</span>
        </summary>
        <dl>
          {historyChronology.map(({ date, text }) => (
            <div key={date}>
              <dt>{date}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </details>
    </section>
  );
}
