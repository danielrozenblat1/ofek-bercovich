import { useEffect } from "react"
import styles from "./Day.module.css"
const Day=(props)=>{


    return <>

    <div className={styles.wrap} style={{background:props.background, borderRadius:props.left? "10px 10px 0 10px" :"10px 10px 10px 0"}}>


    <div className={styles.number}>{props.number}</div>
    
    <div className={styles.description}>{props.description}</div>


    </div>


    </>
}
export default Day