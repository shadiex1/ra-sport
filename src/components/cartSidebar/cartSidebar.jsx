import React from "react"
import styles from "./cartSidebar.module.scss";
import CartItem from "../cartItem/cartItem";
import Backdrop from "../backdrop/backdrop"

const cartSidebar = props =>{
    const {open ,closed} = props

    let attachdstyles = [styles.sidebar, styles.Close];
  if (props.open) {
    attachdstyles = [styles.sidebar, styles.Open];
  }

//   {attachdstyles.join(" ")}
    return(
        <React.Fragment>
         <Backdrop show={open} clicked={closed} />

        <div className={styles.cartSidebar}>
            <CartItem/>
            {/* <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/> */}
            <div className={styles.priceContainer}>
                <span>total</span>
                <div>
                    <span className={styles.price}>6000 EGP</span>
                    <p>Shipping fees will be added latter</p>
                </div>
            </div>
            <button className={styles.cartBtn}>Go to cart</button>
            <button className={styles.checkoutBtn}>Checkout</button>
        </div>
        </React.Fragment>
    )
}

export default cartSidebar