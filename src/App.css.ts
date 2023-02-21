import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "./utils/helpers";

export const styles = mergeStyleSets({
  appContainer: {
    height: "100%",
    backgroundColor: Colors.VeryDarkGrey,
    "@media screen and (min-width:1024px)": {
    },
    "@media screen and (max-width:1023px)": {
    },
    "@media screen and (max-width:769px)": {
        minWidth:"320px",
        minHeight:""
    },
  },
  mainContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    "@media screen and (min-width:1024px)": {
        rowGap:"2%"
    },
    "@media screen and (max-width:1023px)": {
        rowGap:"2%"
    },
    "@media screen and (max-width:769px)": {
      rowGap:"2%",
    },
  },
  header: {
    color: Colors.Grey,
    "@media screen and (min-width:1024px)": {
        fontSize:"1.4vw"
    },
    "@media screen and (max-width:1023px)": {
        fontSize:"3vw"
    },
    "@media screen and (max-width:769px)": {
        fontSize:"6vw"
    },
  },
  generatorModal: {
    backgroundColor: Colors.DarkGrey,
    "@media screen and (min-width:1024px)": {
        height: "55%",
        width: "30%",
    },
    "@media screen and (max-width:1023px)": {
        height: "60%",
        width: "70%",
    },
    "@media screen and (max-width:769px)": {
      height: "60%",
      width: "90%",
    },
  },
  output: {
    backgroundColor: Colors.DarkGrey,
    "@media screen and (min-width:1024px)": {
        height: "8%",
        width: "30%",
    },
    "@media screen and (max-width:1023px)": {
        height: "8%",
        width: "70%",
    },
    "@media screen and (max-width:769px)": {
      height: "8%",
      width: "90%",
    },
  },
});
