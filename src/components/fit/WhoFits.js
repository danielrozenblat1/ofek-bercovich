import styles from "./WhoFits.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import dontFit from "../../icons/wired-lineal-283-avatar-female-cross.json"
import fit from "../../icons/wired-lineal-285-avatar-female-approved.json"
import Button from "../button/Button";
import ScrollReveal from "scrollreveal";
const WhoFits=()=>{

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.header}`, {
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

    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

      const playerRef1 = useRef(null);
      const playerRef2 = useRef(null);

    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
      playerRef2?.current?.playFromBeginning();
    
    },[])

return <>
<div className={styles.title}>הליווי לא מתאים לכולן</div>

<div className={styles.wrapper}>

{/* לא מתאים */}
<div className={styles.wrapY}>

<h1  className={styles.header}>למי מתאים הליווי</h1>
<Player icon={fit} ref={playerRef1} size="30%" loop={true} onComplete={handleComplete}></Player>
<div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                למי שמוכנה לעבור שינוי ביחס שלה לעצמה לגברים לזוגיות ולעצמך
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
          למי שמוכנה להעמיק בתוך עצמה ולהתמסר לתהליך
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                נשים שאוהבות לכתוב 
                </div>
              
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
           נשים שמבינות את החשיבות של הגישה שלנו לדברים
                </div>
              
              
  </div>
</div>

{/* מתאים */}

<div className={styles.wrapN}>

<h1 className={styles.header}>למי לא מתאים הליווי</h1>
<Player icon={dontFit} ref={playerRef2} size="30%" loop={true} onComplete={handleComplete2}></Player>


<div className={styles.text}>
                <span className={styles.xmark}>×</span>
                <div className={styles.description}>
                נשים שלא רוצות להעמיק לתוך עצמן
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.xmark}>×</span>
                <div className={styles.description}>
נשים שלא אוהבות לכתוב
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.xmark}>×</span>
                <div className={styles.description}>
            נשים שמחפשות קצב איטי
                </div>
              
  </div>
  <div className={styles.text}>
                 <span className={styles.xmark}>×</span>
                <div className={styles.description}>
            נשים שלא מוכנות להתחייב ולהתמסר לתהליך
                </div>
              
              
  </div>
    
</div>

</div>
<Button text="אני מתאימה לתהליך , בואי נדבר"/>
</>

    }
    export default WhoFits