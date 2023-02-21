import { styles } from "./App.css";
import Generator from "./Generator/Generator";
import Output from "./Output/Output";



function App() {
  return (
    <main className={styles.appContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>Password Generator</div>
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
