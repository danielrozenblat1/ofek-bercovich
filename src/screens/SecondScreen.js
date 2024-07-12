import styles from "./SecondScreen.module.css"
import result1 from "../images/אופק ברקוביץ המלצות סשנים 1.png"
import result2 from "../images/אופק ברקוביץ המלצות סשנים 2.png"
import result3 from "../images/אופק ברקוביץ המלצות סשנים 3.png"
import result4 from "../images/אופק ברקוביץ המלצות סשנים 4.png"
import result5 from "../images/אופק ברקוביץ המלצות סשנים 5.png"
import result6 from "../images/אופק ברקוביץ המלצות סשנים 6.png"
import result7 from "../images/אופק ברקוביץ המלצות סשנים 7.png"
import result8 from "../images/אופק ברקוביץ המלצות סשנים 8.png"
import result9 from "../images/אופק ברקוביץ המלצות סשנים 9.png"
import result10 from "../images/אופק ברקוביץ המלצות סשנים 10.png"
import result11 from "../images/אופק ברקוביץ המלצות סשנים 11.png"
import result12 from "../images/אופק ברקוביץ המלצות סשנים 12.png"
import result13 from "../images/אופק ברקוביץ המלצות סשנים 13.png"
import result14 from "../images/אופק ברקוביץ המלצות סשנים 14.png"
import result15 from "../images/אופק ברקוביץ המלצות סשנים 15.png"

import result17 from "../images/אופק ברקוביץ המלצות סשנים 17.png"
import result18 from "../images/אופק ברקוביץ המלצות סשנים 18.png"
import result19 from "../images/אופק ברקוביץ המלצות סשנים 19.png"
import result20 from "../images/אופק ברקוביץ המלצות סשנים 20.png"
import result21 from "../images/אופק ברקוביץ המלצות סשנים 21.png"
import result22 from "../images/אופק ברקוביץ המלצות סשנים 22.png"



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import Button from "../components/button/Button"

const SecondScreen=()=>{

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
            src: result3,
          },
          {
            type: 'image',
            src: result9,
          },
          {
              type: 'image',
              src: result10,
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
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
            type: 'image',
            src: result13,
          },
          {
            type: 'image',
            src: result14,
          },
          {
            type: 'image',
            src: result15,
          },
       
          {
            type: 'image',
            src: result17,
          },
          {
            type: 'image',
            src: result18,
          },
          {
            type: 'image',
            src: result19,
          },
          {
            type: 'image',
            src: result20,
          },
          {
            type: 'image',
            src: result21,
          },
          {
            type: 'image',
            src: result22,
          },

    ];
    
   
    return <>
    <div className={styles.background} id="המלצות">
<div className={styles.title}>תשמעו קצת ממי שעבר דרכי..</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
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
export default SecondScreen