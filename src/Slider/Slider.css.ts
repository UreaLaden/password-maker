import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  sliderContainer: {
    height: "15%",
    display: "flex",
    flexDirection: "column",
    "@media screen and (min-width:1024px)": {
      rowGap: "25%",
    },
    "@media screen and (max-width:1023px)": {
      rowGap: "25%",
    },
    "@media screen and (max-width:769px)": {
      rowGap: "25%",
    },
  },
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
        "-webkit-appearance": "none ",
        "-moz-appearance": "none",
        appearance: "none",
        width: "1.7em",
        height: "1.7em",
        "z-index": 3,
        cursor: "pointer",
        position: "relative",       
      },
      "input::-moz-range-thumb": {
        "-webkit-appearance": "none",
        appearance: "none",
      },
    },
  },
  slider: {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "z-index": 5,
    cursor: "pointer",
    opacity: 0,
    appearance: "none",
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
