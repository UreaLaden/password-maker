import { Meter } from "../Meter/Meter";
import { styles } from "./StrengthMeter.css";

export const StrengthMeter = () => {
    return (
    <div className={styles.meterContainer}>
        STRENGTH
        <Meter/>
    </div>)
}
export default StrengthMeter;