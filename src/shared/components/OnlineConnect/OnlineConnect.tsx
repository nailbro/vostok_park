import Image from 'next/image'
import styles from './OnlineConnect.module.scss'
import foto1 from '@public/img/Фото.jpg'
import foto2 from '@public/img/Фото (1).svg'
import foto3 from '@public/img/Фото.svg'
import { useLanguage } from '@/features/context/LanguageContext'
import Link from 'next/link'

export default function OnlineConnect  () {
    const {lang}=useLanguage()
  return (
    <section id='1' className={styles.joins}>
      <div className={styles.foto}>
        <picture>
          <source srcSet={foto1.src} media="(min-width: 805px)" />
          <source srcSet={foto2.src} media="(min-width: 301px)" />
          <Image src={foto3} alt="foto" layout="responsive" />
        </picture>
      </div>

      <div className={styles.content}>
      <h2 className={styles.title}>{lang==="ru"?"Подключение онлайн":"Онлайн туташуу"}</h2>
      <p className={styles.text}>
                                {lang==="ru"                        ?"Чтобы подключить сервис вам не понадобится никуда ехать или подписывать бумажные документы — для регистрации просто заполните форму"
                         :"Кызматка туташуу үчүн эч жакка баруунун же кагаз түрүндөгү документтерге кол коюунун кереги жок - катталуу үчүн форманы толтуруңуз"}
                    </p>
                       <Link href="#form" className={styles.link}>
        <div className={styles.btn}>        
          <button>  {lang==="ru"?"Заполнить форму":"Форманы толтуруу"}</button>
        </div>
                </Link>
      </div>
    </section>
  )
}


