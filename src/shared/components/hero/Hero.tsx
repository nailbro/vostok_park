import styles from './hero.module.scss'
import Image from 'next/image'
import Banner from '@public/assets/Карта (1).png'
import TaxiForm from '../TaxiForm/TaxiForm'

export default function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.container}>
                <TaxiForm/>
                {/* <div className={styles.banner}>
                    <Image src={Banner} alt='' fill/>
                </div> */}
            </div>
        </section>
    )
}