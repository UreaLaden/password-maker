import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
    generatorContainer:{
        height:"100%",
        color:Colors.AlmostWhite,
        padding:"5%",
        display:"flex",
        flexDirection:'column',
        "@media screen and (min-width:1024px)":{
            rowGap:"5%"
        },
        "@media screen and (max-width:1023px)":{
            rowGap:"5%"
        },
        "@media screen and (max-width:769px)":{
            rowGap:"5%"
        }
    }
})