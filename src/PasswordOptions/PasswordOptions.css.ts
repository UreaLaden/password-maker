import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
  optionContainer: {
    backgroundColor:Colors.VeryDarkGrey,
    height: "50%",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {},
  },
  option: {},
});
