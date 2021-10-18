import React from "react";
import styles from "./categories.module.scss";
import Carousel from 'nuka-carousel';
import categroyImg1 from "../../assets/categories/Image112.png";
import categroyImg2 from "../../assets/categories/Image113.png";
import categroyImg3 from "../../assets/categories/Image114.png";
import categroyImg4 from "../../assets/categories/Image115.png";
import pattern1 from "../../assets/patterns/Group159.png"
import { render } from "@testing-library/react";
import { Component } from "react";


class Categories extends Component{ 
    
    state = {
        width: 1100,
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
    render(){
        let slides = 0;
        let enabled=false

    if (this.state.width > 800) {
      slides = 4;
    } else if (this.state.width > 500) {
       slides = 2;
        enabled=true
    } else {slides = 1;  enabled=true}
    ;
    return(
    <div className={styles.categories}>
    <div className={styles.categoriesContainer}>
        <span>LET'S SHOP</span>
        <p>BY CATEGORY</p>
        <img src={pattern1} alt="patter"/>
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
            <div style={{backgroundImage:`url(${categroyImg1})`}} className={styles.category}>
             <div className={styles.title}> Shoes</div>
            </div>
            <div style={{backgroundImage:`url(${categroyImg2})`}} className={styles.category}>
             <div className={styles.title}> Clothing</div>
            </div>
            <div style={{backgroundImage:`url(${categroyImg3})`}} className={styles.category}>
             <div className={styles.title}> Swimming</div>
            </div>
            <div style={{backgroundImage:`url(${categroyImg4})`}} className={styles.category}>
             <div className={styles.title}> Accessories</div>
            </div>
            <div  style={{backgroundImage:`url(${categroyImg2})`}}className={styles.category}>
             <div className={styles.title}> Swimming</div>
            </div>
        </Carousel>

    </div>
    </div>
)}
        }

export default Categories