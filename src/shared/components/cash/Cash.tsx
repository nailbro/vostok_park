"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./cash.module.scss";
import { useLanguage } from "@/features/context/LanguageContext";

interface DepositVideo {
  src: string;
  thumbnail: string;
}

const videos: DepositVideo[] = [
  { thumbnail: "/videos/Мбанк Умай.png", src: "/videos/photo.mp4" },
  { thumbnail: "/videos/Мбанк Оной.png", src: "/videos/control.mp4" },
  { thumbnail: "/videos/Мегапей.png", src: "/videos/control.mp4" },
  { thumbnail: "/videos/Мбанк.png", src: "/videos/control.mp4" },
  { thumbnail: "/videos/Оной.png", src: "/videos/photo.mp4" },
  { thumbnail: "/videos/Pay24.png", src: "/videos/control.mp4" },
];

export default function Cash() {
  const { lang } = useLanguage();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });

    const video = videoRefs.current[index];
    if (video) video.paused ? video.play() : video.pause();
  };

  return (
    <section id="3" className={styles.section}>
      <h2 className={styles.title}>
        {lang === "ru" ? "Способы пополнения" : "Толуктоо ыкмалары"}
      </h2>
      <p className={styles.subtitle}>
        {lang === "ru"
          ? "Вы можете пополнить свой баланс в приложении Яндекс Про через следующие платежные системы"
          : "Сиз Яндекс Про тиркемесинде төмөнкү төлөм системалары аркылуу балансыңызды толуктасаңыз болот"}
      </p>

      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        pagination={{
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        className={styles.swiper}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card} onClick={() => handlePlay(index)}>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video.src}
                poster={video.thumbnail}
                className={styles.video}
                preload="metadata"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.pagination} />
      </Swiper>
    </section>
  );
};

