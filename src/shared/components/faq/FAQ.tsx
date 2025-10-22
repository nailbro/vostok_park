// import styles from './faq.module.scss'

// export default function FAQ(){
//     return(
//         <section className={styles.faq}>
//             <div className={styles.container}>

//             </div>
//         </section>
//     )
// }

"use client"

import { useState } from "react";
import styles from "./faq.module.scss";
import { faqData } from "@/shared/mocks/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Ответы на вопросы</h2>
      <div className={styles.list}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${openIndex === index ? styles.active : ""}`}>
            <button className={styles.question} onClick={() => toggle(index)}>
              {item.question}
              <span
                className={`${styles.arrow} ${openIndex === index ? styles.open : ""}`}>
                <svg className={`${styles.arrow}`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 9L13.5 19L3 9" stroke="#1E1E1E" stroke-width="2" />
                </svg>

              </span>
            </button>
            <div
              className={`${styles.answerWrapper} ${openIndex === index ? styles.show : ""
                }`}>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>
          Если у вас еще остались вопросы, то отправьте нам заявку и мы с вами
          свяжемся
        </p>
        <button className={styles.button}>Отправить заявку</button>
      </div>
    </section>
  );
}
