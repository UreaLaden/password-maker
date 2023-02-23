import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  ratingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color:Colors.AlmostWhite,
    "@media screen and (min-width:1024px)": {
      width:"45%"
    },
    "@media screen and (max-width:1023px)": {
      width: "32%",
    },
    "@media screen and (max-width:769px)": {
      width: "32%",
    },
  },
  ratingText: {
    fontWeight: "bold",
    "@media screen and (min-width:1024px)": {
      fontSize: "1.3vw",
      width: "60%",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "3vw",
      width: "60%",
    },
    "@media screen and (max-width:769px)": {
      width: "60%",
      fontSize: "4vw",
    },
  },
  barOne: {
    border: "1px solid white",
    "@media screen and (min-width:1024px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:1023px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:769px)": {
      height: "16px",
      width: "6px",
    },
  },
  barTwo: {
    border: "1px solid white",
    "@media screen and (min-width:1024px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:1023px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:769px)": {
      height: "16px",
      width: "6px",
    },
  },
  barThree: {
    border: "1px solid white",
    "@media screen and (min-width:1024px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:1023px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:769px)": {
      height: "16px",
      width: "6px",
    },
  },
  barFour: {
    border: "1px solid white",
    "@media screen and (min-width:1024px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:1023px)": {
      height: "28px",
      width: "8px",
    },
    "@media screen and (max-width:769px)": {
      height: "16px",
      width: "6px",
    },
  },
});
