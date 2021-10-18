import React, { Component } from "react";
import styles from "./tours.module.scss";
import Carousel from 'nuka-carousel';


import {ReactComponent as ToursIcon } from "../../assets/tours/360-degree.svg"

import toursImg1 from "../../assets/tours/Image85.png"
import toursImg2 from "../../assets/tours/Image83.png"
import toursImg3 from "../../assets/tours/Image84.png"
class Tours extends Component{
     state = {
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
    render(){
        let slides = 0;
    let enabled=false

if (this.state.width > 1000) {
  slides = 3;
} else if (this.state.width >600) {
   slides = 2;
} else {slides = 1;  enabled=true}
;
    return(
    <div className={styles.tours}>
        <div className={styles.toursContainer}>
            <div className={styles.tourIcon}>
                            <ToursIcon/>
                            <p>Take a <span>tour</span></p>

            </div>
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
}
}



export default Tours