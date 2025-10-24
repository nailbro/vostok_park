"use client";

import React from "react";
import styles from "./footer.module.scss";
import { FaWhatsapp, FaTelegramPlane, FaTiktok, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/features/context/LanguageContext";

const Footer: React.FC = () => {
    const { lang, setLang } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h3 className={styles.title}>{lang==="ru"? "Скачайте приложение" : "Тиркемени жүктөп алыңыз"}</h3>
                    <div className={styles.storeButtons}>
                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="/images/appstore.svg" alt="App Store" />
                        </a>
                        <a
                            href="https://play.google.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="/images/googleplay.svg" alt="Google Play" />
                        </a>
                    </div>
                    <hr className={styles.divider} />
                    <p className={styles.disclaimer}>
                        <span>{lang==="ru" ? "App Store является знаком обслуживания компании Apple Inc.": "App Store Apple Inc. компаниясынын кызмат көрсөткөн белгиси болуп саналат"}</span> <br />
                        <span> {lang==="ru" ? "Google Play и логотип Google Play являются товарными знаками корпорации Google LLC." : " Google Play жана Google Play логотиби Google LLC корпорациясынын товар белгиси болуп эсептелет"}</span>
                    </p>
                    <p className={styles.copy}>©2024 Восток Парк</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.socials}>
                        <a href="https://wa.me/996" className={`${styles.icon} ${styles.whatsapp}`}>
                            <FaWhatsapp />
                        </a>
                        <a href="https://t.me/" className={styles.icon}>
                            <FaTelegramPlane />
                        </a>
                        <a href="https://www.tiktok.com/" className={styles.icon}>
                            <FaTiktok />
                        </a>
                        <a href="https://www.instagram.com/" className={styles.icon}>
                            <FaInstagram />
                        </a>
                    </div>

                    <button className={styles.toTop} onClick={scrollToTop}>
                        Наверх ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
