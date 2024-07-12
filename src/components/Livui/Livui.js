import { useEffect } from "react"
import styles from "./Livui.module.css"
import ScrollReveal from "scrollreveal"
import thinks from "../../images/מחשבות כשלון.png"
import SecondScreen from "../../screens/SecondScreen"
import Box2 from "./Box2"
import TetaCarousel from "../teta/TetaCarousel"
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

<div className={styles.title} id="תכנית ליווי">שוב זה קורה</div>
<div className={styles.description} >הכרת בחור מ-ה-מ-ם, מצחיק, חתיך, מכבד (!!) שהיה לך כל כך כיף איתו, ואז הוא אומר לך שזה לא
מתאים או פשוט נעלם.
2.</div>
<div className={styles.center}><img className={styles.image} src={thinks} alt="מחשבות כשלון"/></div>
<div className={styles.description}>המחשבות האלו מוצאות את הדרך חזרה אליך אחרי שממש התאמצת לסגור אותן באיזו קופסא, לחזור לעולם
הדייטים ואפילו היית בטוחה שאת במקום טוב יותר.</div>
<div className={styles.title} style={{color:"black"}}>כמובן שתרגישי שהדרך לזוגיות מייאשת, מתסכלת ואפילו בלתי אפשרית</div>
<div className={styles.description}> אם את מוכנה לשנות את הסיפור שלך, להשתחרר מהלופ של הלקאה עצמית, דייטים מאכזבים והפחד
שתישארי לבד כל החיים, זו ההזדמנות שלך!</div>

<div className={styles.description}>תכנית ליווי קבוצתית</div>


<Box2/>

<TetaCarousel/> 
</>


}
export default Livui