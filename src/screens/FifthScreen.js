import styles from "./FifthScreen.module.css"
import ofekTrip from "../images/אופק ברקוביץ טיול.png"
import ofekTiran from "../images/אופק ברקוביץ טירן.png"
import FormScreen from "../components/form/FormScreen"
import Button from "../components/button/Button"
import SocialIcons from "../components/social/Social"
const FifthScreen=()=>{


    return <>
    <div className={styles.title}>למה שתבואי דווקא אלי ?</div>
    <div className={styles.description}>שנים התנגדתי לזוגיות , חייתי בחו&quot;ל מעל לעשור, טיילתי בעולם והרגשתי שמחויבות
תקח לי את החופש אז עשיתי את מה שאני הכי אוהבת, טיילתי, ונמנעתי מקשרים עם פוטנציאל ארוך טווח.
זה השאיר לי כאופציה קשרים קצרים שהיו ברובם בחירות לא מוצלחות שהובילו לכאב לב, שנאה עצמית

ופקפוק בבחירות שלי. אז החלטתי להימנע! זו הדרך הכי טובה שמצאתי כדי להתמודד עם מה שאני לא רוצה
להתמודד איתו.</div>
<div className={styles.center}><img className={styles.image}src={ofekTrip} alt="אופק ברקוביץ טיול"/></div>
<div className={styles.description}>בשנות ה30 לחיי, התחלתי להבין את הלחץ העצום שנשים ללא זוגיות חוות. הרגשתי את החרדה
של החברה, המשפחה ונשים אחרות (say whatttt?) על כך שאין לי זוגיות ושאני עדיין לא אמא. הנואשות,
התסכול והפחד העצום שלהן (!!) גרמו לי להיסגר עוד יותר ולהיות באנטי כלפי הנושא.
ואז ביום בהיר אחד ב2022 הרגשתי משהו אחר. ראיתי סרט רומנטי בנטפליקס והרגשתי שמשהו בי
מתכווץ ורוצה גם. זוכרת שנמנעתי מזוגיות בכוונה? הדבר העיקרי שעשיתי מאותו הרגע שהתעורר
בי הרצון הפנימי הזה הוא עבודה תודעתית (תטא הילינג) על ההתנגדות שהפכה להרגל.
באוגוסט 2023 הכרתי את בן הזוג שלי ובאוקטובר של אותה שנה כבר התארסנו.</div>
<div className={styles.center}><img className={styles.image2}src={ofekTiran} alt="אופק ברקוביץ טירן"/></div>
<div className={styles.description}>אני רוצה שתזכרי שאף אחד לא כפה עלי, שפט אותי או דחף אותי להתקדם לזוגיות. זה קרה בקצב
שלי, מתוך הרצון אמיתי שלי, הבשלות והמוכנות שפשוט אי אפשר לזייף או לדחוף אליה. זה
קרה גם מבלי שישבו לי על הוריד ומבלי שהרגשתי שמשהו לא בסדר איתי.
וזו המטרה שלי בתכנית עבורך.
<br/>

<div className={styles.bold}>מה המטרה שלך?</div>
<Button text="אופק , אני רוצה להרשם!"/>
</div>
<FormScreen/>
    <div className={styles.title}>חפשו אותי גם כאן</div>
    <SocialIcons/>
    </>
}
export default FifthScreen