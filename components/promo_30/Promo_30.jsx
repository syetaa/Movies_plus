import Link from 'next/link'
import styles from './Promo30.module.css'

export default function Promo_30() {
  return (
    <div className={styles.cont_main}>
        <div className={styles.promo_text}>
            Дарим незабываемые впечатления
        </div>
        <div className={styles.promo_btn}>
            <Link href="/">30 дней бесплатно!</Link>
        </div>
    </div>
  )
}
