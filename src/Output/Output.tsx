import { Icon } from "@fluentui/react";
import { styles } from "./Output.css";

export const Output = () => {
  return (
    <div className={styles.outputContainer}>
      <div className={styles.result}>PTx1f5DaFX</div>
      <Icon iconName={"public-copy"} />
    </div>
  );
};
export default Output;
