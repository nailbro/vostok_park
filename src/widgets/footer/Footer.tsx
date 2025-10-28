'use client'
import Image from 'next/image';
import styles from './footer.module.scss';
import apple from '@public/icons/_Group_.svg';
import play from '@public/icons/Group (4).svg';
import whatsapp from '@public/icons/WhatsApp.svg'
import telegram from '@public/icons/Telegram.svg'
import tiktok from '@public/icons/TikTok.svg'
import instagram from '@public/icons/Instagram.svg'
import { FaInstagram, FaLongArrowAltUp, FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/features/context/LanguageContext';

const Footer: React.FC = () => {
  const [showMobileButton, setShowMobileButton] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
    const { lang, setLang } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id='4' className={styles.footer}>
      <div className={styles.contend}>
        <div className={styles.flex}>
          <div className={styles.download}>
         <h3 className={styles.title}>{lang === "ru" ? "Скачайте приложение" : "Тиркемени жүктөп алыңыз"}</h3>
            <div className={styles.Badges}>
              <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer" className={styles.app_store}>
                <Image src={apple} alt="App Store" />
                <div className={styles.text}>
                  <span>Загрузите в</span>
                  <h4>App Store</h4>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE" target="_blank" rel="noopener noreferrer" className={styles.google_play}>
                <Image src={play} alt="Google Play" />
                <div className={styles.text}>
                  <span>СКАЧАТЬ ИЗ</span>
                  <h4>Google Play</h4>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.Socials}>
            <div
              className={styles.social}
              onMouseEnter={() => setHovered('whatsapp')}
              onMouseLeave={() => setHovered(null)}
            >
                <a href="https://wa.me/996" className={styles.a}>
              {hovered === 'whatsapp' ? (
                <Image src={whatsapp} alt="WhatsApp" width={32} height={32} />
              ) : (
                <FaWhatsapp size={32} />
              )}
              </a>
            </div>

            <div
              className={styles.social}
              onMouseEnter={() => setHovered('telegram')}
              onMouseLeave={() => setHovered(null)}
            >
                <a href="https://t.me/" className={styles.a}>
              {hovered === 'telegram' ? (
                <Image src={telegram} alt="Telegram" width={32} height={32} />
              ) : (
                <FaTelegram size={32} />
              )}
              </a>
            </div>

            <div
              className={styles.social}
              onMouseEnter={() => setHovered('tiktok')}
              onMouseLeave={() => setHovered(null)}
            >
                <a href="https://www.tiktok.com/" className={styles.a}>
              {hovered === 'tiktok' ? (
                <Image src={tiktok} alt="TikTok" width={32} height={32} />
              ) : (
                <FaTiktok size={32} />
              )}
              </a>
            </div>

            <div
              className={styles.social}
              onMouseEnter={() => setHovered('instagram')}
              onMouseLeave={() => setHovered(null)}
            >
                <a href="https://www.instagram.com/" className={styles.a}>
              {hovered === 'instagram' ? (
                <Image src={instagram} alt="Instagram" width={32} height={32} />
              ) : (
                <FaInstagram size={32} />
              )}
              </a>
            </div>
          </div>

          <div className={styles.Anchor}>
            <button onClick={scrollToTop} className={styles.desktopTopButton}>
            {lang === "ru" ? "Наверх" : "Жогоруга"}<FaLongArrowAltUp size={12} />
            </button>
          </div>
        </div>

        <div className={styles.diviler}></div>
        <div className={styles.text2}>
               <p className={styles.disclaimer}>
                            <span>{lang === "ru" ? "App Store является знаком обслуживания компании Apple Inc." : "App Store Apple Inc. компаниясынын кызмат көрсөткөн белгиси болуп саналат"}</span> <br />
                           <span> {lang === "ru" ? "Google Play и логотип Google Play являются товарными знаками корпорации Google LLC." : " Google Play жана Google Play логотиби Google LLC корпорациясынын товар белгиси болуп эсептелет"}</span>
                       </p>
          <span className={styles.copy}>©2024 Восток Парк</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
