import styles from "../../screens/SecondScreen.module.css"
import result1 from "../../images/אופק ברקוביץ המלצות קורסים 1.png"
import result2 from "../../images/אופק ברקוביץ המלצות קורסים 2.png"

import result4 from "../../images/אופק ברקוביץ המלצות קורסים 4.png"
import result5 from "../../images/אופק ברקוביץ המלצות קורסים 5.png"
import result6 from "../../images/אופק ברקוביץ המלצות קורסים 6.png"
import result7 from "../../images/אופק ברקוביץ המלצות קורסים 7.png"
import result8 from "../../images/אופק ברקוביץ המלצות קורסים 8.png"
import result9 from "../../images/אופק ברקוביץ המלצות קורסים 9.png"




import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import Button from "../button/Button"

const TetaCarousel=()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth <650 ? 1 : window.innerWidth < 850 ? 2 :window.innerWidth < 1250 ? 3: 4,
        slidesToScroll:1,
  
      };
   
    const content = [
        {
          type: 'image',
          src: result1,
        },
        {
            type: 'image',
            src: result2,
          },
      
          {
            type: 'image',
            src: result4,
          },
          {
            type: 'image',
            src: result5,
          },

        {
          type: 'image',
          src: result6,
        },
        {
          type: 'image',
          src: result7,
        },
        {
          type: 'image',
          src: result8,
        },
        {
            type: 'image',
            src: result9,
          },
    ];
    
   
    return <>
    <div className={styles.background} id="לקוחות סשנים">

<div className={styles.description}>מוזמנות להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`אופק ברקוביץ לקוחה ממליצה מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>

  </div>
    </>
}
export default TetaCarousel