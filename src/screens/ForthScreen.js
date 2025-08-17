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
 <div className={styles.title}>קצת עלי</div>
  <div className={styles.wrap} id="קצת עלי">
   
  <div className={styles.center}><img className={styles.image} src={ofek}/></div>
<div className={styles.column}>
{/* <h1 className={styles.title}>אופק ברקוביץ'</h1>
<div className={styles.subTitle}>"את לא צריכה סיפור טראגי כדי לחיות את החיים שאת תמיד רצית לחיות אותם"</div>    */}
<div className={styles.description}>אני אופק ברקוביץ. אדם שמח וחיובי שרואה כוס מלאה ולא רק חצי. התחביב העיקרי שלי הוא לטייל בעולם (הייתי בלמעלה מ45 מדינות) ולהסביר בפשטות נושאים שנתפסים כמסובכים.</div>
<div className={styles.description}>אומרים עלי שאני אמיצה, משרה ביטחון, וכשאני מחליטה משהו - הוא בטוח יקרה. אני יסודית, אכפתית, ובאמת מאמינה שכל אדם יכול ליצור את החיים שהוא מבקש לעצמו, מבלי קשר לנסיבות חייו.</div>
<div className={styles.description}>
המטרה שלי היא לנטוע בנשים ביטחון שהחלומות שלהן יכולים להתממש, שאפשרי לעבור תקרות זכוכית בקלות, ולעזור להן לייצר אמונה מחודשת בעצמן ובדרך שלהן.</div>
</div>
</div>
 <FormScreen/>
</>


}
export default ForthScreen