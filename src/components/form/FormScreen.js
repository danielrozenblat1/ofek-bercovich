import { useRef, useState } from "react"
import styles from "./FormScreen.module.css"
import { useNavigate } from "react-router-dom"


const FormScreen=()=>{
    const [submitted ,setSubmitted]=useState(false)
const nameRef=useRef(null)
const phoneRef=useRef(null)
const mailRef=useRef(null)

const reciver="" 
const submitHandler=async(e)=>{
    e.preventDefault()
    const name=nameRef.current.value
    const phone=phoneRef.current.value
    const email=mailRef.current.value
    if(name.trim().length<=2){
    
    alert("אנא הכניסי שם מלא ")
    return;
    }
    if(phone.trim().length!==10){
    
    alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ")
    return;
        }
        if(!email.includes("@")){
         
            alert("אנא הכניסי מייל תקין ")
            return;
            }


            
       
   const formData={
    name:name,
    phone:phone,
    email:email,
    
    reciver:reciver
   }
const response= await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
   })
        
        if(response.ok){

        alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
        nameRef.current.value=""
        phoneRef.current.value=""
        mailRef.current.value=""
       setSubmitted(true)
        }
    
}


return <>

<div className={styles.title} id="צור קשר">השאירי פרטים כאן כדי להתחיל לקחת שליטה על החיים שלך</div>
<form className={styles.form}>
<div className={styles.column}>
<input className={styles.input} ref={nameRef} placeholder="שם מלא"></input>
<input className={styles.input} ref={phoneRef} placeholder="מספר טלפון"></input>
<input className={styles.input} ref={mailRef} placeholder="מייל"></input>
<button className={styles.button} onClick={submitHandler}>אופק, אני מחכה לשיחה</button>
</div>
</form>

</>

}
export default FormScreen
