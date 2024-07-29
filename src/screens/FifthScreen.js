import styles from "./FifthScreen.module.css"
import ofekTrip from "../images/אופק ברקוביץ טיול.png"
import ofekTiran from "../images/אופק ברקוביץ טירן.png"
import FormScreen from "../components/form/FormScreen"
import Button from "../components/button/Button"
import SocialIcons from "../components/social/Social"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"
const FifthScreen=()=>{
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
    <div className={styles.title}>הסיפור האישי שלי</div>
    <div className={styles.description}>שנים התנגדתי לזוגיות. <br/> חייתי בחו&quot;ל מעל לעשור, טיילתי בעולם והרגשתי שמחויבות תיקח לי את החופש. לכן עשיתי את מה שאני הכי
אוהבת: טיילתי ונמנעתי מקשרים עם פוטנציאל ארוך טווח. זה השאיר לי כאופציה קשרים קצרים, שהיו ברובם
בחירות לא מוצלחות שהובילו ל<div className={styles.underline}>כאב לב, שנאה עצמית ופקפוק בבחירות שלי</div>. החלטתי להימנע, זו הדרך הכי

טובה שמצאתי כדי להתמודד עם מה שלא רציתי להתמודד איתו.</div>
<div className={styles.center}><img className={styles.image}src={ofekTrip} alt="אופק ברקוביץ טיול"/></div>
<div className={styles.description}>בתחילת שנות ה-30 לחיי, התחלתי להבין את הלחץ העצום שנשים ללא זוגיות חוות. הרגשתי את החרדה של
החברה, המשפחה ונשים אחרות (!?Say Whatttt) על כך שאין לי זוגיות ושאני עדיין לא אמא, אפילו כשזה לא
הופנה כלפיי באופן ישיר. הייאוש, התסכול והפחד העצום <div className={styles.bold}>שלהן</div> גרמו לי להיסגר עוד יותר ולהיות אנטי כלפי

הנושא.</div>

<div className={styles.description}>ביום בהיר אחד, בשנת 2022, הרגשתי משהו אחר. ראיתי סרט רומנטי בנטפליקס והרגשתי שמשהו בי מתכווץ
ורוצה גם. זוכרת שנמנעתי מזוגיות בכוונה? הדבר העיקרי שעשיתי מאותו הרגע שהתעורר בי הרצון הפנימי

לזוגיות הוא עבודה <div className={styles.bold}>תודעתית</div> (תטא הילינג) על ההתנגדות שהפכה להרגל.</div>
<div className={styles.description}>בינואר 2023 הכרתי את טיראן במשרד שעבדנו בו. באוגוסט הפכנו לזוג, ובאוקטובר של אותה שנה כבר התארסנו.</div>
<div className={styles.center}><img className={styles.image2}src={ofekTiran} alt="אופק ברקוביץ טירן"/></div>
<div className={styles.description}>אני רוצה שתדעי שאף אחד לא שפט אותי או דחף אותי להיכנס לזוגיות. זה קרה בקצב שלי, בצורה נעימה, מבלי שאמללתי את עצמי, הקטנתי את עצמי, או הרגשתי שאני לא בסדר כי אני רווקה.
<br/>
זו המטרה שלי בתוכנית עבורך.
<br/>
<div className={styles.bold} style={{color:"rgb(66, 13, 116)"}}>מה המטרה שלך?</div>
<Button text="אופק, אני רוצה להירשם!" message="היי אופק, אשמח לשמוע עוד על תכנית הליווי: הזוגיות שלך בדרך... והכל בסדר איתך!"/>
</div>

   

    </>
}
export default FifthScreen