import React from "react";
import styles from "./card.module.scss";
import testImg from "../../assets/products/Image89.png";
import brandLogo from "../../assets/brands/Adidas.png"

const card=props=>(
    <div className={styles.card}>
        <img src={testImg} alt="product"/>
        <div className={styles.brand}>
            <span>Reebok</span>
            <img src={brandLogo} alt="brand"/>
        </div>
        <span className={styles.title}>Union Heather 20" Amphibian Boardshorts</span>
        <div className={styles.price}>
            <span className={styles.newPrice}>800 EGP</span>
            <span className={styles.oldPrice}>1000 EGP</span>
        </div>
    </div>
)

export default card