import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"

import { useRef } from "react"
import Box from "../components/Box/Box"
import check from "../icons/wired-lineal-37-approve-checked-simple.json"
import Button from "../components/button/Button"
const ThirdScreen=()=>{
    const playerRef1=useRef(null);



return <>
{/* <div className={styles.title}>אז איך זה עובד ?</div>    */}
<div className={styles.row}>
<Box icon={check} title=" 15 בנות בקבוצה" description="סביבה מנצחת היא חלק מתהליך השינוי שלך"/>
<Box icon={check} title=" 6 שבועות" description="אורך הליווי הוא כחודש וחצי"/>
</div>
<div className={styles.row}><Box icon={check} title="12 מפגשים" description="2 מפגשים בכל שבוע"/>
<Box icon={check} title="90 דקות כל מפגש" description="90 דקות של כתיבה, התמסרות ושינוי "/>
</div>
<Button text="לחצי כאן לסילבוס המלא"/>
</>


}
export default ThirdScreen