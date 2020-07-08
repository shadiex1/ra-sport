import React, { Component } from "react";
import styles from "./productsOverview.module.scss";
import Carousel from 'nuka-carousel';
import products from "../../services/products";
import Card from "../card/card";
import { Link} from "react-router-dom"



class ProductsOverview extends Component {
  state = {products,
    width: 1100
  };
  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({ width: 450});
    } else {
      let update_width = window.innerWidth - 100;
      this.setState({ width: update_width });
    }
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  
  render() {
    let slides = 0;
    let enabled=false

if (this.state.width > 1200) {
  slides = 5;
} else if (this.state.width >900) {
   slides = 4;
    // enabled=true
} else if (this.state.width > 500) {
  slides = 2;
   enabled=true
}else {slides = 1;  enabled=true}
;
    return (
      <div className={styles.productsOverview}>
        <p>
          {this.props.title} <span>{this.props.subTitle}</span>
        </p>
        <Carousel
          wrapAround
          withoutControls={enabled}
          defaultControlsConfig={{
            containerClassName: `${styles.container}`,
            nextButtonText: ">",
            prevButtonText: "<",
            prevButtonClassName: `${styles.prev}`,
            nextButtonClassName: `${styles.next}`,
            pagingDotsClassName: `${styles.pagingDots}`,
          }}
          slidesToShow={slides}
        >
            {this.state.products.map(product=>(
                <Card 
                // onClick={}
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