"use client";

import Image from "next/image";
import { useState } from "react";
import {
  membershipFamilies,
  type MembershipPlan,
} from "../data/membership-plans";
import { membershipWhatsApp } from "../domain/membership-contact";
import styles from "./membership-page.module.css";

export default function MembershipCollection({
  plans,
}: {
  plans: readonly MembershipPlan[];
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const selected = plans.find((plan) => plan.id === selectedId);

  function select(plan: MembershipPlan) {
    setSelectedId(plan.id);
    setFlippedId(flippedId === plan.id ? null : plan.id);
  }

  return (
    <div className={styles.families}>
      {membershipFamilies.map((family, index) => (
        <section
          key={family.id}
          className={styles.family}
          aria-labelledby={`family-${family.id}`}
        >
          <div className={styles.familyHeading}>
            <span aria-hidden="true">0{index + 1}</span>
            <h3 id={`family-${family.id}`}>{family.title}</h3>
          </div>
          <ul className={styles.cardGrid}>
            {plans
              .filter((plan) => plan.family === family.id)
              .map((plan) => {
                const flipped = flippedId === plan.id;
                const active = selectedId === plan.id;
                return (
                  <li key={plan.id}>
                    <button
                      type="button"
                      className={styles.card}
                      data-tone={plan.tone}
                      data-flipped={flipped}
                      data-selected={active}
                      data-plan-id={plan.id}
                      aria-label={`${flipped ? "Voltar à frente de" : "Ver benefícios demonstrativos de"} ${plan.name}, R$ ${plan.monthlyPrice} por mês`}
                      aria-pressed={active}
                      aria-controls={`membership-details-${family.id}`}
                      onClick={() => select(plan)}
                    >
                      <span className={styles.cardInner}>
                        <span
                          className={`${styles.face} ${styles.front}`}
                          aria-hidden={flipped}
                        >
                          <span className={styles.cardHeader}>
                            <Image
                              src="/images/brand/ge-bage-escudo.png"
                              alt=""
                              width={1280}
                              height={1537}
                              sizes="32px"
                              className={styles.cardCrest}
                            />
                            <span>GRÊMIO ESPORTIVO BAGÉ</span>
                            <span className={styles.cardYear}>2026</span>
                          </span>
                          <span className={styles.cardName}>
                            <small>Sócio</small>
                            {plan.name.replace(/^Sócio /, "")}
                          </span>
                          <span className={styles.cardBottom}>
                            <span className={styles.cardInstruction}>
                              Virar / detalhes <span aria-hidden="true">↻</span>
                              <small>MODELO · SEM VALIDADE</small>
                            </span>
                            <span className={styles.price}>
                              <small>R$</small>
                              {plan.monthlyPrice}
                              <small>/mês</small>
                            </span>
                          </span>
                        </span>
                        <span
                          className={`${styles.face} ${styles.back}`}
                          aria-hidden={!flipped}
                        >
                          <span className={styles.demoTag}>Demonstrativo</span>
                          <span className={styles.backTitle}>{plan.name}</span>
                          <span className={styles.backBenefits}>
                            {plan.demoBenefits.slice(0, 2).map((benefit) => (
                              <span key={benefit}>· {benefit}</span>
                            ))}
                          </span>
                          <span className={styles.backFoot}>
                            Detalhes abaixo <span aria-hidden="true">↓</span> ·
                            Toque para voltar
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
          </ul>
          <section
            id={`membership-details-${family.id}`}
            className={styles.details}
            hidden={selected?.family !== family.id}
            aria-label="Detalhes da modalidade selecionada"
          >
            {selected?.family === family.id && (
              <>
                <div className={styles.detailIdentity}>
                  <p className={styles.eyebrow}>{family.title} / Selecionada</p>
                  <h4>{selected.name}</h4>
                  <p className={styles.detailPrice}>
                    R$ <strong>{selected.monthlyPrice}</strong>
                    <span>/mês</span>
                  </p>
                </div>
                <div className={styles.detailBenefits}>
                  <strong className={styles.demoTag}>
                    Benefícios demonstrativos · não oficiais
                  </strong>
                  <ul>
                    {selected.demoBenefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <p>
                    Confirme valores e condições diretamente com o clube. Esta
                    página não realiza associação online.
                  </p>
                  <a
                    href={membershipWhatsApp(selected.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    Consultar esta modalidade <span aria-hidden="true">↗</span>
                    <span className="sr-only">
                      {" "}
                      (abre WhatsApp em nova aba)
                    </span>
                  </a>
                </div>
              </>
            )}
          </section>
        </section>
      ))}
    </div>
  );
}
