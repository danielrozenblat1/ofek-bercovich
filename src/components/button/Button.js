import { useEffect } from "react"
import styles from "./Button.module.css"
import ScrollReveal from "scrollreveal"
const Button=(props)=>{


   



    const handleClick=()=>{

    }
    
    return <>
    <div className={styles.center}>
    <button on Click={handleClick} className={styles.button}>{props.text}</button>
    </div>
    </>
}
export default Button