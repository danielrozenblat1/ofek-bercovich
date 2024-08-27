import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"

import { useRef } from "react"
import Box from "../components/Box/Box"
import check from "../icons/wired-outline-2507-learn-more-text (1).json"
import Button from "../components/button/Button"
const ThirdScreen=()=>{
    const playerRef1=useRef(null);



return <>
{/* <div className={styles.title}>אז איך זה עובד ?</div>    */}
<div className={styles.row}>
<Box to="תכנית ליווי" icon={check} title="תכנית ליווי קבוצתית לנשים" descriptionN="הזוגיות שלך בדרך... והכל בסדר איתך!"/>
<Box  to="תטא הילינג"  icon={check} title="תטא הילינג" description="סשנים 1:1 | קורסים" />
</div>


</>


}
export default ThirdScreen