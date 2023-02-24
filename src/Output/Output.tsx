import { Icon } from "@fluentui/react";
import * as React from 'react';
import { styles } from "./Output.css";
import { PasswordContext, PasswordContextProps } from "../store/passwordContext";

export const Output = () => {
  const context = React.useContext<PasswordContextProps>(PasswordContext);
  return (
    <div className={styles.outputContainer}>
      <div className={styles.result}>{context.newPassword}</div>
      <Icon iconName={"public-copy"} />
    </div>
  );
};
export default Output;
