import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  sliderContainer: {
    height: "10%",
    "@media screen and (min-width:1024px)": {},
    "@media screen and (max-width:1023px)": {},
    "@media screen and (max-width:769px)": {},
  },
});
