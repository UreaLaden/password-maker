import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    "@media screen and (min-width:1024px)": {
      rowGap: "10%",
    },
    "@media screen and (max-width:1023px)": {
      rowGap: "15%",
    },
    "@media screen and (max-width:769px)": {
      rowGap: "10%",
    },
  },
  optionWrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    pointerEvents: "none",
    svg: {
      path: {
        stroke: Colors.DarkGrey,
      },
    },
    "@media screen and (min-width:1024px)": {
      top: 0,
      left: -19,
    },
    "@media screen and (max-width:1023px)": {
      top: -1,
      left: -19,
    },
    "@media screen and (max-width:769px)": {
      top: 1,
      left: -19,
    },
  },
  option: {
    position: "relative",
    appearance: "none",
    "-webkit-appearance": "none",
    height: "20px",
    width: "20px",
    backgroundColor: Colors.DarkGrey,
    borderRadius: "1px",
    border: `2px solid ${Colors.AlmostWhite}`,
    cursor: "pointer",
    ":hover": {
      backgroundColor: Colors.NeonGreen,
      border: `2px solid ${Colors.NeonGreen}`,
    },
    ":checked": {
      backgroundColor: Colors.NeonGreen,
      border: `2px solid ${Colors.NeonGreen}`,
    },
  },
  label: {
    position: "relative",
    cursor: "pointer",
    pointerEvents: "all",
    color: Colors.AlmostWhite,
    "@media screen and (min-width:1024px)": {
      fontSize: "1.5vw",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "3vw",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "4vw",
    },
  },
  labelText: {
    marginLeft: "20px",
  },
  hint: {
    resize: "none",
    overflow: "hidden",
    pointerEvents: "none",
    background: Colors.VeryDarkGrey,
    color: Colors.AlmostWhite,
  },
  copyIcon: {
    cursor: "pointer",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {
    },
    ":hover": {
      svg: {
        path: {
          fill: Colors.AlmostWhite,
        },
      },
    },
  },
  copyToastIn: {
    fontFamily: "JetBrains Mono",
    color: Colors.NeonGreen,
    "@media screen and (min-width:1024px)": {
      fontSize: "1vw",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "2vw",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "3vw",
    },
    opacity: 1,
    transition: "opacity 250ms ease",
  },
  labelContainer:{
    "@media screen and (min-width:1024px)": {
      marginTop:"0%"
    },
    "@media screen and (max-width:1023px)": {
      marginTop:"-7%"
    },
    "@media screen and (max-width:769px)": {
      marginTop:'0%'
    },
  },
  copyContainer:{
    position:'relative',
    width:'25%',
    height:"100%",
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    justifyContent:'center',
    "@media screen and (min-width:1024px)": {
    },
    "@media screen and (max-width:1023px)": {
      marginTop:"-2%",
      justifyContent:'end',
      flexDirection:"column-reverse"
    },
    "@media screen and (max-width:769px)": {
      fexDirection:'column'
    },
  },
  copyToastOut: {
    opacity: 0,
    transition: "opacity 250ms ease",
    fontFamily: "JetBrains Mono",
    color: Colors.NeonGreen,
    "@media screen and (min-width:1024px)": {
      fontSize: "1vw",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "2vw",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "3vw",
    },
    "animation -name": "fade",
    "animation-duration": "3s",
  },
  hintContainerIn: {
    display:'flex',
    opacity: 1,
    transition: "opacity 250ms ease",
    "@media screen and (min-width:1024px)": {
    },
    "@media screen and (max-width:1023px)": {
    },
    "@media screen and (max-width:769px)": {
      marginTop:"-5%"
    },
  },
  hintContainerOut: {
    display:'flex',
    opacity: 0,
    transition: "opacity 250ms ease",
    "@media screen and (min-width:1024px)": {
    },
    "@media screen and (max-width:1023px)": {
    },
    "@media screen and (max-width:769px)": {
      marginTop:"-5%"
    },
  },
});
