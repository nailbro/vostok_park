"use client"
import Image from 'next/image'
import styles from './advantages.module.scss'
import energy from '@public/icons/Flash.svg'
import clock from '@public/icons/Clock.svg'
import commision from '@public/icons/Commission.svg'
import Star from '@public/icons/Star.svg'
import Question from '@public/icons/Question.svg'
import { useLanguage } from '@/features/context/LanguageContext'
const Advantages = () => {
   const {lang}=useLanguage()
  return (
    <section className={styles.our}>
<h2>{lang === "ru" ? "Наши преимущества" : "Биздин артыкчылыктар"}</h2>
<div className={styles.content}>
<div className={styles.start}>
<Image src={energy} alt='energe' />
<div className={styles.text}>
<span>{lang === "ru" ? "Быстрый старт" : "Тез старт"}</span>
<p>{lang === "ru" ? "От заявки до первого клиента — несколько часов" : "Өтүнмөдөн алгачкы кардарга чейин — бир нече саат"}</p>
</div>
</div>
<div className={styles.start}>
    <Image src={clock}alt='clock'/>
<div className={styles.text}>
<span>{lang === "ru" ? "Удобный график" : "Ыңгайлуу иш графиги"}</span>
<p>{lang === "ru" ? "Работайте несколько часов в день или полную смену" : "Күнүнө бир нече саат же толук нөөмөт иштеңиз"}</p>
</div>
</div>
<div className={styles.start}>
    <Image src={commision} alt='commision'/>
<div className={styles.text}>
<span>3%</span>
<p>{lang === "ru" ? "Минимальная комиссия" : "Минималдуу комиссия"}</p>
</div>
</div>
</div>
<div className={styles.flex}>
<div className={styles.sales}>
<div className={styles.sale}>
    <Image src={Star} alt='star'/>
<div className={styles.text}>
<span>{lang === "ru" ? "Акции" : "Акциялар"}</span>
<p>{lang === "ru" ? "Бонусные подарки каждую неделю" : "Ар жума бонустук белектер"}</p>
</div>
</div>
<div className={styles.sale}>
    <Image src={Question} alt='question'/>
<div className={styles.text}>
<span>24/7</span>
<p>{lang === "ru" ? "Техническая поддержка" : "Техникалык колдоо"}</p>
</div>
</div>
</div>
</div>
    </section>
  )
}

export default Advantages;