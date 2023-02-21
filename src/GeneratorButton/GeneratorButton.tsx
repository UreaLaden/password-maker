import { Icon } from "@fluentui/react"
import { styles } from "./GeneratorButton.css"

export const GeneratorButton = () => {
    return(
        <button className={styles.buttonContainer}>
            <div className={styles.buttonText}>GENERATE</div>
            <Icon iconName={"arrow-right"}/>
        </button>
    )
}