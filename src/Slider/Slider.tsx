import { sliderStyles, styles } from "./Slider.css";
import { Slider } from "@fluentui/react";
import * as React from "react";

export const SliderGroup = () => {
  const [sliderStringValue, setSliderStringValue] = React.useState<string>("0");
  const [sliderValue, setSliderValue] = React.useState<string>('1');
  const sliderRef = React.useRef<HTMLInputElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);
  const thumbRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    console.log(`Slider Value Changed to ${sliderValue}`);
    const progress = progressRef.current;
    const thumb = thumbRef.current;
    const slider = sliderRef.current;
    if (slider && progress && thumb) {
        const maxVal = slider.getAttribute("max");
        if (maxVal) {
            const newVal = (parseInt(sliderValue) / parseInt(maxVal)) * 100 + "%";
            progress.style.width = newVal;
            thumb.style.left = newVal;
        }
    }
  }, [sliderValue]);
  
  const customSlider = React.useCallback(() => {
    const slider = sliderRef.current;
    if (slider) {
        setSliderValue(`${slider.value}`);
    }
  }, [sliderRef]);

  let content = (
    <div className={styles.sliderContainer}>
      <div className={styles.label}>
        <div>Character Length</div>
        <div className={styles.value}>{sliderValue}</div>
      </div>
      <div className={styles.rangeSlider}>
        <input
          onChange={customSlider}
          ref={sliderRef}
          className={styles.slider}
          type="range"
          min={1}
          max={60}
          value={sliderValue}
        />
        <div ref={thumbRef} className={styles.sliderThumb}></div>
        <div ref={progressRef} className={styles.progress}></div>
      </div>
    </div>
  );
  return content;
};
export default SliderGroup;
