import React from "react";
import styles from "./categories.module.scss";
import Carousel from 'nuka-carousel';
import categroyImg1 from "../../assets/categories/Image112.png";
import categroyImg2 from "../../assets/categories/Image113.png";
import categroyImg3 from "../../assets/categories/Image114.png";
import categroyImg4 from "../../assets/categories/Image115.png";


const categories = props => (
    <div className={styles.categories}>
        <span>LET'S SHOP</span>
        <p>BY CATEGORY</p>
        <Carousel
        wrapAround
        defaultControlsConfig={{
            containerClassName: `${styles.container}`,
            nextButtonText: ">",
            prevButtonText: "<",
            prevButtonClassName: `${styles.prev}`,
            nextButtonClassName: `${styles.next}`,
            pagingDotsClassName: `${styles.pagingDots}`,
          }}
        slidesToShow="4"
        >
            <div style={{backgroundImage:`url(${categroyImg1})`}} className={styles.category}>
             <div className={styles.title}> Shoes</div>
            </div>
            <div style={{backgroundImage:`url(${categroyImg2})`}} className={styles.category}>
             <div className={styles.title}> Clothing</div>
            </div>
            <div style={{backgroundImage:`url(${categroyImg3})`}} className={styles.category}>
             <div className={styles.title}> Swimming</div>
            </div>
            <div style={{backgroundImage:`url(${categroyImg4})`}} className={styles.category}>
             <div className={styles.title}> Accessories</div>
            </div>
            <div  style={{backgroundImage:`url(${categroyImg2})`}}className={styles.category}>
             <div className={styles.title}> Swimming</div>
            </div>
        </Carousel>

    </div>
)

export default categories