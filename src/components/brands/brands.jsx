import React, { Component } from "react";
import styles from "./brands.module.scss";
import BrandCard from "./brandCard/brandCard"
import showcaseImg from "../../assets/brands/Image5.png"
import DcShowcaseImg from "../../assets/brands/Dcshoes.png"
import GeoxCover from "../../assets/brands/GeoxCover.png"
import GosportCover from "../../assets/brands/GosportCover.png"
import levisCover from "../../assets/brands/levisCover.png"
import quicksilverCover from "../../assets/brands/quicksilverCover.png"
import reebokCover from "../../assets/brands/reebokCover.png"
import rockportCovrer from "../../assets/brands/rockportCovrer.png"
import RoxyCover from "../../assets/brands/RoxyCover.png"
import timberlandCover from "../../assets/brands/timberlandCover.png"
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
        imgs:[
          {logo:adidasLogo,cover:showcaseImg,clicked:false,name:"addidas"},
          {logo:dcsportsLogo,cover:DcShowcaseImg,clicked:false},
          {logo:geoxLogo,cover:GeoxCover,clicked:false},
          {logo:gosportLogo,cover:GosportCover,clicked:false},
          {logo:lvisLogo,cover:levisCover,clicked:false},
          {logo:quicksilverLogo,cover:quicksilverCover,clicked:false},
          {logo:reebokLogo,cover:reebokCover,clicked:false},
          {logo:rockportLogo,cover:rockportCovrer,clicked:false},
          {logo:roxyLogo,cover:RoxyCover,clicked:false},
          {logo:timberlandLogo,cover:timberlandCover,clicked:false}
          
        ],
        
          showcaseLogo:adidasLogo,
          showcaseCover:showcaseImg
        
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

      clicked=(img,cover)=>{
        // console.log(name)
        this.setState({
          showcaseLogo:img,
          showcaseCover:cover
          
        })
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
                <img src={this.state.showcaseLogo} alt="brand"/>
                <button>Shop now</button>
            </div>
            <div className={styles.showcaseImg}>
            <img  src={this.state.showcaseCover} alt="brand overview"/>
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
           
            {this.state.imgs.map(brand=><BrandCard clicked={()=>this.clicked(brand.logo,brand.cover)} logo={brand.logo}/>)}
        </Carousel>
        </div>
        
        </div>
    </div>
)
            }
}

export default Brands