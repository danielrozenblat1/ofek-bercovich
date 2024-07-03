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

<div className={!props.scrolled? styles.description: styles.descriptionP}>הסיפור שלכם אינו מגדיר אתכם</div>   
<div className={styles.title}>אלא</div>   
<div className={styles.header}>מי שאתם בוחרים להיות</div>
  
</>


}
export default FirstScreen