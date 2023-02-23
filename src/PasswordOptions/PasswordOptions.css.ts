import { ICheckboxStyles, mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20%",
    height: "50%",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {},
},
optionWrapper: {
    display:"flex",
    alignItems:"center"
},
icon:{
    position:'absolute',
    top:1,
    left:-19,
    svg:{
        path:{
            'stroke':Colors.DarkGrey
        }
    }
},
option: {
    position:"relative",
    appearance: "none",
    "-webkit-appearance": "none",
    height:"20px",
    width:'20px',
    backgroundColor:Colors.DarkGrey,
    borderRadius:"1px",
    border:`2px solid ${Colors.AlmostWhite}`,
    cursor:"pointer",
    ":hover":{
        backgroundColor:Colors.NeonGreen,
        border:`2px solid ${Colors.NeonGreen}`,
    },
    ":checked":{
        backgroundColor:Colors.NeonGreen,
        border:`2px solid ${Colors.NeonGreen}`
    }
},
label: {
    position:"relative",
    cursor:"pointer",
    color:Colors.AlmostWhite,
    "@media screen and (min-width:1024px)": {
        fontSize:"1.5vw"
    },
    "@media screen and (max-width:1023px)": {
        fontSize:"3vw"
    },
    "@media screen and (max-width:769px)": {
        fontSize:"4vw"
    },
  },
  labelText:{
    marginLeft:"20px"
  }
});

export const checkboxStyles: ICheckboxStyles = {
  label: {
    color: Colors.AlmostWhite,
    pointerEvents: "none",
  },
  root: {
    appearance: "none",
    // ".ms-Checkbox-checkbox": {
    //     border: `2px solid ${Colors.AlmostWhite}`,
    //   "transition-property": "background,color,border,border-color",
    //   "transition-duration": "200ms",
    //   "transition-timing-function": "cubic-bezier(0.4, 0, 0.23, 1)",
    // },
    ":hover": {
      //   ".ms-Checkbox-checkbox": {
      //     border: `2px solid ${Colors.NeonGreen}`,
      //     background: Colors.NeonGreen,
      //   },
      ".ms-Checkbox-text": {
        color: Colors.AlmostWhite,
      },
      //   ".ms-Checkbox-checkmark": {
      //     color: Colors.DarkGrey,
      //   },
    },
  },
  checkbox: {
    border: `2px solid ${Colors.AlmostWhite}`,
    transition: "border 200ms ease-out",
    ":after": {
      border: `2px solid red`,
    },
    // "transition-timing-function": "cubic-bezier(0.4, 0, 0.23, 1)",
    // "transition-property": "border",
    // "transition-duration": "200ms",
  },
  checkmark: {
    color: Colors.AlmostWhite,
    background: `${Colors.DarkGrey}`,

    ":after": {
      color: Colors.DarkGrey,
      border: `4px solid red`,
    },
  },
  text: {
    fontFamily: "JetBrains Mono",
    color: Colors.AlmostWhite,
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {
      fontSize: "3vw",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "4vw",
    },
  },
};
