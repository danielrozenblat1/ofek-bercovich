import { useEffect } from "react"
import styles from "./Livui.module.css"
import ScrollReveal from "scrollreveal"
import thinks from "../../images/מחשבות כשלון.png"
import SecondScreen from "../../screens/SecondScreen"
import Box2 from "./Box2"
const Livui=(props)=>{
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
<div className={styles.description} id="תכנית ליווי">עוד בחור מ-ה-מ-ם, מצחיק, חתיך, מכבד (!!)שהיה לך כל כך כיף איתו - אומר לך שזה לא מתאים.</div>
<div className={styles.title}>שוב המחשבות</div>
<div className={styles.center}><img className={styles.image} src={thinks} alt="מחשבות כשלון"/></div>
<div className={styles.description}>מוצאות את הדרך חזרה אליך אחרי שהתאמצת, ממש, לסגור אותן באיזו קופסא ואפילו הרגשת שאת במקום טוב יותר</div>
<div className={styles.title}>כמובן שתרגישי שהדרך לזוגיות מייאשת, מתסכלת ואפילו בלתי אפשרית</div>
<div className={styles.description}>במקום שתשארי בלופ של הלקאה עצמית,אשמה ופחד שזה לא הולך לקרות</div>
<div className={styles.title}>אני מציעה לך 3 פתרונות :</div>
<div className={styles.description}>תכנית ליווי קבוצתית</div>


<Box2/>


<SecondScreen/>  
</>


}
export default Livui