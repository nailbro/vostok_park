// "use client";

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import styles from "./videos.module.scss";
// import { useLanguage } from "@/features/context/LanguageContext";

// interface VideoItem {
//     thumbnail: string;
//     src: string;
// }

// const videos: VideoItem[] = [
//     {
//         thumbnail: "/videos/photo.png",
//         src: "/videos/photo.mp4",
//     },
//     {
//         thumbnail: "/videos/control.png",
//         src: "/videos/control.mp4",
//     },
//     {
//         thumbnail: "/images/photo.phg",
//         src: "/videos/control.mp4",
//     },
// ];

// const UsefulVideos: React.FC = () => {
//   const { lang } = useLanguage();
//     const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

//     const handlePlay = (index: number) => {
//         videoRefs.current.forEach((v, i) => {
//             if (v && i !== index) {
//                 v.pause();
//             }
//         });

//         const video = videoRefs.current[index];
//         if (video) {
//             video.paused ? video.play() : video.pause();
//         }
//     };
//     return (
//         <section className={styles.section}>
//             <h2 className={styles.title}>{lang==='ru' ? 'Полезные видео': 'Пайдалуу видеолор'}</h2>
//             <Swiper
//                 modules={[Pagination]}
//                 spaceBetween={25}
//                 slidesPerView={2.5}
//                 centeredSlides
//                 loop
//                 pagination={{ clickable: true }}
//                 className={styles.swiper}>
//                 {videos.map((video, index) => (
//                     <SwiperSlide key={index} className={styles.slide}>
//                         <div
//                             className={styles.card}
//                             onClick={() => handlePlay(index)}
//                             role="button">
//                             <video
//                                 ref={(el) => {
//                                     videoRefs.current[index] = el;
//                                 }}
//                                 src={video.src}
//                                 poster={video.thumbnail}
//                                 className={styles.video}
//                                 preload="metadata"/>
//                             <div className={styles.overlay}>
//                                 <div className={styles.playButton}>
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="white"
//                                         viewBox="0 0 24 24"
//                                         width="48"
//                                         height="48">
//                                         <path d="M8 5v14l11-7z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//                 <div className={styles.pagination} />
//             </Swiper>
//         </section>
//     );
// };

// export default UsefulVideos;

"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./videos.module.scss";
import { useLanguage } from "@/features/context/LanguageContext";

interface VideoItem {
  thumbnail: string;
  src: string;
}

const videos: VideoItem[] = [
  { thumbnail: "/videos/photo.png", src: "/videos/photo.mp4" },
  { thumbnail: "/videos/control.png", src: "/videos/control.mp4" },
  { thumbnail: "/videos/photo.png", src: "/videos/control.mp4" },
];

const UsefulVideos: React.FC = () => {
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
        {lang === "ru" ? "Полезные видео" : "Пайдалуу видеолор"}
      </h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.5}
        spaceBetween={25}
        centeredSlides
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

export default UsefulVideos;
