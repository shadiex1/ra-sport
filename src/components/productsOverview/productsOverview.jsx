import React, { Component } from "react";
import styles from "./productsOverview.module.scss";
import Carousel from 'nuka-carousel';
import products from "../../services/products";
import Card from "../card/card"


class ProductsOverview extends Component {
  state = {products};
  render() {
    return (
      <div className={styles.productsOverview}>
        <p>
          {this.props.title} <span>{this.props.subTitle}</span>
        </p>
        <Carousel
          wrapAround
          defaultControlsConfig={{
            containerClassName: `${styles.container}`,
            nextButtonText: ">",
            prevButtonText: "<",
            prevButtonClassName: `${styles.prev}`,
            nextButtonClassName: `${styles.next}`,
            pagingDotsClassName: `${styles.pagingDots}`,
          }}
          slidesToShow="5"
        >
            {this.state.products.map(product=>(
                <Card 
                img={product.img} 
                key={product.id} 
                brand={product.brand} 
                brandLogo={product.brandLogo} 
                title={product.title}
                 price={product.price}
                 oldPrice={product.oldPrice}/>
            ))}
        </Carousel>
        <button>View all</button>
      </div>
    );
  }
}

export default ProductsOverview