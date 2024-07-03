import { useEffect } from "react"
import styles from "./Button.module.css"
import ScrollReveal from "scrollreveal"
const Button=(props)=>{


    const handleClick = () => {


        if(props.href){
    
    window.open(props.href);
    return ;
    
        }
        const phoneNumber = "+972542002965";
        // Set the message content
        const message =props.message || "היי אופק, אשמח לשמוע עוד על..";
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        // Construct the WhatsApp message URL with phone number and message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        // Open the URL in a new tab
        window.open(whatsappURL, "_blank");
    
      };
    
    return <>
    <div className={styles.center}>
    <button onClick={handleClick} className={styles.button}>{props.text}</button>
    </div>
    </>
}
export default Button