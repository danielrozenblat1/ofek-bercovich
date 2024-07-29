import { useEffect,useRef } from "react";
import styles from "./Box.module.css"
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";
import { Link as ScrollLink } from "react-scroll";
const Box=(props)=>{
    const playerRef1 = useRef(null);
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };


  
 

    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();

    },[])
    return <>
      <ScrollLink to={props.to} smooth={true} duration={1000} offset={-100} className={styles.box}><div>
        <ScrollLink to={props.to} smooth={true} duration={1000} offset={-100} className={styles.circle}><div className={styles.icon}><Player icon={props.icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player></div></ScrollLink>
        <div className={styles.title}>{props.title}</div>
        {!props.descriptionN &&  <div className={styles.description}>{props.description}</div>}
       {props.descriptionN && <div className={styles.description} style={{fontStyle:"italic"}}>{props.descriptionN}</div>}
        {props.little && <div className={styles.little}>{props.little}</div>}
        </div></ScrollLink>  
    
    </>
}
export default Box