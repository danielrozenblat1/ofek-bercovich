import { useEffect,useRef } from "react";
import styles from "./Box.module.css"
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";
const Box=(props)=>{
    const playerRef1 = useRef(null);
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };


  
 

    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();

      ScrollReveal().reveal(`.${styles.icon}`, {
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
        <div className={styles.box}>
        <div className={styles.circle}><div className={styles.icon}><Player icon={props.icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player></div></div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        </div>
    
    </>
}
export default Box