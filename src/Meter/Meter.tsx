import { styles } from "./Meter.css";
import zxcvbn from 'zxcvbn';
import * as React from 'react';
import { PasswordContext, PasswordContextProps } from "../store/passwordContext";
import { Colors, ratings } from "../utils/helpers";
import { IStyle } from "@fluentui/react";

export const Meter = () => {
    const context = React.useContext<PasswordContextProps>(PasswordContext);
    const [currentScore,setCurrentScore] = React.useState<number>(0);
    const [ratingStyle,setRatingStyle] = React.useState<[string,string]>(['',''])

    React.useEffect(()=>{
        const result = zxcvbn(context.newPassword);
        setCurrentScore(result.score);
        const score = ratings.get(`${result.score}`);
        if(score){
            setRatingStyle(score)
        }
    },[context.newPassword]);


    return (
        <div className={styles.ratingContainer}>
            <div 
            className={styles.ratingText}>{ratingStyle[1]}</div>
            <div
                style={{backgroundColor:`${ratingStyle[0]}`,border:`1px solid ${ratingStyle[0]}`}}
                className={styles.barOne}></div>
            <div 
            style={{backgroundColor:`${currentScore > 1 ? ratingStyle[0] : "initial"}`,border:`1px solid ${currentScore > 1 ? ratingStyle[0]: Colors.AlmostWhite}`}}
                className={styles.barTwo}></div>
            <div 
            style={{backgroundColor:`${currentScore > 2 ? ratingStyle[0] : "initial"}`,border:`1px solid ${currentScore > 2 ? ratingStyle[0]: Colors.AlmostWhite}`}}
                className={styles.barThree}></div>
            <div 
            style={{backgroundColor:`${currentScore > 3 ? ratingStyle[0] : "initial"}`,border:`1px solid ${currentScore > 3 ? ratingStyle[0]: Colors.AlmostWhite}`}}
                className={styles.barFour}></div>
        </div>
    )
}