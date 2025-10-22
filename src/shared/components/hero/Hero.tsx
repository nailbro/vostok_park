import styles from './hero.module.scss'
import Image from 'next/image'
import Banner from '@public/assets/Карта (1).png'

export default function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <Image src={Banner} alt='' fill/>
                </div>
            </div>
        </section>
    )
}