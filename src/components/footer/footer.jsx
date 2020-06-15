import React from "react";
import styles from "./footer.module.scss";

import {ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg"
import {ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg"
import {ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg"
import {ReactComponent as SendIcon } from "../../assets/icons/send.svg"
 
import logo from "../../assets/Rectangle10.png";
import nasnavLogo from "../../assets/Rectangle134.png"
const footer = () => (
    <div className={styles.footer}>
        <div className={styles.footerContent}>
        <div className={styles.icons}>
            <img src={logo} alt="logo"/>
            <div className={styles.iconContainer}>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                
            </div>
        </div>
        <div className={styles.lists}>
            <div className={styles.list}>
                <ul>
                    <li>Home</li>
                    <li>Brands</li>
                    <li>Categories</li>
                </ul>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Site locator</li>
                </ul>
            </div>
        </div>
        <div className={styles.newsletter}>
        <span>Subscribe to our newsletter</span>
        <div className={styles.subscribe}>
        <input type="email"placeholder="your email"/>
        <SendIcon/>
        </div> 
        </div>
        </div>
        <div className={styles.copyrights}>
        <span>rasport.com</span>
        <div>
         <span>Powered by</span> <img src={nasnavLogo} alt="nasnav logo"/>
        </div>

        </div>
    </div>
)

export default footer