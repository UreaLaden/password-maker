import { Checkbox, Icon } from "@fluentui/react";
import { checkboxStyles, styles } from "./PasswordOptions.css";
import * as React from "react";
import { passwordOptions } from "../utils/helpers";
import { PasswordContext, PasswordContextProps } from "../store/passwordContext";

export const PasswordOptions = () => {
  const optionRef = React.useRef<any>();
  const context = React.useContext<PasswordContextProps>(PasswordContext);

  return (
    <div className={styles.optionContainer}>
      {passwordOptions.map((val, idx) => (
        <div key={idx} id={val} className={styles.optionWrapper}>
          <input
           onClick={()=>{context.optionSelected(val.split(' ')[1])}}
            className={styles.option}
            type="checkbox"
            id={"passwordOption"}
          />
          <label className={styles.label} htmlFor={`val-${idx}`}>
            <Icon
              className={styles.icon}
              id={"check"}
              iconName={"public-check"}
            />
            <div className={styles.labelText}>{val}</div>
          </label>
        </div>
      ))}
    </div>
  );
};
