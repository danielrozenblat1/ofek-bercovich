import { useEffect } from "react"
import styles from "./FirstScreen.module.css"
import ScrollReveal from "scrollreveal"

const FirstScreen=(props)=>{
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
{/* <div className={styles.description}>נמאס לך להיות הגלגל השלישי כל הזמן?</div>    */}
<div className={!props.scrolled?styles.description: styles.descriptionP}>הגיע הזמן למצוא את <div className={styles.bold}>הזוגיות שאת ראויה לה</div> </div>   
<div className={styles.title}>בעזרת ליווי אישי <div className={styles.bold}> משנה חשיבה ומשנה חיים</div></div>   
</>


}
export default FirstScreen