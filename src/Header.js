import React from "react";
import styles from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { Link, Route } from "react-router-dom";

function Header() {
  return (
    <div className={styles.head}>
      <div className={styles.top}>
        <ul className={styles.topList}>
          <li>관심장소</li>
          <li>고객센터</li>
          <li>마이페이지</li>
          <li>로그인</li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.bottomList}>
          <li className={styles.logo}>
            LAY
          </li>
          <li className={styles.lar}>
              Look Around
          </li>
          <li className={styles.search}>
            ABOUT <BsSearch size={25} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
