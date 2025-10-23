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
  { src: "/videos/qiwi.mp4", thumbnail: "/videos/qiwi.png" },
  { src: "/videos/mbank.mp4", thumbnail: "/videos/mbank.png" },
  { src: "/videos/optima.mp4", thumbnail: "/videos/optima.png" },
];

export default function Cash (){
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
    <section className={styles.section}>
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
        slidesPerView={2.5}
        centeredSlides
        spaceBetween={25}
        loop
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
              <div className={styles.overlay}>
                <div className={styles.playButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={styles.pagination} />
      </Swiper>
    </section>
  );
};

