import { Icon } from "@fluentui/react";
import { styles } from "./PasswordOptions.css";
import * as React from "react";
import { passwordOptions } from "../utils/helpers";
import {
  PasswordContext,
  PasswordContextProps,
} from "../store/passwordContext";

export const PasswordOptions = () => {
  const context = React.useContext<PasswordContextProps>(PasswordContext);
  const hintRef = React.useRef<HTMLTextAreaElement>(null);
  const [showToast, setShowToast] = React.useState<boolean>(false);

  React.useEffect(() => {
    const hint = hintRef.current;
    if (hint) {
      hint.value = context.passwordHint;
    }
  }, [context.passwordHint]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (showToast) {
        setShowToast(false);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [showToast]);

  React.useEffect(() => {
    if (!context.passwordUpdated) return;

    const intervalId = setInterval(() => {
      if (context.passwordUpdated) {
        context.updatePasswordStatus(false);
      }
    }, 1000 * 10);

    return () => clearInterval(intervalId);
  }, [context]);

  return (
    <div className={styles.optionContainer}>
      {passwordOptions.map((val, idx) => (
        <div key={idx} id={`${idx}`} className={styles.optionWrapper}>
          <input
            onClick={() => {
              context.optionSelected(val.split(" ")[1]);
            }}
            className={styles.option}
            type="checkbox"
            id={`option--${idx}`}
          />
          <div className={styles.label}>
            <Icon className={styles.icon} iconName={"public-check"} />
            <label className={styles.labelText} htmlFor={`option--${idx}`}>
              {val}
            </label>
          </div>
        </div>
      ))}
      <div
        className={
          context.passwordUpdated
            ? styles.hintContainerIn
            : styles.hintContainerOut
        }
      >
        <div className={styles.labelContainer}>
          <label htmlFor={"password-hint"}>Don't forget your password</label>
          <textarea
            id={"password-hint"}
            ref={hintRef}
            className={styles.hint}
            disabled={true}
            value={context.passwordHint}
            rows={3}
            cols={30}
          />
        </div>
        <div className={styles.copyContainer}>
          <Icon
            className={styles.copyIcon}
            iconName={"public-copy"}
            onClick={() => {
              navigator.clipboard.writeText(context.passwordHint);
              setShowToast(true);
            }}
          />
          <div className={showToast ? styles.copyToastIn : styles.copyToastOut}>
            COPIED
          </div>
        </div>
      </div>
    </div>
  );
};
