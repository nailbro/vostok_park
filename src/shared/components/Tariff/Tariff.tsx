'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './tariff.module.scss';
import Image from 'next/image';
import Economy from '@public/img/Эконом.jpg';
import Comfort from '@public/img/Комфорт.jpg';
import Business from '@public/img/Бизнес.jpg';
import Comfortplus from '@public/img/Комфорт +.jpg';
import Delivery from '@public/img/Доставка.jpg';
import Minivan from '@public/img/Минивэн.jpg';
import Together from '@public/img/Вместе.jpg';
import Cargo from '@public/img/Грузовой.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '@/features/context/LanguageContext';

const tariffs = [
  { name: 'Доставка', image: Delivery },
  { name: 'Грузовой', image: Cargo },
  { name: 'Вместе', image: Together },
  { name: 'Эконом', image: Economy },
  { name: 'Комфорт', image: Comfort },
  { name: 'Комфорт+', image: Comfortplus },
  { name: 'Бизнес', image: Business },
  { name: 'Минивен', image: Minivan },
];

export default function TariffSection() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const centerActive = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const list = listRef.current;
    const li = itemRefs.current[index];
    if (!list || !li) return;

    const offset = li.offsetLeft - list.clientWidth / 2 + li.clientWidth / 2;
    list.scrollTo({ left: offset, behavior });
  };

  useEffect(() => {
    centerActive(activeIndex, 'auto');
  }, []);

  useEffect(() => {
    centerActive(activeIndex);
  }, [activeIndex]);

  const handleClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <section id='2' className={styles.choose}>
      <div className={styles.content}>
        <h3>{lang === "ru"? "Выбирайте и подключайте удобный тариф для работы"         : "Иштөө үчүн ыңгайлуу тарифти тандап, туташтырыңыз"}</h3>
        <div className={styles.Tariff_types}>
          <div className={styles.navPrev} ref={prevRef}>
            <FaChevronLeft />
          </div>
          <div className={styles.navNext} ref={nextRef}>
            <FaChevronRight />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className={styles.swiperWrapper}
          >
            {tariffs.map((tariff, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${styles.imageContainer} ${
                    activeIndex === index ? styles.active : ''
                  }`}
                >
                  <Image
                    src={tariff.image}
                    alt={tariff.name}
                    className={styles.image}
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 480px) 90vw, (max-width: 1024px) 70vw, 700px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

<ul ref={listRef}> {tariffs.map((tariff, idx) => ( <li key={idx} ref={(el) => { itemRefs.current[idx] = el; }} className={activeIndex === idx ? styles.active : ''} onClick={() => handleClick(idx)} > {tariff.name} </li> ))} </ul>
        </div>
        <div className={styles.btn}>
          <button>     {lang === "ru" ? "Оставить заявку" : "Өтүнмө калтырыңыз"}</button>
        </div>
      </div>
    </section>
  );
};