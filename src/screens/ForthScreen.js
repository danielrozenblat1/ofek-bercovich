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
<div className={styles.description}>אני עוסקת בתטא הילינג ומביאה כלים ותפיסות מעולם ההתפתחות האישית והתת מודע. שיטת העבודה שלי היא רוחבית- ראייה רחבה על כל מה שקורה לך במקום להתמקד ספציפית בנקודה מסוימת שמאפשרת ריפוי ושינוי בהמון תחומי חיים תוך סשן אחד.</div>
</div>
</div>
<SecondScreen/>   
</>


}
export default ForthScreen