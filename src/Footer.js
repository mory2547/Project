import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.head}>
      <div className={styles.information}>
        <ul className={styles.information1}>
          <li>information</li>
          <li>공지사항</li>
          <li>서비스 소개</li>
          <li>이용정책</li>
          <li>커뮤니티 가이드라인</li>
        </ul>
        <ul className={styles.information2}>
          <li>고객센터 010-xxxx-xxxx</li>
          <li>운영시간 평일 9:00 ~ 17:00 (일, 공휴일 휴무)</li>
          <li>
            <button>자주 묻는 질문</button>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <ul>
          <li>회사소개</li>
          <li>인재채용</li>
          <li>제휴제안</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
