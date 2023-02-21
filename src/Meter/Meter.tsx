import { styles } from "./Meter.css";

export const Meter = () => {
    return (
        <div className={styles.ratingContainer}>
            <div className={styles.ratingText}>RATING</div>
            <div className={styles.barOne}></div>
            <div className={styles.barTwo}></div>
            <div className={styles.barThree}></div>
            <div className={styles.barFour}></div>
        </div>
    )
}