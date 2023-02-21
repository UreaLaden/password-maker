import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  meterContainer: {
    height: "12%",
    backgroundColor: Colors.VeryDarkGrey,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    fontWeight: "bold",
    color: Colors.Grey,
    "@media screen and (min-width:1024px)": {
        fontSize: "1.1vw",
    },
    "@media screen and (max-width:1023px)": {
        fontSize: "3vw",
    },
    "@media screen and (max-width:769px)": {
      fontSize: "4vw",
    },
  },
});
