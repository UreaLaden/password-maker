import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
    outputContainer:{
        height:"100%",
        color:Colors.AlmostWhite,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 5%",
        "@media screen and (min-width:1024px)":{
            fontSize:"2vw",                        
        },
        "@media screen and (max-width:1023px)":{
            fontSize:"6vw",            
        },
        "@media screen and (max-width:769px)":{
            fontSize:"9vw",
        }
    },
    result:{}
})