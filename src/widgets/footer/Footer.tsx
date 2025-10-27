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
        <footer id="4" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                        <h3 className={styles.title}>{lang === "ru" ? "Скачайте приложение" : "Тиркемени жүктөп алыңыз"}</h3>
                        <div className={styles.storeButtons}>
                            <a
                                href="https://apps.apple.com/us/app/yandex-go-taxi-food-market/id472650686"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src="/icons/appStore.png" alt="App Store" />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=ru.yandex.taxi"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src="/icons/GooglePlay .png" alt="Google Play" />
                            </a>
                        </div>
                        <hr className={styles.divider} />
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6L12.7071 5.29289L12 4.58579L11.2929 5.29289L12 6ZM11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18L11 18ZM16.7071 9.29289L12.7071 5.29289L11.2929 6.70711L15.2929 10.7071L16.7071 9.29289ZM11.2929 5.29289L7.29289 9.29289L8.70711 10.7071L12.7071 6.70711L11.2929 5.29289ZM11 6L11 18L13 18L13 6L11 6Z" fill="#1E1E1E" />
                            </svg></button>
                    </div>
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.disclaimer}>
                            <span>{lang === "ru" ? "App Store является знаком обслуживания компании Apple Inc." : "App Store Apple Inc. компаниясынын кызмат көрсөткөн белгиси болуп саналат"}</span> <br />
                            <span> {lang === "ru" ? "Google Play и логотип Google Play являются товарными знаками корпорации Google LLC." : " Google Play жана Google Play логотиби Google LLC корпорациясынын товар белгиси болуп эсептелет"}</span>
                        </p>
                        <p className={styles.copy}>©2024 Восток Парк</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
