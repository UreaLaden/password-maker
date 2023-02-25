import { styles } from "./App.css";
import Generator from "./Generator/Generator";
import Output from "./Output/Output";

function App() {
  return (
    <main className={styles.appContainer}>
      <div className={styles.mainContainer}>
        <h1 className={styles.header}>Password Generator</h1>
        <div className={styles.output}>
          <Output />
        </div>
        <div className={styles.generatorModal}>
          <Generator />
        </div>
      </div>
    </main>
  );
}

export default App;
