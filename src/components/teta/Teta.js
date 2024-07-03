import { useEffect } from "react"
import styles from "./Teta.module.css"
import ScrollReveal from "scrollreveal"
import Button from "../button/Button"
import TetaCarousel from "./TetaCarousel"

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
<div className={styles.title}>חשוב שתקראי את זה</div>
<div className={styles.description}>
אם הייתי אומרת לך שיש שיטה שיכולה לשנות לך את החיים, היית לוקחת כמה צעדים אחורה או
קופצת בהתלהבות? אם הייתי אומרת לך שהמון דברים שאת תופסת כבלתי אפשריים, הם
אפשריים, היית מסתקרנת ונותנת הזדמנות או בורחת?</div>

<div className={styles.description}>תטא הילינג היא דרך חיים שמשנה לטובה את התפיסה שלך לגבי עצמך ולגבי העולם ועוזרת
לשחרר הרגלים שכבר לא מתאימים לאדם שאת רוצה להיות. דרך תטא הילינג תוכלי לווסת את
הרגשות שלך, לתקשר בבטחון מתוך גבולות בריאים, ליצור שיתוף פעולה בין המוח ללב ולחיות
מתוך מוטיבציה חיובית מבלי שיפוט עצמי, אשמה וכעס.</div>

<div className={styles.more}>אני מזמינה אותך להתנסות בסשן 1:1 ואפילו ללמוד את השיטה בעצמך!</div>
<TetaCarousel/>
<Button text="לתיאום סשן 1:1"/>
</>


}
export default Teta