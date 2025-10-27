"use client";

import { motion } from "framer-motion";
import styles from "./steps.module.scss";
import { useLanguage } from "@/features/context/LanguageContext";

const steps = [
  {
    num: "1",
    ru: "Заполните форму и оставьте заявку",
    kgz: "Форманы толтуруп, өтүнмө калтырыңыз",
  },
  {
    num: "2",
    ru: "Мы позвоним вам, чтобы уточнить детали",
    kgz: "Биз сизге чалып, маалыматты тактайбыз",
  },
  {
    num: "3",
    ru: "Оформитесь в таксопарке",
    kgz: "Таксопаркка катталыңыз",
  },
  {
    num: "4",
    ru: "Выходите на линию и начинайте зарабатывать",
    kgz: "Линияга чыгып, акча табууну баштаңыз",
  },
];

export default function StepsSection() {
  const { lang } = useLanguage();

  return (
    <section id="steps" className={styles.section}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        {lang === "ru" ? "Как начать работу" : "Жумушту кантип баштоо керек"}
      </motion.h2>
      <div className={styles.grid}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}>
            <span className={styles.number}>{step.num}</span>
            <p className={styles.text}>{lang === "ru" ? step.ru : step.kgz}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
