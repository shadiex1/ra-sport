import React,{Component} from "react";
import styles from "./singleProduct.module.scss";
import WhiteMenu from "../../components/menu -white/menu-white";
import Footer from "../../components/footer/footer";
import ProducttInfo from "../../components/product info/productInfo";
import ProductOverview from "../../components/productsOverview/productsOverview";
import {withRouter} from 'react-router-dom';


class SingleProduct extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){

        return(
            <div className={styles.productPage}>
                <WhiteMenu deleteFromCart={(i)=>this.props.deleteFromCart(i)} cart={this.props.cart}/>
                <ProducttInfo  addToCart={(item,quantity)=>this.props.addToCart(item,quantity)} product={this.props.location.state.product} />
                <div className={styles.ProductOverview}>
                <ProductOverview   addToCart={(item)=>this.props.addToCart(item)} clicked={(item)=>this.props.productInfo(item)} slides={4} title="YOU" subTitle=" MAY LIKE"/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(SingleProduct) 