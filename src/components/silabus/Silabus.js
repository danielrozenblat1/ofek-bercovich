import { useEffect } from 'react';

import Day from "./Day"
import ScrollReveal from "scrollreveal"
import styles from "./Silabus.module.css"
const Silabus=(props)=>{
    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.left}`, {
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
          ScrollReveal().reveal(`.${styles.right}`, {
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
        <div className={styles.title} id="סילבוס">לקראת מה את נכנסת ?</div>
    <div className={styles.silabus}>



      <div className={styles.right}> <Day number="מפגש 1: Checking in" description="איפה את היום? - הערכת מצב שתביא למודעות את החסמים שלך לגבי מציאת זוגיות." background="linear-gradient(159deg, rgba(255,251,160,0.3501050078234419) 15%, rgba(129,0,196,0.39772405544248945) 50%, rgba(255,253,172,0.34730388737526263) 85%)"/></div> 
      <div className={styles.left}>   <Day left={true} number="מפגש 2: Meeting Myself Again" description="חיבור לילדה הקטנה שהיית וגילוי מחדש של האיכויות שהשארת מאחור – כדי שתרגישי נינוחה
ושמחה בתהליך מציאת זוגיות." background="linear-gradient(159deg, rgba(129,0,196,0.39772405544248945) 0%, rgba(255,251,160,0.3501050078234419) 50%, rgba(129,0,196,0.3501050078234419) 85%)"/></div>
      <div className={styles.right}> <Day number="מפגש 3: Releasing Emotional Baggage" description="ריפוי מערכת היחסים שלך עם ההורים ושחרור טראומות עבר – לחיזוק הערך והביטחון העצמי
שלך." background="linear-gradient(159deg, rgba(107,246,255,0.39772405544248945) 0%, rgba(255,251,160,0.3501050078234419) 50%, rgba(107,246,255,0.3501050078234419) 85%)"/></div> 
         <div className={styles.left}> <Day left={true} number="מפגש 4: Breaking Chains" description="Breaking Chains
זיהוי וריפוי דפוסים שסיגלת ממערכת היחסים בין ההורים – כדי שתוכלי ליצור קשרים עמוקים
ואינטימיים." background="linear-gradient(159deg, rgba(255,251,160,0.3501050078234419) 0%, rgba(107,246,255,0.39772405544248945) 50%, rgba(255,251,160,0.35290612827162116) 85%)"/></div>
     <div className={styles.right}>   <Day number="מפגש 5:Making Peace" description="ניפוץ מיתוסים על גברים וזוגיות – שחרור הסחות דעת ותפיסות שאינן משרתות אותך כדי שתוכלי
לחוות דינמיקה בריאה עם בן הזוג." background="linear-gradient(159deg, rgba(118,27,167,0.34730388737526263) 0%, rgba(107,246,255,0.39772405544248945) 50%, rgba(118,27,167,0.35290612827162116) 90%)"/></div> 
       <div className={styles.left}> <Day left={true}  number="מפגש 6: Let’s Face It" description="כלים להתמודדות עם דחייה, אכזבה ורגשות כבדים נוספים – כדי שתרגישי יציבה, תחזירי בקלות
את הפוקוס אליך ותתמידי בפעולות למען מציאת הזוגיות שהכי מתאימה לך." background="linear-gradient(159deg, rgba(107,246,255,0.39772405544248945) 0%, rgba(118,27,167,0.34730388737526263) 50%, rgba(107,246,255,0.34730388737526263) 90%)"/></div> 
      <div className={styles.right}>   <Day number="מפגש 7: I- (a)m -possible" description="מה עוזרת כל העבודה הזו שעשינו עד עכשיו אם משהו בך מתעקש שזה בלתי אפשרי?! בפרק הזה
נעבוד על החסמים האלו כדי שתאמיני בעצמך ותהיי פתוחה לקבל את זה!" background="linear-gradient(159deg, rgba(107,246,255,0.39772405544248945) 0%, rgba(118,27,167,0.34730388737526263) 50%, rgba(255,246,107,0.34730388737526263) 90%)"/></div>
 <div className={styles.left}>     <Day left={true} number="מפגש 8: Level Up" description="כלים פרקטיים להגשמת זוגיות, להבין מה את כן רוצה בבן זוג וביחסים ביניכם כדי שתוכלי לחיות
את זה!" background="linear-gradient(159deg, rgba(118,27,167,0.34730388737526263) 0%, rgba(107,246,255,0.39772405544248945) 50%, rgba(255,246,107,0.34730388737526263) 90%)"/></div>  
        <div className={styles.right}>   <Day number="מפגש 9: New Vision" description="" background="linear-gradient(159deg, rgba(255,246,107,0.34730388737526263) 20%, rgba(107,246,255,0.39772405544248945) 50%, rgba(118,27,167,0.34730388737526263) 80%)"/></div> 
        <div className={styles.left}>     <Day left={true} number="מפגש 10 - סיכום" description="" background="linear-gradient(159deg, rgba(255,246,107,0.34730388737526263) 20%, rgba(118,27,167,0.34730388737526263) 50%, rgba(107,246,255,0.39772405544248945) 80%)"/></div>



    </div>
    </>
}
export default Silabus