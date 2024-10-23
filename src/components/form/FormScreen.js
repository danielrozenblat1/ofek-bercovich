import { useRef, useState } from "react";
import styles from "./FormScreen.module.css";

const FormScreen = () => {
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const reasonRef = useRef(null);
  const agreeRef = useRef(null);
  const reciver = "ofekberco@gmail.com";

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const agree = agreeRef.current.checked;

    if (name.trim().length <= 2) {
      alert("אנא הכנס שם מלא");
      return;
    }
    if (phone.trim().length !== 10) {
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    if (!email.includes("@")) {
      alert("אנא הכנס מייל תקין");
      return;
    }
    if (!agree) {
      alert("אנא אשר/י לקבל דואר במייל");
      return;
    }

    const formData = {
      name: name,
      phone: phone,
      email: email,
      reciver: reciver,
    };

    // שליחת הבקשה הראשונה
    const response = await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // שליחת הבקשה השנייה
      try {
        const secondApiUrl = `https://panel.sendmsg.co.il/AddUserFromSite.aspx?cellphone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&1=${encodeURIComponent(name)}&form=335852__a46f180f-5b91-4fb5-ac2c-3a17c3917fcb`;
        
        await fetch(secondApiUrl);
        
        // ניקוי הטופס והצגת ההודעה רק אם שתי הבקשות הצליחו
        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        agreeRef.current.checked = false;
      } catch (error) {
        console.error("שגיאה בשליחת הנתונים ל-API השני:", error);
      }
    }
    
    console.log(formData);
};
  return (
    <>
      <div className={styles.title} id="צרו קשר">
      לקבלת עדכונים על סדנאות ותכנים מעשירים
      </div>
      <form className={styles.form}>
        <div className={styles.column}>
          <input className={styles.input} ref={nameRef} placeholder="שם מלא" />
          <input className={styles.input} ref={phoneRef} placeholder="מספר טלפון" />
          <input className={styles.input} ref={emailRef} placeholder="מייל" />
    
          <label className={styles.checkboxContainer}>
            <input type="checkbox" ref={agreeRef} />
            מאשרת קבלת דיוור במייל
          </label>
          <button className={styles.button} onClick={submitHandler}>
          שלחי
          </button>
        </div>
      </form>
    </>
  );
};

export default FormScreen;
