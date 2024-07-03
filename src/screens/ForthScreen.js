import styles from "./ForthScreen.module.css"
import ofek from "../images/אופק ברקוביץ תדמית.png"
import SecondScreen from "./SecondScreen"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
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

  <div className={styles.wrap} id="קצת עלי">
  <div className={styles.center}><img className={styles.image} src={ofek}/></div>
<div className={styles.column}>
<h1 className={styles.title}>אופק ברקוביץ'</h1>
<div className={styles.subTitle}>"את לא צריכה סיפור טראגי כדי לחיות את החיים שאת תמיד רצית לחיות אותם"</div>   
<div className={styles.description}>אני אופק ברקוביץ&#39;. אדם שמח עם מטרה לעשות טוב בעולם. אומרים עלי שאני אמיצה, חדורת
מטרה, וכשאני מחליטה משהו - הוא בטוח יקרה. אני יסודית, אכפתית, רואה כוס מלאה ולא רק חצי
ובאמת מאמינה שכל אדם יכול ליצור את החיים שהוא מבקש לעצמו מבלי קשר לנסיבות חייו.
עברתי לניו יורק כשהייתי בת 20, טיילתי בלמעלה מ45 מדינות, חייתי גם במדריד ואחרי כמעט
עשור בחו&quot;ל, חזרתי לארץ ב2022 (מה שהגדרתי כבלתי אפשרי. זו היתה בחירה של הלב
והחלטתי להקשיב ).

אני אדם של מילים; אוהבת לדבר, יודעת להסביר בפשטות נושאים שנראים מסובכים. מאוד אוהבת
לחקור את התת מודע (זה מרתק!!), לעבוד עם א.נשים עם מחלות פיזיות, ללמוד, ללמד ולהעביר
ידע.
אני כאן כדי לעזור לא.נשים להתפתח, להכיר את עצמם באמת, לנטוע בהם בטחון שהחלומות שלהם
ברי הגשמה וללוות אותם בדרך לשם.</div>
</div>
</div>
 
</>


}
export default ForthScreen