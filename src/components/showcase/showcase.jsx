import React from "react";
import styles from "./showcase.module.scss";
import logo from "../../assets/Rectangle3.png";



const showcase = ()=>(
    <div className={styles.showcase}>
        <div className={styles.content}>
            <img src={logo} alt="logo"/>
            <div className={styles.heading}>
             <span>ALL YOU NEED</span>
            <p>IN ONE PLACE</p>
            <button>Shop now</button>
            </div>
            
            
        </div>
        

    </div>
)

export default showcase;