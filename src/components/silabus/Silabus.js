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



      <div className={styles.right}> <Day number="מפגש 1: Checking in" description="איפה את היום? - הערכת מצב שתביא למודעות את החסמים שלך לגבי מציאת זוגיות." background="linear-gradient(162deg, rgba(180,214,236,1) 15%, rgba(221,175,255,1) 60%)"/></div> 
      <div className={styles.left}>   <Day left={true} number="מפגש 2: Meeting Myself Again" description="חיבור לילדה הקטנה שהיית וגילוי מחדש של האיכויות שהשארת מאחור – כדי שתרגישי נינוחה
ושמחה בתהליך מציאת זוגיות." background="linear-gradient(162deg, rgba(221,175,255,1) 15%, rgba(180,214,236,1) 70%)"/></div>
      <div className={styles.right}> <Day number="מפגש 3: Releasing Emotional Baggage" description="ריפוי מערכת היחסים שלך עם ההורים ושחרור טראומות עבר – לחיזוק הערך והביטחון העצמי
שלך." background="linear-gradient(162deg, rgba(180,214,236,1) 15%, rgba(221,175,255,1) 60%)"/></div> 
         <div className={styles.left}> <Day left={true} number="מפגש 4: Breaking Chains" description="Breaking Chains
זיהוי וריפוי דפוסים שסיגלת ממערכת היחסים בין ההורים – כדי שתוכלי ליצור קשרים עמוקים
ואינטימיים." background="linear-gradient(162deg, rgba(221,175,255,1) 15%, rgba(180,214,236,1) 70%)"/></div>
     <div className={styles.right}>   <Day number="מפגש 5:Making Peace" description="ניפוץ מיתוסים על גברים וזוגיות – שחרור הסחות דעת ותפיסות שאינן משרתות אותך כדי שתוכלי
לחוות דינמיקה בריאה עם בן הזוג." background="linear-gradient(162deg, rgba(180,214,236,1) 15%, rgba(221,175,255,1) 60%)"/></div> 
       <div className={styles.left}> <Day left={true}  number="מפגש 6: Let’s Face It" description="כלים להתמודדות עם דחייה, אכזבה ורגשות כבדים נוספים – כדי שתרגישי יציבה, תחזירי בקלות
את הפוקוס אליך ותתמידי בפעולות למען מציאת הזוגיות שהכי מתאימה לך." background="linear-gradient(162deg, rgba(221,175,255,1) 15%, rgba(180,214,236,1) 70%)"/></div> 
      <div className={styles.right}>   <Day number="מפגש 7: I- (a)m -possible" description="מה עוזרת כל העבודה הזו שעשינו עד עכשיו אם משהו בך מתעקש שזה בלתי אפשרי?! בפרק הזה
נעבוד על החסמים האלו כדי שתאמיני בעצמך ותהיי פתוחה לקבל את זה!" background="linear-gradient(162deg, rgba(180,214,236,1) 15%, rgba(221,175,255,1) 60%)"/></div>
 <div className={styles.left}>     <Day left={true} number="מפגש 8: Level Up" description="כלים פרקטיים להגשמת זוגיות, להבין מה את כן רוצה בבן זוג וביחסים ביניכם כדי שתוכלי לחיות
את זה!" background="linear-gradient(162deg, rgba(221,175,255,1) 15%, rgba(180,214,236,1) 70%)"/></div>  
        <div className={styles.right}>   <Day number="מפגש 9: New Vision" description="" background="linear-gradient(162deg, rgba(180,214,236,1) 15%, rgba(221,175,255,1) 60%)"/></div> 
        <div className={styles.left}>     <Day left={true} number="מפגש 10 - סיכום" description="" background="linear-gradient(162deg, rgba(221,175,255,1) 15%, rgba(180,214,236,1) 70%)"/></div>



    </div>
    </>
}
export default Silabus