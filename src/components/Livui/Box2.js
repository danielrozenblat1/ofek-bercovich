import Button from "../button/Button"
import styles from "./Box2.module.css"
const Box2=()=>{


    return <>
    <div className={styles.box}>
<div className={styles.title}>הזוגיות שלך בדרך... והכל בסדר איתך!</div>

<div className={styles.description}>8 מפגשים ממוקדים ומעמיקים שיתנו לך כלים לצאת מהלופ, לחשוב, להרגיש ולהתנהל בביטחון
מול עצמך, בדרך לזוגיות ועם גברים.</div>
<div className={styles.more}>התכנית מתאימה לך אם</div>
<div className={styles.wrap}>
<div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
               למשוך אליך גבר פנוי רגשית, שמוכן להתחייב וגם מתאים לוייב שלך
                </div>
              
  </div>
<div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 להרגיש ביטחון ובנוח עם מי שאת כדי לפתוח את הלב באמת!
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 להשיל ממך מטענים ממערכות יחסים קודמות ומההורים
                </div>
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                 לשחרר דאגות וחרדה מהסטטוס והגיל שלך
                </div>
              
              
  </div>

  <div className={styles.text}>
                <span className={styles.checkmark}>&#10003;</span>
                <div className={styles.description}>
                לשחרר דאגות וחרדה מהסטטוס והגיל שלך
                לנפץ מיתוסים (שאת תופסת כאמת) לגבי גברים וזוגיות
                </div>
              </div>
              </div>
              <div className={styles.description}>וגם, אם את אוהבת לכתוב, פתוחה להכיר את עצמך לעומק ובנכונות לעבור תהליך.</div>
              <div className={styles.more}>6 שבועות, Zoom, בשעות הערב.</div>
</div>
<Button text="לחצי כאן לבירור לגבי המחזור הקרוב"/>
    
    </>
}
export default Box2