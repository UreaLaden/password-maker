import { styles } from "./PasswordOptions.css";

export const PasswordOptions = () => {
  const options = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols"
  ];
  return (
    <ul className={styles.optionContainer}>
      {options.map((idx, val) => (
        <li className={styles.option} key={val}>{idx}</li>
      ))}
    </ul>
  );
};
