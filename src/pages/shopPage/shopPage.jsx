import React, { Component } from "react";
import styles from "./shopPage.module.scss";
import MenuWhite from "../../components/menu -white/menu-white";
import Banner from "../../components/address banner/Banner"


class ShopPage extends Component {
    render(){
        return(
            <div className={styles.ShopPage}>
                <MenuWhite/>
               <Banner/>
            </div>
        )
    }
}

export default ShopPage