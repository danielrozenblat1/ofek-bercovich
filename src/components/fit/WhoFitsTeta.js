import Button from "../button/Button"
import styles from "../Livui/Box2.module.css"
const WhoFitsTeta=()=>{


    return <>
    <div className={styles.box}>
<div className={styles.title} style={{fontStyle:"normal"}}>מה לומדים בקורסי תטא הילינג</div>

<div className={styles.description}>חבילת הבסיס כוללת שלושה קורסים קצרים שיאפשרו לך לפתח את היכולת לטפל בעצמך בצורה מעמיקה.</div>
<div className={styles.description}>במהלכם תלמדי:</div>

<div className={styles.wrap}>
<div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 להתחבר לגלי מוח תטא וליכולות האינטואיטיביות שלך
                </div>
              
  </div>
<div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 להתמודד עם אתגרים רגשיים ורגשות כמו דחייה, חרטה, אשמה ואכזבה
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
               לרפא ולשחרר טראומות מהגוף והתודעה
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 לזהות ולשנות דפוסים, פחדים וחסמים לא מודעים שמנהלים אותך ביומיום
                </div>
              
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 שיטות העמקה שעוקפות את המנגנונים הלא מודעים שלך כדי שתגיעי לפתרון מהיר ויעיל בנושאים שמעסיקים
                אותך.
          
                </div>
              </div>

              </div>
              <div className={styles.description}>*אפשרי ללמוד גם בזום!</div>

</div>
<Button text="אני רוצה להרשם לקורס/חבילת הבסיס!" message="היי אופק, אני כותבת לך כדי לברר לגבי קורס תטא"/>
<Button text="כבר למדתי את חבילת הבסיס, איזה קורסים את מעבירה בקרוב?" message="היי אופק, אני כותבת לך כדי לברר לגבי קורס תטא"/>
    
    </>
}
export default WhoFitsTeta