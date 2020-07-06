import React from "react";
import styles from "./cartItem.module.scss";
import testImg from "../../assets/products/Image89.png";
import testBrand from "../../assets/brands/colored brands/Adidas.png";
import {TrashIcon} from "../svg/svg"
const cartItem = props =>{
    return(
        <div className={styles.cartItem}>
            <div className={styles.trashIcon}>
                <TrashIcon/>
            </div>
            <div className={styles.productInfo}>
                <img src={testImg}/>
                <div className={styles.info}>
                    <p className={styles.title}>Union Heather 20" Amphibian Union Heather 20" Amphibian Board.</p>
                    <div className={styles.details}>
                    <span>color: <span style={{fontWeight:"600"}}>red</span></span>
                    <span>size: <span  style={{fontWeight:"600"}}>XL</span></span>
                    </div>
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <div>
                     <img src={testBrand}/>
                <span className={styles.price}>800 EGP</span>
                </div>
               
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