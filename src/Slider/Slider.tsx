import { sliderStyles, styles } from "./Slider.css";
import {Slider} from "@fluentui/react"
import * as React from 'react';

export const SliderGroup = () => {
    const [sliderValue,setSliderValue] = React.useState<number>(0);
    const sliderOnChange = (value:number) => setSliderValue(value);
    return (
        <div className={styles.sliderContainer}>
            <div className={styles.label}>
                <div>Character Length</div>
                <div className={styles.value}>{sliderValue}</div>
            </div>
            <Slider
                className={styles.slider}
                max={25}
                value={sliderValue}
                showValue={false}
                onChange={sliderOnChange}
                styles={sliderStyles}
            />
        </div>
    )
}
export default SliderGroup;