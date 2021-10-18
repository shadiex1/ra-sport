import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shopPage/shopPage";
import SignIn from "./pages/sign in/signIn";
import SingleProduct from "./pages/single product/singleProduct"
import './App.css';

class App extends Component {
  state = {
    cart: [],
    selectedProduct: null
  }

  addToCart = (item, quantity = 1) => {
    let currentCart = [...this.state.cart]

    let i = 0
    while (i < quantity) {
      console.log(quantity)
      currentCart.push(item)
      i++;
    }

    this.setState({
      cart: currentCart
    })

  }

  viewProductInfo = (item) => {
    this.setState({
      selectedProduct: item
    })
  }
  deleteFromCart=(id)=>{
//     let deleted=[...this.state.cart].find(el=>el.id=id);



//     const index =this.state.cart.indexOf(deleted);

//  const newCart=this.state.cart.splice(index, 1);
const cart = [...this.state.cart]
 const filterd = cart.filter(el => el.id != id);
   this.setState({
     cart:filterd
   })
  }
  render() {

    return (
      <React.Fragment>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={() => <Homepage deleteFromCart={(id)=>this.deleteFromCart(id)} cart={this.state.cart} addToCart={(item) => this.addToCart(item)} />} />
        <Route path={process.env.PUBLIC_URL + '/shop'} component={() => <ShopPage deleteFromCart={(index)=>this.deleteFromCart(index)} cart={this.state.cart} addToCart={(item) => this.addToCart(item)} />} />
        <Route path={process.env.PUBLIC_URL + "/signin"} component={() => <SignIn deleteFromCart={(index)=>this.deleteFromCart(index)}  cart={this.state.cart} />} />
        <Route path={process.env.PUBLIC_URL + "/singleProduct"} component={() => <SingleProduct deleteFromCart={(index)=>this.deleteFromCart(index)} cart={this.state.cart} productInfo={(item) => this.viewProductInfo(item)} addToCart={(item, quantity) => this.addToCart(item, quantity)} product={this.state.selectedProduct} />} />
      </React.Fragment>
    )
  }
}

export default App;
