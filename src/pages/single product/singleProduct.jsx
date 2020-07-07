import React,{Component} from "react";
import styles from "./singleProduct.module.scss";
import WhiteMenu from "../../components/menu -white/menu-white";
import Footer from "../../components/footer/footer";
import ProducttInfo from "../../components/product info/productInfo";
import ProductOverview from "../../components/productsOverview/productsOverview"
class SingleProduct extends Component{
    render(){
        return(
            <div className={styles.productPage}>
                <WhiteMenu/>
                <ProducttInfo/>
                <div className={styles.ProductOverview}>
                <ProductOverview title="YOU" subTitle=" MAY LIKE"/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default SingleProduct