import React from "react";
import styles from "./cartItem.module.scss";
import testImg from "../../assets/products/Image89.png";
import testBrand from "../../assets/brands/Adidas.png"
const cartItem = props =>{
    return(
        <div className={styles.cartItem}>
            <div className={styles.productInfo}>
                <img src={testImg}/>
                <div className={styles.info}>
                    <p className={styles.title}>Union Heather 20" Amphibian Union Heather 20" Amphibian Board.</p>
                    <span>color: <span>red</span></span>
                    <span>size: <span>XL</span></span>
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <img src={testBrand}/>
                <span>800 EGP</span>
                <div className={styles.controls}>
                    <span>-</span>
                    <span className={styles.quantity}>2</span>
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}

export default cartItem