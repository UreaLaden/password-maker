import { styles } from "./Slider.css";
import * as React from "react";
import {
  PasswordContext,
  PasswordContextProps,
} from "../store/passwordContext";

interface SliderProps {
  minVal: number;
  maxVal: number;
}

export const Slider = (props: SliderProps) => {
  const { minVal, maxVal } = props;
  const context = React.useContext<PasswordContextProps>(PasswordContext);
  const sliderRef = React.useRef<HTMLInputElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);
  const thumbRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const progress = progressRef.current;
    const thumb = thumbRef.current;
    const slider = sliderRef.current;
    if (slider && progress && thumb) {
      const newVal = (context.passwordLength / maxVal) * 100 + "%";
      progress.style.width = newVal;
      thumb.style.left = newVal;
    }
  }, [context.passwordLength, maxVal]);

  const customSlider = React.useCallback(() => {
    const slider = sliderRef.current;
    if (slider) {
      context.setPasswordLength(parseInt(slider.value));
    }
  }, [context]);

  let content = (
    <div className={styles.sliderContainer}>
      <div className={styles.label}>
        <label htmlFor={"initial-slider"}>Character Length</label>
        <div className={styles.value}>{context.passwordLength}</div>
      </div>
      <div className={styles.rangeSlider}>
        <input
          onChange={customSlider}
          id={"initial-slider"}
          ref={sliderRef}
          className={styles.slider}
          type="range"
          min={minVal}
          max={maxVal}
          value={context.passwordLength}
        />
        <div ref={thumbRef} className={styles.sliderThumb}></div>
        <div ref={progressRef} className={styles.progress}></div>
      </div>
    </div>
  );
  return content;
};
export default Slider;
