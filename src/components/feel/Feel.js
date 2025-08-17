import styles from "./Feel.module.css"
import dasperate from "../../images/הודעות ייאוש.png"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const Feel=()=>{


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
    

    },[])

return <>
<div className={styles.title}>יצא לך פעם להרגיש ככה?</div>    
<div className={styles.center}><img className={styles.image} src={dasperate}/></div>
<div className={styles.description}>למה הלופ הזה לא נגמר ?</div>     
<div className={styles.more}>אנחנו אלה שמזמנות את המציאות שלנו , אני רוצה שתביני - ברגע שהאמונות שלך משתנות לגבי נושא מסויים , כך גם המחשבות , המעשים והאנרגיה שאת מושכת אלייך </div>     
<div className={styles.description}>ברגע שתביני ש</div>    
<div className={styles.more}>את - ורק את - שולטת על המחשבות שלך , האנרגיות שאת משדרת ,איכות האנשים שסובבים אותך ועל המציאות שלך !</div> 
<div className={styles.description}>השינוי יתחיל לקרות !</div>  
    </>
}
export default Feel