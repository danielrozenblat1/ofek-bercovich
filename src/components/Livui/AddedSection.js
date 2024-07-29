import { useEffect } from "react"
import styles from "./Livui.module.css"
import ScrollReveal from "scrollreveal"
import thinks from "../../images/מחשבות כשלון.png"
import SecondScreen from "../../screens/SecondScreen"
import Box2 from "./Box2"
import TetaCarousel from "../teta/TetaCarousel"
const AddedSection=(props)=>{
useEffect(()=>{


      ScrollReveal().reveal(`.${styles.center}`, {
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




<div className={styles.title} >שוב זה קורה</div>
<div className={styles.description} >הכרת בחור מ-ה-מ-ם, מצחיק, חתיך, מכבד (!!) שהיה לך כל כך כיף איתו, ואז הוא אומר לך שזה לא
מתאים או פשוט נעלם.</div>
<div className={styles.center}><img className={styles.image} src={thinks} alt="מחשבות כשלון"/></div>
<div className={styles.description}>המחשבות האלו מוצאות את הדרך חזרה אליך אחרי שממש התאמצת לסגור אותן באיזו קופסה, לחזור לעולם
הדייטים ואפילו היית בטוחה שאת במקום טוב יותר.</div>
<div className={styles.title} style={{color:"black"}}>כמובן שתרגישי שהדרך לזוגיות מייאשת, מתסכלת ואפילו בלתי אפשרית</div>
<div className={styles.description}> אם את מוכנה לשנות את הסיפור שלך, להשתחרר מלופ של הלקאה עצמית, דייטים מאכזבים והפחד
שתישארי לבד כל החיים<br/><div className={styles.bold}> זו ההזדמנות שלך</div></div>


</>


}
export default AddedSection