import React from "react";
import styles from "./card.module.scss";

const card=props=>(
    <div className={styles.card}>
        <img src={props.img} alt="product"/>
        <div className={styles.brand}>
            <span>{props.brand}</span>
            <img src={props.brandLogo} alt="brand"/>
        </div>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.price}>
            <span className={styles.newPrice}>{props.price} EGP</span>
            {props.oldPrice ? <span className={styles.oldPrice}>{props.oldPrice} EGP</span> : null}
            
        </div>
    </div>
)

export default card