import React from "react";
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

const brands=()=>(
    <div className={styles.brandsContainer}>
        <div className={styles.brands}>
        <p>LET'S SHOP BY <span>BRANDS</span></p>
        <div className={styles.board}>
            <div className={styles.descrption}>
                <img src={adidasLogo} alt="brand"/>
                <button>Shop now</button>
            </div>
            <img className={styles.showcaseImg} src={showcaseImg} alt="brand overview"/>
        </div>
        <div className={styles.slider}>
            <Carousel  
            wrapAround
            defaultControlsConfig={{
                nextButtonText: ">",
                prevButtonText: "<",
                prevButtonClassName: `${styles.prev}`,
                nextButtonClassName: `${styles.next}`,
                pagingDotsClassName: `${styles.pagingDots}`,
              }}
            slidesToShow="6">
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

export default brands