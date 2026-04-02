"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.scene}>
      <p className={styles.hint}>Cliquez pour ouvrir ✉️</p>

      <div
        className={`${styles.envelopeWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((v) => !v)}
      >
        {/* Lettre */}
        <div className={styles.letter}>
          <div className={styles.letterDeco}>⚡ ✦ ⚡</div>
          <div className={styles.letterGreeting}>Bonjour 😊</div>
          <div className={styles.letterContent}>
            Tu as une super énergie aujourd&apos;hui,
            <br />
            vraiment positive et motivante ✨
            <br />
            Ça fait plaisir de travailler avec
            <br />
            quelqu&apos;un qui apporte autant de
            <br />
            bonne humeur et de sérieux 👍
            <br />
            <br />
          </div>
          <div className={styles.letterSign}>Bonne journée à toi 🌟</div>
          <div className={styles.letterDecoBottom}>· · ✦ Khaoulatez ✦ · ·</div>
        </div>

        {/* Enveloppe */}
        <div className={styles.envelope}>
          <div className={styles.envBody}>
            <div className={styles.envSideLeft} />
            <div className={styles.envSideRight} />
            <div className={styles.envBottomFlap} />

            <div className={styles.postmark}>
              <span className={styles.postmarkText}>
                Alger
                <br />
                2026
              </span>
            </div>

            <div className={styles.stamp}>
              <div className={styles.stampInner}>⚡</div>
              <div className={styles.stampText}>POST</div>
            </div>

            <div className={styles.address}>
              <div className={styles.addrLine} />
              <div className={styles.addrLine} />
              <div className={styles.addrLine} />
            </div>
          </div>

          <div className={styles.seal}>✦</div>

          <div className={styles.envFlapWrap}>
            <div className={styles.envFlapFront} />
            <div className={styles.envFlapBack} />
          </div>
        </div>
      </div>

      <button className={styles.cta} onClick={() => setIsOpen((v) => !v)}>
        {isOpen ? "Fermer ✉️" : "Ouvrir la lettre ✉️"}
      </button>
    </main>
  );
}