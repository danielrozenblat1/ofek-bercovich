import { useEffect } from "react"
import styles from "./Button.module.css"
import ScrollReveal from "scrollreveal"

const Button = (props) => {
  const handleClick = () => {
    // Facebook Pixel tracking
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }

    if (props.href) {
      window.open(props.href);
      return;
    }

    const phoneNumber = "+972542002965";
    const message = props.message || "היי אופק, אשמח לשמוע עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.center}>
      <button onClick={handleClick} className={styles.button}>{props.text}</button>
    </div>
  );
}

export default Button