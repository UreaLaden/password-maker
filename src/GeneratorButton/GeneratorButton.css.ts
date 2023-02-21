import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/helpers";

export const styles = mergeStyleSets({
    buttonContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        height:"12%",            
        columnGap:"5%",            
        backgroundColor:Colors.NeonGreen,
        boxShadow:"1px 1px 12px",
        border:"none",
        "@media screen and (min-width:1024px)":{
        },
        "@media screen and (max-width:1023px)":{
        },
        "@media screen and (max-width:769px)":{
        }
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:"1.1rem"
    }
})