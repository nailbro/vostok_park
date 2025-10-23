"use client";
import { useState } from "react";
import styles from "./faq.module.scss";
import { faqData } from "@/shared/mocks/lang/faqKgz";
import { useLanguage } from "@/features/context/LanguageContext";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang, setLang } = useLanguage();
  const t = faqData[lang];
  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>{t.title}</h2>

      <div className={styles.list}>
        {t.faq.map((item, index) => (
          <div key={index} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(index)}>
              {item.question}
              <svg
                className={`${styles.arrow} ${
                  openIndex === index ? styles.open : ""
                }`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {openIndex === index && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>{t.bottomText}</p>
        <button className={styles.button}>{t.buttonText}</button>
      </div>
    </section>
  );
}