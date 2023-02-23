import { ISliderStyles, mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  sliderContainer: {
    height: "15%",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {},
  },
  slider:{
    padding:"5% 0"
  },
  labelContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {
      padding: "0 3% 2% 0%",
    },
  },
  label: {
    width:"100%",
    display:'flex',
    alignItems:"center",
    justifyContent:"space-between",
    padding:"0 3% 0 0"
  },
  value: {
    color: Colors.NeonGreen,
    "@media screen and (min-width:1024px)": {
        fontSize: "2vw",

    },
    "@media screen and (max-width:1023px)": {
        fontSize:"4vw"
    },
    "@media screen and (max-width:769px)": {
      fontSize: "6vw",
    },
  },
});

export const sliderStyles: ISliderStyles = {
  thumb: {
    border: "none",
    "::hover": {},
  },
  root: {
    transition:'none'
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
      "ms-Slider-inactive":{
        background:"initial"
      },
      transition:'none'
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
