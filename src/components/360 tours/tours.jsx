import React from "react";
import styles from "./tours.module.scss";
import Carousel from 'nuka-carousel';


import {ReactComponent as ToursIcon } from "../../assets/tours/360-degree.svg"

import toursImg1 from "../../assets/tours/Image85.png"
import toursImg2 from "../../assets/tours/Image83.png"
import toursImg3 from "../../assets/tours/Image84.png"
const tours = ()=>(
    <div className={styles.tours}>
        <div className={styles.toursContainer}>
            <div className={styles.tourIcon}>
                            <ToursIcon/>
                            <p>Take a <span>tour</span></p>

            </div>
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
        slidesToShow="3"
        >
            <div style={{backgroundImage:`url(${toursImg1})`}} className={styles.category}>
             <div className={styles.title}> Quicksilver City stars</div>
            </div>
            <div style={{backgroundImage:`url(${toursImg2})`}} className={styles.category}>
             <div className={styles.title}> Adidas Cairo festival </div>
            </div>
            <div style={{backgroundImage:`url(${toursImg3})`}} className={styles.category}>
             <div className={styles.title}> Rebook Cairo festival </div>
            </div>
            </Carousel>
        </div>

    </div>
)

export default tours