import React, { Component } from 'react';
import { Route} from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shopPage/shopPage"
import './App.css';

class App extends Component{
  render(){
    return(
      <React.Fragment>
       <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
       <Route  path={process.env.PUBLIC_URL + '/shop'} component={ShopPage} />
      </React.Fragment>
    )
  }
}

export default App;
