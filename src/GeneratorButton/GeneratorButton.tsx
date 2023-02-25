import { Icon } from "@fluentui/react";
import { styles } from "./GeneratorButton.css";
import {
  PasswordContext,
  PasswordContextProps,
} from "../store/passwordContext";
import React from "react";

export const GeneratorButton = () => {
  const context = React.useContext<PasswordContextProps>(PasswordContext);
  const generatePassword = () => {
    let password = "";
    let variationsCount = [
      context.hasLowercase,
      context.hasUppercase,
      context.hasNumbers,
      context.hasSymbols,
    ].length;
    for (let i = 0; i < context.passwordLength; i += variationsCount) {
      if (context.hasLowercase) {
        password += getRandomLower();
      }
      if (context.hasUppercase) {
        password += getRandomUpper();
      }
      if (context.hasNumbers) {
        password += getRandomNumber();
      }
      if (context.hasSymbols) {
        password += getRandomSymbol();
      }
    }
    const generatedPassword =password.slice(0,context.passwordLength); 
    context.generatePassword(generatedPassword);      
  };
  const getRandomLower = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const getRandomUpper = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getRandomNumber = () =>
    String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  return (
    <button className={styles.buttonContainer} onClick={generatePassword}>
      <div className={styles.buttonText} id={"buttonText"}>
        GENERATE
      </div>
      <Icon iconName={"public-arrow-right"} id={"arrow"} />
    </button>
  );
};
