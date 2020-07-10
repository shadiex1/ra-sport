import React, { Component } from "react";
import styles from "./brands.module.scss";
import showcaseImg from "../../assets/brands/Image5.png"
import Carousel from "nuka-carousel";

import adidasLogo from "../../assets/brands/Adidas.png";
import dcsportsLogo from "../../assets/brands/dcsports.png";
import geoxLogo from "../../assets/brands/GEOX.png";
import gosportLogo from "../../assets/brands/GOsport.png";
import lvisLogo from "../../assets/brands/lvis.png";
import quicksilverLogo from "../../assets/brands/quicksilver.png";
import reebokLogo from "../../assets/brands/reebok.png";
import rockportLogo from "../../assets/brands/rockport.png";
import roxyLogo from "../../assets/brands/roxy.png";
import timberlandLogo from "../../assets/brands/timberland.png";

class Brands extends Component{
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

    if (this.state.width > 1000) {
      slides = 6;
    } else if (this.state.width > 800) {
       slides = 4;
        enabled=true
    }else if (this.state.width > 500) {
        slides = 2;
         enabled=true
     } else {slides = 1;  enabled=true}
    ;
    // const currentImg =

        return( <div className={styles.brandsContainer}>
        <div className={styles.brands}>
        <p>LET'S SHOP BY <span>BRANDS</span></p>
        <div className={styles.board}>
            <div className={styles.descrption}>
                <img src={adidasLogo} alt="brand"/>
                <button>Shop now</button>
            </div>
            <div className={styles.showcaseImg}>
            <img  src={showcaseImg} alt="brand overview"/>
            </div>
        </div>
        <div className={styles.slider}>
            <Carousel  
            wrapAround
            withoutControls={enabled}
            defaultControlsConfig={{
                nextButtonText: ">",
                prevButtonText: "<",
                prevButtonClassName: `${styles.prev}`,
                nextButtonClassName: `${styles.next}`,
                pagingDotsClassName: `${styles.pagingDots}`,
              }}
            slidesToShow={slides}>
            <img src={dcsportsLogo} alt="brand"/>
            <img src={geoxLogo} alt="brand"/>
            <img src={gosportLogo} alt="brand"/>
            <img src={lvisLogo} alt="brand"/>
            <img src={quicksilverLogo} alt="brand"/>
            <img src={reebokLogo} alt="brand"/>
            <img src={rockportLogo} alt="brand"/>
            <img src={roxyLogo} alt="brand"/>
            <img src={timberlandLogo} alt="brand"/>
        </Carousel>
        </div>
        
        </div>
    </div>
)
            }
}

export default Brands