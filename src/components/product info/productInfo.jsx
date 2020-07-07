import React from "react";
import styles from "./productInfo.module.scss";
import testImg from "../../assets/products/Image90.png";
import {HeartIcon,TickIcon,SignsIcon,FacebookIcon,InstagramIcon} from "../svg/svg";
import ProductOverview from "../productsOverview/productsOverview"
const productInfo = props=>{
    return(
        <div className={styles.product}>
            <div className={styles.productImgs}>
                <img src={testImg}/>
                <img src={testImg}/>
                <img src={testImg}/>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.info}>
                    <span className={styles.path}>Home / Shop / Category / Product name</span>
                    <h3>Union Heather 20" Amphibian Boardshorts</h3>
                    <div className={styles.price}>
                        <span className={styles.newPrice}>1,900 EGP</span>
                        <span className={styles.oldPrice}>2,000 EGP</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Option</label> 
                        <select placeholder="dasff">
                            <option>-- Please select --</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Option</label> 
                        <select placeholder="dasff">
                            <option>-- Please select --</option>
                        </select>
                    </div>
                    <div className={styles.quantityGroup}>
                        <label>Quantity</label> 
                        <div className={styles.controls}>
                            <span className={styles.sign}>-</span>
                            <span className={styles.quantity}>1</span>
                            <span className={styles.sign}>+</span>
</div>
                        </div>
                        <div className={styles.cart}>
                            <div className={styles.heartIcon}>
                                <HeartIcon/>
                            </div>
                            <button className={styles.cartBtn}>
                            Add to cart
                            </button>
                        </div>
                    
                   
                </div>
                <div className={styles.available}>
                    <div>
                    <TickIcon/> <span>Product available in these store branches</span>
                    </div>
                    <p>You also can buy online and Pick up product from the nearest branch.</p>
                    <div className={styles.location}>
                        <select>
                        <option>Reebok - City Stars</option>
                    </select>
                    <div className={styles.signIcon}>
                        <SignsIcon/>
                    </div>
                    </div>
                    
                </div>
                <div className={styles.description}>
                    <p>
                    <span>Description</span> <br/> Visibly more youthful-looking eyes thanks to this eye contour cream which banishes lines, puffiness and dark circles .
Visibly more youthful-looking eyes thanks to this eye contour cream which banishes lines, puffiness and dark circles .Visibly more youthful-looking eyes thanks to this eye contour cream which banishes lines, puffiness and dark circles .
                    </p>
                </div>
                <div className={styles.share}>
                    <span>Share Product </span>
                    <div className={styles.icons}>
                        <div className={styles.icon}><FacebookIcon/></div>
                        <div className={styles.icon}><InstagramIcon/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default productInfo