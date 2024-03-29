import React from "react";
import styles from "./stats.module.scss";

import pattern from "../../assets/patterns/Group12.png"
import mapPattern from "../../assets/patterns/Group158.png"

const stats = ()=>(
    <div className={styles.statsContainer}>
        <img className={styles.pattern} src={pattern} alt="pattern"/>
    <div className={styles.stats}>
        <div className={styles.brandsNumber}>
            <span>13 <sup>+</sup></span>
            <span>BRANDS</span>
        </div>
        <div className={styles.description}>
            <span>NUMBER ONE</span>
            <h3>EGYPTIAN RETAIL COMPANY IN THE MARKET</h3>
            <p>RAsport was able to become the number one Egyptian retail company in the market with a firm structure running 90+ stores.</p>
            <p>We are more than a business, we are an en extended family of young, open minded, ambitious and always enthusiastic experts with various background . We are more than a business, we are an en extended family of young, open minded, ambitious and always enthusiastic experts with various background.
                </p>
            <div className={styles.statBoxes}>
                <div className={styles.box}>
                    <span>90</span>
                    <p>STORES</p>
                </div>
            
                <div className={styles.box}>
                    <span>8</span>
                    <p>CITIES</p>
                </div>
                <div className={styles.locationBox}>
                    <img src={mapPattern} alt="map pattern"/>
                    <p>Store locator</p>
            </div>            
</div>
        </div>
    </div>
    </div>
)

export default stats