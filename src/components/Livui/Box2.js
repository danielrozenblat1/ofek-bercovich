import Button from "../button/Button"
import AddedSection from "./AddedSection"
import styles from "./Box2.module.css"
const Box2=()=>{


    return <>
    <div className={styles.box}>
<div className={styles.title} >הזוגיות שלך בדרך... והכל בסדר איתך!</div>

<div className={styles.description}>10 מפגשים ממוקדים ומעמיקים שיתנו לך כלים לחשוב, להרגיש ולהתנהל בביטחון מול עצמך, בדרך לזוגיות ועם
גברים.</div>
<AddedSection/>


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
             
                לנפץ מיתוסים (שאת תופסת כאמת) לגבי גברים וזוגיות
                </div>
              </div>

              </div>
              <div className={styles.description}>התכנים מבוססים על כלים מעולמות המודעות וההתפתחות האישית.</div>
              <div className={styles.description}>אם את מוכנה להשקיע, להתמסר לתהליך ופתוחה להכיר את עצמך לעומק</div>

</div>
<Button text="לחצי כאן לבירור לגבי המחזור הקרוב" message="היי אופק, אשמח לדבר איתך על תכנית הליווי: הזוגיות שלך בדרך... והכל בסדר איתך!"/>
    
    </>
}
export default Box2