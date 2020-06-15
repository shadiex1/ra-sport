import React, { Component } from "react";
import styles from "./homepage.module.scss";
import Menu from "../../components/menu/menu";
import Showcase from "../../components/showcase/showcase"
import Categories from "../../components/categories/categories";
import Brands from "../../components/brands/brands";
import ProductsOverview from "../../components/productsOverview/productsOverview"
import Tours from "../../components/360 tours/tours";
import Stats from "../../components/stats/stats";
import Footer from "../../components/footer/footer";



class Homepage extends Component{
    render(){
        return(
            <div className={styles.homepage}>
                    <Menu/>
                    <Showcase/>
                    <Categories/>
                    <Brands/>
                    <ProductsOverview title="BEST" subTitle="SELLER"/>
                    <Tours/>
                    <ProductsOverview title="New" subTitle="ARRIVAL"/>
                    <Stats/>
                    <Footer/>
            </div>
        )
    }
}

export default Homepage