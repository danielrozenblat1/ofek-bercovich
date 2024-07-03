import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"

import { useRef } from "react"
import Box from "../components/Box/Box"
import check from "../icons/wired-gradient-1358-tap-two-fingers-once.json"
import Button from "../components/button/Button"
const ThirdScreen=()=>{
    const playerRef1=useRef(null);



return <>
{/* <div className={styles.title}>אז איך זה עובד ?</div>    */}
<div className={styles.row}>
<Box to="תכנית ליווי" icon={check} title="תכנית ליווי קבוצתית" description="הזוגיות שלך בדרך... והכל בסדר איתך" little="לנשים מתחת לגיל 30"/>
<Box  to="תטא הילינג"  icon={check} title="תטא הילינג" description="סשנים 1:1" little="קורסים רשמיים של השיטה להתפתחות אישית"/>
</div>

<Button text="לחצי כאן לסילבוס המלא"/>
</>


}
export default ThirdScreen