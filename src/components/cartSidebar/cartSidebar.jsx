import React from "react"
import styles from "./cartSidebar.module.scss";
import CartItem from "../cartItem/cartItem";
import Backdrop from "../backdrop/backdrop"
import { Component } from "react";

class cartSidebar extends Component{
    state={

    }
    componentDidMount(){
        console.log("ddf")
    }

    
    render(){const TotalArr = []
    this.props.cart.map(item=>TotalArr.push(item.price))
    let TotalNumber=TotalArr.reduce((a, b) => a + b, 0)
    
          const {open ,closed} = this.props

    let attachdstyles = [styles.cartSidebar, styles.Close];
  if (this.props.open) {
    attachdstyles = [styles.cartSidebar, styles.Open];
  }


    

 return(
        <React.Fragment>
         <Backdrop show={open} clicked={closed} />
         
        <div className={attachdstyles.join(" ")}>
            <div className={styles.item}>
            {this.props.cart.map((item)=><CartItem id={item.id} deleteFromCart={(id)=>this.props.deleteFromCart(id)} brandName={item.brand} brand={item.brandLogo} price={item.price} img={item.img}/>)}
            </div>
           
            <div className={styles.priceContainer}>
                <span >total</span>
                <div>
                    <span className={styles.price}>{TotalNumber} EGP</span>
                    <p>Shipping fees will be added latter</p>
                </div>
            </div>
            {/* <button className={styles.cartBtn}>Go to cart</button>
            <button className={styles.checkoutBtn}>Checkout</button> */}
        </div>
        </React.Fragment>
    )
    }
  
//   {attachdstyles.join(" ")}

   
}

export default cartSidebar