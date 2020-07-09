import React from "react"
import styles from "./Banner.module.scss";

const Banner = (props) => (
    <div className={styles.banner}>
        <div>
             <span>{props.path}</span>
        <h3>{props.title}</h3>
        </div>
       
    </div>
)

export default Banner