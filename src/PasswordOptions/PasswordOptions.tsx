import { Checkbox, Icon } from "@fluentui/react";
import { checkboxStyles, styles } from "./PasswordOptions.css";
import * as React from "react";

export const PasswordOptions = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const options = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  const onChange = React.useCallback(
    (
      ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
      checked?: boolean
    ): void => {
      console.log((ev?.target as HTMLInputElement).checked);
      setIsChecked(!!checked);
    },
    []
  );
  return (
    <div className={styles.optionContainer}>
      {/* {options.map((idx, val) => (
        <Checkbox     
          id={`checkboxOption-${val}`}      
          onChange={onChange}
          className={styles.option} 
          styles={checkboxStyles} 
          label={idx} 
          key={val} />
      ))} */}
      {options.map((val, idx) => (
        <div key={idx} className={styles.optionWrapper}>
          <input className={styles.option} type="checkbox" id={`val-${idx}`} />
          <label className={styles.label} htmlFor={`val-${idx}`}>
            <Icon className={styles.icon} id={"check"} iconName={"public-check"} />
            <div className={styles.labelText}>{val}</div>
          </label>
        </div>
      ))}
    </div>
  );
};
