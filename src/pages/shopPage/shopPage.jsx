import React, { Component } from "react";
import styles from "./shopPage.module.scss";
import MenuWhite from "../../components/menu -white/menu-white";
import Banner from "../../components/address banner/Banner";
import ShopSidebar from "../../components/shopSidebar/shopSidebar";
import Catalog from "../../components/catalog/catalog";
import Footer from "../../components/footer/footer"


class ShopPage extends Component {
    render(){
        return(
            <div className={styles.ShopPage}>
                <MenuWhite/>
               <Banner path={"Home / Shop"} title={"shop"}/>
               <div className={styles.catalog}>
                   <ShopSidebar/>
               <Catalog/>
               </div>
               <Footer/>
               
            </div>
        )
    }
}

export default ShopPage