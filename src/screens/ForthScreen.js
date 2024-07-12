import styles from "./ForthScreen.module.css"
import ofek from "../images/אופק ברקוביץ תדמית.png"
import SecondScreen from "./SecondScreen"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import FormScreen from "../components/form/FormScreen"
const ForthScreen=()=>{

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 600,
      distance: "60px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });

    ScrollReveal().reveal(`.${styles.subTitle}`, {
      duration: 600,
      distance: "60px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.description}`, {
      duration: 600,
      distance: "60px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.image}`, {
      duration: 600,
      distance: "60px",
      origin: "left",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  },[])


return <>
 <div className={styles.title}>מי אני?</div>
  <div className={styles.wrap} id="קצת עלי">
   
  <div className={styles.center}><img className={styles.image} src={ofek}/></div>
<div className={styles.column}>
{/* <h1 className={styles.title}>אופק ברקוביץ'</h1>
<div className={styles.subTitle}>"את לא צריכה סיפור טראגי כדי לחיות את החיים שאת תמיד רצית לחיות אותם"</div>    */}
<div className={styles.description}>אני אופק ברקוביץ. אומרים עלי שאני אמיצה, משרה ביטחון, וכשאני מחליטה משהו - הוא בטוח יקרה. אני
יסודית, אכפתית, רואה כוס מלאה ולא רק חצי ובאמת מאמינה שכל אדם יכול ליצור את החיים שהוא מבקש
לעצמו, מבלי קשר לנסיבות חייו.
אני אדם שמח, אוהבת לטייל ולהכיר מקומות חדשים (גם בעולם וגם בטיולים בתת מודע). יודעת להסביר
בפשטות נושאים שנראים מסובכים ולהציג אותם בצורה קלה להבנה לכל אוזן. מאוד אוהבת להעביר ידע וללמוד
בעצמי; סוג של תלמידה נצחית שלמדה לאזן ולהוציא לפועל את הרעיונות שלה.
המטרה שלי היא לנטוע באנשים ביטחון שהחלומות שלהם ברי הגשמה, לשחרר את תפיסת הבלתי אפשרי
ותקרות הזכוכית, ולעזור לך לייצר אמונה מחודשת בעצמך ובדרך שלך.</div>
</div>
</div>
 <FormScreen/>
</>


}
export default ForthScreen