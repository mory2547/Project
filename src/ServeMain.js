import React from "react";
import styles from "./ServeMain.module.css";

function ServeMain() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainImg}>
          <ul>
            <li>
              <img src="하남돼지집.png" className={styles.img} />
            </li>
          </ul>
        </div>
        <div className={styles.mainInfo}>
          <div className={styles.intro}>
            <div className={styles.intro1}>
              <ul>
                <li>하남돼지집</li>
                <li>성대역에서 20분거리</li>
              </ul>
            </div>
            <div className={styles.intro2}>
              <ul>
                <li>경기 수원시 장안구 만석로19번길 11-3 태영프라자</li>
                <li>지도보기</li>
              </ul>
            </div>
          </div>
          <div className={styles.button}>예약하기</div>
          <div className={styles.button}>주차장 없음</div>
          <div className={styles.menu}>
            <div>
              <div>메뉴</div>
              <div>단위 \</div>
            </div>
            <ul>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
              <li>
                <div>삼겹살</div> <div>13,500</div>
              </li>
            </ul>
          </div>
          <div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
            <div>리뷰</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServeMain;
