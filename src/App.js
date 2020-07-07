import React, { Component } from 'react';
import { Route} from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shopPage/shopPage";
import SignIn from "./pages/sign in/signIn";
import SingleProduct from "./pages/single product/singleProduct"
import './App.css';

class App extends Component{
  render(){
    return(
      <React.Fragment>
       <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
       <Route  path={process.env.PUBLIC_URL + '/shop'} component={ShopPage} />
       <Route path={process.env.PUBLIC_URL+ "/signin"} component={SignIn}/>
       <Route path={process.env.PUBLIC_URL+ "/singleProduct"} component={SingleProduct}/>
      </React.Fragment>
    )
  }
}

export default App;
