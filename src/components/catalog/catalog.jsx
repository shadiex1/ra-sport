import React, { Component } from "react";
import styles from "./catalog.module.scss";
import products from "../../services/products";
import Card from "../../components/card/card"



class Catalog extends Component{
    state={
        products
    }
    render(){
        return (
             <div className={styles.catalog}>
                 <div className={styles.catalogGrid}>
                 {this.state.products.map(product=>(
                     <Card 
                     addToCart={()=>this.props.addToCart(product)}
                     product={product}
                     img={product.img} 
                     key={product.id} 
                     brand={product.brand} 
                     brandLogo={product.brandLogo} 
                     title={product.title}
                      price={product.price}
                      oldPrice={product.oldPrice}/>
                 ))}
</div>                      
   <button>View all</button>

            </div>
        )
    }
}


export default Catalog