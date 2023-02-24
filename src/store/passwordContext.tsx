import * as React from "react";

export interface PasswordContextProps {
  passwordLength: number;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
  newPassword:string;
  setPasswordLength: (length: number) => void;
  optionSelected:(option:string) => void;
  generatePassword:(newPassword:string) => void;
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
  setPasswordLength: (number) => {},
  optionSelected:(option:string) => {},
  generatePassword:(newPassword:string) => {}
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

  const context:PasswordContextProps = {
    passwordLength: selectedLength,
    hasUppercase: uppercaseSelected,
    hasLowercase: lowercaseSelected,
    hasNumbers: numbersSelected,
    hasSymbols: symbolsSelected,
    newPassword:password,
    setPasswordLength:setSelectedLengthHandler,
    optionSelected:optionSelectedHandler,
    generatePassword:setPasswordHandler
  };
  return (
    <PasswordContext.Provider value={context}>
      {props.children}
    </PasswordContext.Provider>
  );
};
