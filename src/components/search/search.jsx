import React from "react";
import styles from "./search.module.scss";
import {SearchIcon} from "../svg/svg"
const search = props=>{
    return(
        <div className={styles.searchbar}>
            <div className={styles.searchbox}>
                <input type="text" placeholder="Search .. " />
            <SearchIcon/>
            </div>
            
        </div>
    )
}

export default search