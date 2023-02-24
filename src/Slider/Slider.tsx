import {  styles } from "./Slider.css";
import * as React from "react";
import { PasswordContext, PasswordContextProps } from "../store/passwordContext";

export const SliderGroup = () => {
    const context = React.useContext<PasswordContextProps>(PasswordContext);
  const sliderRef = React.useRef<HTMLInputElement>(null);
  const progressRef = React.useRef<HTMLInputElement>(null);
  const thumbRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const progress = progressRef.current;
    const thumb = thumbRef.current;
    const slider = sliderRef.current;
    if (slider && progress && thumb) {
        const maxVal = slider.getAttribute("max");
        if (maxVal) {
            const newVal = (context.passwordLength / parseInt(maxVal)) * 100 + "%";
            progress.style.width = newVal;
            thumb.style.left = newVal;
        }
    }
  }, [context.passwordLength]);
  
  const customSlider = React.useCallback(() => {
    const slider = sliderRef.current;
    if (slider) {
        context.setPasswordLength(parseInt(slider.value))
    }
  }, [context]);

  let content = (
    <div className={styles.sliderContainer}>
      <div className={styles.label}>
        <div>Character Length</div>
        <div className={styles.value}>{context.passwordLength}</div>
      </div>
      <div className={styles.rangeSlider}>
        <input
          onChange={customSlider}
          ref={sliderRef}
          className={styles.slider}
          type="range"
          min={1}
          max={30}
          value={context.passwordLength}
        />
        <div ref={thumbRef} className={styles.sliderThumb}></div>
        <div ref={progressRef} className={styles.progress}></div>
      </div>
    </div>
  );
  return content;
};
export default SliderGroup;
