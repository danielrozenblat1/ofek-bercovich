import { useEffect } from "react"
import styles from "./Teta.module.css"
import ScrollReveal from "scrollreveal"
import Button from "../button/Button"
import TetaCarousel from "./TetaCarousel"
import WhoFitsTeta from "../fit/WhoFitsTeta"
import SecondScreen from "../../screens/SecondScreen"

const Teta=(props)=>{
useEffect(()=>{
 

      ScrollReveal().reveal(`.${styles.title}`, {
        duration: 600,
        distance: "60px",
        origin: "top",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 200,
        delay: 100,
        scale: 1,
      });
},[])
return <>
<div className={styles.title} id="תטא הילינג">תטא הילינג</div>
<div className={styles.description}>
אם הייתי אומרת לך שיש שיטה שיכולה לשנות לך את החיים, היית לוקחת כמה צעדים אחורה או קופצת
בהתלהבות? אם הייתי אומרת לך שהמון דברים שאת תופסת כבלתי אפשריים, הם אפשריים, היית מסתקרנת
ונותנת הזדמנות?</div>

<div className={styles.description}>תטא הילינג עוזרת לשנות הרגלים ודפוסים שכבר אינם מתאימים למי שאת רוצה להיות. תלמדי לווסת את הרגשות שלך, לתקשר בביטחון מתוך גבולות בריאים, ליצור שיתוף פעולה בין המוח ללב ולחיות מתוך מוטיבציה חיובית מבלי שיפוט עצמי, אשמה וכעס.</div>

<Button text="לתיאום סשן 1:1 פרונטלי / זום" message="היי אופק, אשמח לתאם איתך סשן תטא הילינג"/>

<WhoFitsTeta/>
<SecondScreen/>
</>


}
export default Teta