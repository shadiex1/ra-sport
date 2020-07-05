import React from "react";
import styles from "./card.module.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/bag.svg";
import { ReactComponent as WishlistIcon } from "../../assets/icons/heart.svg";

const card = (props) => (
  <div className={styles.card}>
    <div className={styles.imgContainer}>
      <img src={props.img} alt="product" />
      <div className={styles.description}>
        <div>
          <ShoppingIcon /> Add To Cart
        </div>
        <WishlistIcon />
      </div>
    </div>
    <div className={styles.brand}>
      <span>{props.brand}</span>
      <img src={props.brandLogo} alt="brand" />
    </div>
    <span className={styles.title}>{props.title}</span>
    <div className={styles.price}>
      <span className={styles.newPrice}>{props.price} EGP</span>
      {props.oldPrice ? (
        <span className={styles.oldPrice}>{props.oldPrice} EGP</span>
      ) : null}
    </div>
  </div>
);

export default card;
