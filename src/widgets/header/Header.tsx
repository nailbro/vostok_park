"use client";
import styles from "./header.module.scss";
import ParkLogo from '@public/icons/Логотип.png'
import YandexLogo from '@public/icons/Логотип Яндекс.png'
import Image from "next/image";
import { useLanguage } from "@/features/context/LanguageContext";
import { HeaderTrans } from "@/shared/mocks/lang/headerKgz";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = HeaderTrans[lang];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={ParkLogo} alt="" />
            <Image src={YandexLogo} alt="" />
          </div>
          <div className={styles.nav}>
            <ul>
              <li>{t.advantages}</li>
              <li>{t.tarif}</li>
              <li>{t.cash}</li>
              <li>{t.contacts}</li>
            </ul>
          </div>
          <span className={styles.contacts}>+996(223)810-104</span>
          <nav className={styles.btns}>
            <button
              className={`${styles.langBtn} ${lang === "ru" ? styles.active : ""}`}
              onClick={() => setLang("ru")}>
              RU
            </button>
            <span className={styles.divider}>|</span>
            <button
              className={`${styles.langBtn} ${lang === "kgz" ? styles.active : ""}`}
              onClick={() => setLang("kgz")}>
              KR
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
