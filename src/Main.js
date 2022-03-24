import React from "react";
import styles from "./Main.module.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";

function Main() {
  const [slideList, setSlideList] = useState([]);
  const [scrollState, setScrollState] = useState(0);

  useEffect(() => {
    setSlideList(["eventSlide1.png", "eventSlide2.png", "eventSlide3.png"]);
  }, []);

  const slideLength = slideList.length;

  return (
    <div className={styles.head}>
      <BsChevronLeft size={55} className={styles.bigArrowL} />
      <div className={styles.event}>
        <ul className={styles.eventSlideContainer}>
          <li className={styles.eventSlides}>
            <img src="eventSlide1.png" className={styles.eventImg} />
          </li>
          <li className={styles.eventSlides}>
            <img src="eventSlide2.png" className={styles.eventImg} />
          </li>
          <li className={styles.eventSlides}>
            <img src="eventSlide3.png" className={styles.eventImg} />
          </li>
        </ul>
      </div>
      <BsChevronRight size={55} className={styles.bigArrowR} />
      <div className={styles.places}>
        <div className={styles.place}>Place</div>
        <div className={styles.slide}>
          <BsChevronLeft size={35} className={styles.smallArrowL} />
          <ul className={styles.slideContainer}>
            <li>
              <img src="cola-gae85270d4_1280.png" />
            </li>
            <li>
              <img src="lemon-gcd8613a4d_1280.png" />
            </li>
            <li>
              <img src="orange-g1a2f0ce43_1280.png" />
            </li>
            <li>
              <img src="strawberry-g578fbefd6_1280.png" />
            </li>
            <li>
              <img src="apple-ge1722afc0_1280.png" />
            </li>
            <li>
              <img src="background-ge1da1aace_1280.png" />
            </li>
            <li>
              <img src="gift-vector-g4e8941828_1280.png" />
            </li>
            <li>
              <img src="server-icons-g79bf648d4_1280.png" />
            </li>
            <li>
              <img src="watermelon-gcec15a70b_1280.png" />
            </li>
          </ul>
          <BsChevronRight size={35} className={styles.smallArrowR} />
        </div>
      </div>
      <button className={styles.more}>more</button>
      <div className={styles.bottom}>
        <div className={styles.btmSlide}>
          <ul>
            <li>
              <img src="instagram-g026250309_1280.png" />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
          </ul>
        </div>
        <div>
          <img src="question-mark-g9231591d8_1280.png" />
        </div>
      </div>
    </div>
  );
}

export default Main;
