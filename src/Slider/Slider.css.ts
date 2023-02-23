import { ISliderStyles, mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  sliderContainer: {
    height: "15%",
    display:'flex',
    flexDirection:'column',
    "@media screen and (min-width:1024px)": {
      rowGap:"25%"
    },
    "@media screen and (max-width:1023px)": {
      rowGap:"25%"
    },
    "@media screen and (max-width:769px)": {
      rowGap:"25%"
    },
  },
  // slider: {
  //   padding: "5% 0",
  // },
  labelContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {
      padding: "0 3% 5% 0%",
    },
  },
  label: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3% 0 0",
  },
  value: {
    color: Colors.NeonGreen,
    "@media screen and (min-width:1024px)": {
      fontSize: "2vw",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "4vw",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "6vw",
    },
  },
  rangeSlider: {
    width: "100%",
    position: "relative",
    display: "flex",
    // "-webkit-appearance": "none",
    height: ".5em",
    outline: "none",
    background: Colors.VeryDarkGrey,
    borderRadius: "25px",
    input: {
      width: "100%",
      height: ".5em",
      borderRadius: "25px",
      background: Colors.VeryDarkGrey,
      "input::-webkit-slider-thumb": {
        "-webkit-appearance": "none !important",
        "-moz-appearance": "none !important",
        appearance: "none !important",
        width: "1.7em",
        height: "1.7em",
        "z-index": 3,
        cursor: "pointer",
        position: "relative",
      },
      "input::-moz-range-thumb":{
        // opacity:0,
        
        "-webkit-appearance":"none !important",
        appearance:'none'
      }
    },
  },
  slider: {
    "-webkit-appearance": "none !important",
    "-moz-appearance": "none !important",
    "z-index":5,
    cursor:"pointer",
    opacity:0,
    appearance: "none !important",
  },
  sliderThumb: {
    width: "1em",
    height: "1em",
    cursor: "pointer",
    "z-index": 1,
    position: "absolute",
    background: Colors.AlmostWhite,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  progress: {
    width: "50%",
    height: ".5em",
    borderRadius: "3px",
    background: Colors.NeonGreen,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    pointerEvents: "none",
  },
});

export const sliderStyles: ISliderStyles = {
  thumb: {
    border: "none",
    "::hover": {},
  },
  root: {
    transition: "none",
  },
  titleLabel: {
    color: Colors.AlmostWhite,
    fontFamily: "JetBrains Mono",
  },
  container: undefined,
  slideBox: {
    ":hover": {
      "ms-Slider-thumb": {
        border: "none !important",
      },
      "ms-Slider-inactive": {
        background: "initial",
      },
      transition: "none",
    },
  },
  line: {},
  lineContainer: {
    height: "5px",
  },
  activeSection: {
    background: Colors.NeonGreen,
    "::hover": {
      background: `${Colors.NeonGreen} !important`,
    },
  },
  inactiveSection: {
    background: Colors.VeryDarkGrey,
    "::hover": {
      background: `${Colors.VeryDarkGrey} !important`,
    },
  },
  valueLabel: {
    color: Colors.NeonGreen,
    fontFamily: "JetBrains Mono",
  },
  zeroTick: undefined,
};
