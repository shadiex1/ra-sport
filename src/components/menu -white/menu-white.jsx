import React, { Component } from "react";
import styles from "./menu-white.module.scss";
import {ReactComponent as ListIcon } from "../../assets/icons/shop/list.svg"
import {ReactComponent as BagIcon } from "../../assets/icons/shop/bag.svg"
import {ReactComponent as SearchIcon } from "../../assets/icons/shop/search.svg"
import {ReactComponent as UsersIcon } from "../../assets/icons/shop/user.svg"
import logo from "../../assets/ra-sport-logo.png"


import {NavLink , Link} from "react-router-dom"
import MenuSidebar from "../../components/menuSidebar/menuSidebar";
import CartSidebar from "../cartSidebar/cartSidebar";
import Search from "../search/search";
import {categories} from "../../services/Data.json"
class MenuWhite extends Component {
  state={
    showCart: false,
    showMenuSidebar: false,
    showSearchbar:false,
    categories:categories
  }
  ToggleCart=()=>{
    this.setState((prevState) => {
      return { showCart: !prevState.showCart };
    });
  }
  ToggleSearchbar=()=>{
    this.setState((prevState) => {
      return { showSearchbar: !prevState.showSearchbar };
    });
  }
  showCartClosedHandler=()=>{
    this.setState({ showCart: false });

  }
  showMenuSidebarClosedHandler = () => {
    this.setState({ showMenuSidebar: false });
  };
  showMenuSidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenuSidebar: !prevState.showMenuSidebar };
    });
  };
    render(){
        return (
          <div className={styles.menu}>
            <MenuSidebar  categories={categories} open={this.state.showMenuSidebar}
          closed={this.showMenuSidebarClosedHandler}/>
          {this.state.showCart ? <CartSidebar deleteFromCart={(i)=>this.props.deleteFromCart(i)} cart={this.props.cart} open={this.state.showCart} closed={this.showCartClosedHandler}/> : null}
           
          <div className={styles.navbar}>
            <div className={styles.logo}>
              {/* <div  
               onClick={this.showMenuSidebarToggleHandler}
              className={styles.toggle}>
              <ListIcon />

              </div> */}
              <NavLink to={process.env.PUBLIC_URL+"/"}> <img src={logo} alt="logo" /></NavLink>
            </div>
            {/* <div className={styles.links}>
              <ul>
                <NavLink  activeClassName={styles.navLink} to={process.env.PUBLIC_URL + '/shop'}>SHOP</NavLink>

                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>SITE LOCATOR</li>
              </ul>
            </div> */}
            <div className={styles.icons}>
              <div className={styles.icon} onClick={this.ToggleSearchbar}>
              <SearchIcon />
              </div>
              <Link className={styles.usericon} to={process.env.PUBLIC_URL+"/signin"}>
              <UsersIcon />
              </Link>
              <div className={styles.icon} onClick={this.ToggleCart}>
              <div className={styles.counter}>{this.props.cart.length}</div>
              <BagIcon />
              </div>
            </div>
          </div>
          {this.state.showSearchbar ? <Search/> : null}
          </div>
        );
    }
}

export default MenuWhite
