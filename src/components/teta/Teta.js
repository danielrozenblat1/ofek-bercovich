import { useEffect } from "react"
import styles from "./Teta.module.css"
import ScrollReveal from "scrollreveal"
import Button from "../button/Button"
import TetaCarousel from "./TetaCarousel"
import WhoFitsTeta from "../fit/WhoFitsTeta"
import SecondScreen from "../../screens/SecondScreen"

const Teta=(props)=>{
useEffect(()=>{
    ScrollReveal().reveal(`.${styles.description}`, {
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

      ScrollReveal().reveal(`.${styles.title}`, {
        duration: 600,
        distance: "60px",
        origin: "bottom",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 200,
        delay: 100,
        scale: 1,
      });
},[])
return <>
<div className={styles.title} id="תטא הילינג">חשוב שתקראי את זה</div>
<div className={styles.description}>
אם הייתי אומרת לך שיש שיטה שיכולה לשנות לך את החיים, היית לוקחת כמה צעדים אחורה או קופצת
בהתלהבות? אם הייתי אומרת לך שהמון דברים שאת תופסת כבלתי אפשריים, הם אפשריים, היית מסתקרנת
ונותנת הזדמנות?</div>
<div className={styles.title} style={{color:"rgb(66, 13, 116)", fontFamily:"Dragon"}}>תטא הילינג </div>
<div className={styles.description}>טכניקה שעוזרת לשחרר הרגלים ודפוסים שכבר לא מתאימים לאדם שאת רוצה להיות. בעיני, זו דרך חיים
שמשנה לטובה את התפיסה שלך לגבי עצמך ולגבי העולם. דרך תטא הילינג תוכלי לווסת את הרגשות שלך,
לתקשר בביטחון מתוך גבולות בריאים, ליצור שיתוף פעולה בין המוח ללב ולחיות מתוך מוטיבציה חיובית מבלי
שיפוט עצמי, אשמה וכעס.</div>

<div className={styles.more} style={{color:"rgb(66, 13, 116)"}}>אני מזמינה אותך להתנסות בסשן 1:1 ואפילו ללמוד את השיטה בעצמך!</div>

<Button text="לתיאום סשן 1:1 פרונטלי / זום" message="היי אופק, אשמל לתאם איתך סשן תטא הילינג"/>
<SecondScreen/>
<WhoFitsTeta/>
</>


}
export default Teta