import * as React from "react";
import { hints } from "../utils/helpers";

export interface PasswordContextProps {
  passwordLength: number;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
  newPassword:string;
  passwordHint:string;
  passwordUpdated:boolean;
  setPasswordLength: (length: number) => void;
  optionSelected:(option:string) => void;
  generatePassword:(newPassword:string) => void;
  updateHint:(password:string) => void;
  updatePasswordStatus:(status:boolean) => void;
}

export interface PasswordContextProviderProps {
  children?: React.ReactNode;
}

export const PasswordContext = React.createContext<PasswordContextProps>({
  passwordLength: 1,
  hasUppercase: false,
  hasLowercase: false,
  hasNumbers: false,
  hasSymbols: false,
  newPassword:"",
  passwordHint:"",
  passwordUpdated:false,
  setPasswordLength: (number) => {},
  optionSelected:(option:string) => {},
  generatePassword:(newPassword:string) => {},
  updateHint:(password:string) => {},
  updatePasswordStatus:(status:boolean) => {},
});

export const PasswordContextProvider: React.FC<PasswordContextProviderProps> = (
  props: PasswordContextProviderProps
) => {
  const [selectedLength, setSelectedLength] = React.useState<number>(1);
  const [uppercaseSelected, setUppercaseSelected] =
    React.useState<boolean>(false);
  const [lowercaseSelected, setLowercaseSelected] =
    React.useState<boolean>(false);
  const [numbersSelected, setNumberscaseSelected] =
    React.useState<boolean>(false);
  const [symbolsSelected, setSymbolsSelected] = React.useState<boolean>(false);
  const [password,setPassword] = React.useState<string>("");
  const [hint,setHint] = React.useState<string>("");
  const [receivedNewPassword,setReceivedNewPassword] = React.useState<boolean>(false);

  const setUppercaseSelectedHandler = () => {
    setUppercaseSelected(!uppercaseSelected);
  };
  const setLowercaseSelectedHandler = () => {
    setLowercaseSelected(!lowercaseSelected);
  };
  const setNumbersSelectedHandler = () => {
    setNumberscaseSelected(!numbersSelected);
  };
  const setSymbolsSelectedHandler = () => {
    setSymbolsSelected(!symbolsSelected);
  };
  const setSelectedLengthHandler = (length: number) => {
    setSelectedLength(length);
  };
  const setPasswordHandler = (newPassword:string) => {
    setPassword(newPassword);
    setHintHandler(newPassword);
    setReceivedNewPassword(true);
  }
  const setReceivedNewPasswordHandler = (status:boolean) => {
    setReceivedNewPassword(status);
  }

  const optionSelectedHandler = (option:string) => {
    switch(option){
      case  "Uppercase":
        setUppercaseSelectedHandler();
        break;
      case "Lowercase":
        setLowercaseSelectedHandler();
        break;
      case "Numbers":
        setNumbersSelectedHandler();
        break;
      case "Symbols":
        setSymbolsSelectedHandler();
        break;
    }
  }

  const setHintHandler = (password:string) =>{
    const passwordArray = password.split('');
    let hint = "";
    for(let i=0;i<passwordArray.length;i++){
      let value = passwordArray[i];
      if(!isNaN(parseInt(value))){
        hint += hints.get(value);
      }
      else if(/[a-zA-z]/.test(value)){
        if(value === value.toLowerCase()){
          hint += hints.get(value)?.toLowerCase();
        }else{
          hint += hints.get(value.toLowerCase())?.toUpperCase();
        }
      }
      else{
        hint += hints.get(value)
      }
      hint += (i === passwordArray.length ? "" : " ");
    }
    setHint(hint);
  }

  const context:PasswordContextProps = {
    passwordLength: selectedLength,
    hasUppercase: uppercaseSelected,
    hasLowercase: lowercaseSelected,
    hasNumbers: numbersSelected,
    hasSymbols: symbolsSelected,
    newPassword:password,
    passwordHint:hint,
    passwordUpdated:receivedNewPassword,
    setPasswordLength:setSelectedLengthHandler,
    optionSelected:optionSelectedHandler,
    generatePassword:setPasswordHandler,
    updateHint:setHintHandler,
    updatePasswordStatus:setReceivedNewPasswordHandler,
  };
  return (
    <PasswordContext.Provider value={context}>
      {props.children}
    </PasswordContext.Provider>
  );
};
