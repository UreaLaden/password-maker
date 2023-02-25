import { GeneratorButton } from "../GeneratorButton/GeneratorButton";
import { PasswordOptions } from "../PasswordOptions/PasswordOptions";
import Slider from "../Slider/Slider";
import StrengthMeter from "../StrengthMeter/StrengthMeter";
import { styles } from "./Generator.css";

export const Generator = () => {
  return (
    <div className={styles.generatorContainer}>
        <Slider minVal={1} maxVal={30}/>
        <PasswordOptions />
        <StrengthMeter/>
        <GeneratorButton />
    </div>)
};

export default Generator;
