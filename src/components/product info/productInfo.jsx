import React from "react";
import styles from "./productInfo.module.scss";
import testImg from "../../assets/products/Image90.png";
import {HeartIcon,TickIcon,SignsIcon,FacebookIcon,InstagramIcon} from "../svg/svg";
import { Component } from "react";


class productInfo extends Component {
    state={
        quantity:1
    }
    render(){
    

        const increase=()=>{
            this.setState({
                quantity:this.state.quantity +1
            })
            // quantity++
            // console.log(quantity)
        }
        const decrease=()=>{
            if (this.state.quantity > 1){
                this.setState({
                    quantity:this.state.quantity-1
                })
            }
        }
        const multiplyQuantity = (quantity) => {

            // let i = 0
            // while (i < quantity) {
              
                
            //     i++;
            // }
  this.props.addToCart(this.props.product,quantity)
             
        }
        return(
            
        <div className={styles.product}>
            <div className={styles.productImgs}>
                <img src={this.props.product.img}/>
            
            </div>
            <div className={styles.productInfo}>
                <div className={styles.info}>
                    <span className={styles.path}>Home / Shop / {this.props.product.brand} / {this.props.product.title}</span>
                    <h3>{this.props.product.title}</h3>
                    <div className={styles.price}>
                        <span className={styles.newPrice}>{this.props.product.price} EGP</span>
                        {this.props.product.oldPrice &&<span className={styles.oldPrice}>{this.props.product.oldPrice} EGP</span>}
                    </div>
                    {/* <div className={styles.formGroup}>
                        <label>Color</label> 
                        <select placeholder="dasff">
                            <option>-- Please select --</option>
                        </select>
                    </div> */}
                    <div className={styles.formGroup}>
                        <label>Size</label> 
                        <select placeholder="dasff">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </div>
                    <div className={styles.quantityGroup}>
                        <label>Quantity</label> 
                        <div className={styles.controls}>
                            <span onClick={decrease} className={styles.sign}>-</span>
                            <span className={styles.quantity}>{this.state.quantity}</span>
                            <span  onClick={()=>increase()} className={styles.sign}>+</span>
</div>
                        </div>
                        <div className={styles.cart}>
                            <div className={styles.heartIcon}>
                                <HeartIcon/>
                            </div>
                            <button onClick={()=>this.props.addToCart(this.props.product,this.state.quantity)} className={styles.cartBtn}>
                            Add to cart
                            </button>
                        </div>
                    
                   
                </div>
                <div className={styles.available}>
                    <div>
                    <TickIcon/> <span>Product available in these store branches</span>
                    </div>
                    <p>You also can buy online and Pick up product from the nearest branch.</p>
                    <div className={styles.location}>
                        <select>
                        <option>{this.props.product.brand} - City Stars</option>
                        <option>{this.props.product.brand} - Downtown</option>
                        <option>{this.props.product.brand} - Cario festival</option>
                        <option>{this.props.product.brand} - Dandy mall</option>
                    </select>
                    <div className={styles.signIcon}>
                        <SignsIcon/>
                    </div>
                    </div>
                    
                </div>
                <div className={styles.description}>
                    <p>
                    <span>Description</span> <br/> Visibly more youthful-looking eyes thanks to this eye contour cream which banishes lines, puffiness and dark circles .
Visibly more youthful-looking eyes thanks to this eye contour cream which banishes lines, puffiness and dark circles .Visibly more youthful-looking eyes thanks to this eye contour cream which banishes lines, puffiness and dark circles .
                    </p>
                </div>
                <div className={styles.share}>
                    <span>Share Product </span>
                    <div className={styles.icons}>
                        <div className={styles.icon}><FacebookIcon/></div>
                        <div className={styles.icon}><InstagramIcon/></div>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }

}

    


export default productInfo