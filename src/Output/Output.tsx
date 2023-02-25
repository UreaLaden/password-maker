import { Icon } from "@fluentui/react";
import * as React from "react";
import { styles } from "./Output.css";
import {
  PasswordContext,
  PasswordContextProps,
} from "../store/passwordContext";
import autoAnimate from "@formkit/auto-animate";

export const Output = (props: any) => {
  const context = React.useContext<PasswordContextProps>(PasswordContext);
  const outputRef = React.useRef<HTMLInputElement>(null);
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const toastRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const input = outputRef.current;
    if (input) {
      input.value = context.newPassword;
      console.log(input.value);
    }
  }, [context.newPassword]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (showToast) {
        setShowToast(false);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [showToast]);

  return (
    <div className={styles.outputContainer}>
      <input
        ref={outputRef}
        disabled={true}
        type="text"
        className={styles.result}
        placeholder={"P4$5W0rD!"}
      />
      <div className={styles.copyContainer}>
        <Icon
          className={styles.copyIcon}
          iconName={"public-copy"}
          onClick={() => {
            navigator.clipboard.writeText(context.newPassword);
            setShowToast(true);
          }}
        />
        <div
          ref={toastRef}
          className={showToast ? styles.copyToastIn : styles.copyToastOut}
        >
          COPIED
        </div>
      </div>
    </div>
  );
};
export default Output;
