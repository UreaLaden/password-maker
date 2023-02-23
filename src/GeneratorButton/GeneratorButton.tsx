import { Icon } from "@fluentui/react"
import { styles } from "./GeneratorButton.css"

export const GeneratorButton = () => {
    return(
        <button className={styles.buttonContainer}>
            <div className={styles.buttonText} id={"buttonText"}>GENERATE</div>
            <Icon iconName={"public-arrow-right"} id={"arrow"}/>
        </button>
    )
}