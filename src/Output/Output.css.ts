import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  outputContainer: {
    height: "100%",
    color: Colors.AlmostWhite,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    "@media screen and (min-width:1024px)": {
      fontSize: "1rem",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "1.8rem",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "1.2rem",
    },
  },
  result: {
    backgroundColor: Colors.DarkGrey,
    border: "none",
    width: "auto",
    fontFamily: "JetBrains Mono",
    color: Colors.AlmostWhite,
    paddingTop:"2%",
    "@media screen and (min-width:1024px)": {
      fontSize: "2rem",
      maxWidth: "75%",
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "2.5rem",
      maxWidth: "80%",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "1.5rem",
      maxWidth: "75%",
    },
    "::placeholder": {
        fontColor: Colors.Grey,
        fontFamily: "JetBrains Mono",
        alignSelf: "center",
        "@media screen and (min-width:1024px)": {
        fontSize: "2rem",
      },
      "@media screen and (max-width:1023px)": {
        fontSize: "2.5rem",
      },
      "@media screen and (max-width:769px)": {
        fontSize: "1.5rem",
      },
    },
  },
  copyContainer: {
    width: "20%",
    position: "relative",
    display: "flex",
    flexDirection: "row-reverse",
  },
  copyIcon: {
    cursor: "pointer",
    ":hover": {
      svg: {
        path: {
          fill: Colors.AlmostWhite,
        },
      },
    },
  },
  copyToastIn: {
    position: "absolute",
    fontFamily: "JetBrains Mono",
    color: Colors.NeonGreen,
    "@media screen and (min-width:1024px)": {
      fontSize: "1vw",
      top: 4,
      left: -12,
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "2vw",
      top: 6,
      left: 4,
    },
    "@media screen and (max-width:769px)": {
      fontSize: "3vw",
      top: 7,
      left: -8,
    },
    opacity: 1,
    transition: "opacity 250ms ease",
  },
  copyToastOut: {
    opacity: 0,
    transition: "opacity 250ms ease",
    position: "absolute",
    fontFamily: "JetBrains Mono",
    color: Colors.NeonGreen,
    "@media screen and (min-width:1024px)": {
      fontSize: "1vw",
      top: 4,
      left: -12,
    },
    "@media screen and (max-width:1023px)": {
      fontSize: "2vw",
      top: 6,
      left: 4,
    },
    "@media screen and (max-width:769px)": {
      fontSize: "3vw",
      top: 7,
      left: -8,
    },
    "animation -name": "fade",
    "animation-duration": "3s",
  },
});
