import Image from "next/image";
import styles from "./page.module.css";
import Promo_30 from "@/components/promo_30/Promo_30";


export default function Home() {
  return (
    <div className={styles.page}>
      <Promo_30/>
    </div>
  );
}
