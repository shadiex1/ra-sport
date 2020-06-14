import React, { Component } from "react";
import styles from "./homepage.module.scss";
import Menu from "../../components/menu/menu";
import Showcase from "../../components/showcase/showcase"
import Categories from "../../components/categories/categories";
import Brands from "../../components/brands/brands"


class Homepage extends Component{
    render(){
        return(
            <div className={styles.homepage}>
                    <Menu/>
                    <Showcase/>
                    <Categories/>
                    <Brands/>
            </div>
        )
    }
}

export default Homepage