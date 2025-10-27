"use client";

import { motion } from "framer-motion";
import styles from "./OnlineConnect.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/features/context/LanguageContext";

export default function OnlineConnect() {
    const {lang}=useLanguage()

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/img/Фото.png"
                        alt="Онлайн подключение"
                        width={1200}
                        height={400}
                        className={styles.image}
                        priority
                    />
                </div>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    <h2 className={styles.title}>{lang==="ru"?"Подключение онлайн":"Онлайн туташуу"}</h2>
                    <p className={styles.text}>
                        {lang==="ru"
                        ?"Чтобы подключить сервис вам не понадобится никуда ехать или подписывать бумажные документы — для регистрации просто заполните форму"
                        :"Кызматка туташуу үчүн эч жакка баруунун же кагаз түрүндөгү документтерге кол коюунун кереги жок - катталуу үчүн форманы толтуруңуз"}
                    </p>
                    <Link href="#form" className={styles.button}>
                        {lang==="ru"?"Заполнить форму":"Форманы толтуруу"}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
