import React from "react";
import styles from "./ServeFooter.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function ServeFooter() {
  return (
    <div>
      <div className={styles.container}>
        <ul>
          <li>
            <ul className={styles.time}>
              <li>
                <div className={styles.title}>운영시간</div>
                <ul>
                  <div className={styles.bigFont}>
                    평일 10:00 ~ 23:00 <FaChevronDown />
                  </div>
                  <li className={styles.smallTime}>주말 10:00 ~ 24:00</li>
                  <li className={styles.smallTime}>공휴일 및 화요일 휴무</li>
                </ul>
              </li>
              <li>
                <div className={styles.title}>브레이크 타임</div>
                <div className={styles.bigFont}>15:00~17:00</div>
              </li>
            </ul>
          </li>
          <li>
            <div className={styles.title3}>대표메뉴</div>
            <div className={styles.bigFont}>
              삼겹살(초벌구이) \13,500 <FaChevronDown />
            </div>
          </li>
          <li>
            <ul className={styles.others}>
              <li>
                <div className={styles.bigFont}>031-xxxx-xxxx</div>
                <div className={styles.Question}>문의 및 예약</div>
              </li>
              <li>
                <button>관심장소로 등록</button>
                <AiOutlineHeart size={30} color="rgb(255, 102, 102)" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServeFooter;
