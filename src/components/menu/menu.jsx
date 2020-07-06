import React, { Component } from "react";
import styles from "./menu.module.scss";
import {ReactComponent as ListIcon } from "../../assets/icons/list.svg"
import {ReactComponent as BagIcon } from "../../assets/icons/bag.svg"
import {ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import {ReactComponent as UsersIcon } from "../../assets/icons/user.svg"
import {NavLink , Link} from "react-router-dom"
import logo from "../../assets/Rectangle3.png";
import MenuSidebar from "../../components/menuSidebar/menuSidebar";
import CartSidebar from "../cartSidebar/cartSidebar";
import Search from "../search/search"
class Menu extends Component {
  state={
    showCart: false,
    showMenuSidebar: false,
    showSearchbar:false
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
            <MenuSidebar open={this.state.showMenuSidebar}
          closed={this.showMenuSidebarClosedHandler}/>
          {this.state.showCart ? <CartSidebar open={this.state.showCart} closed={this.showCartClosedHandler}/> : null}
           
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <div  
               onClick={this.showMenuSidebarToggleHandler}
              className={styles.toggle}>
              <ListIcon />

              </div>
              <NavLink to={process.env.PUBLIC_URL+"/"}> <img src={logo} alt="logo" /></NavLink>
            </div>
            <div className={styles.links}>
              <ul>
                <NavLink ClassName={styles.navLink} to={process.env.PUBLIC_URL + '/shop'}>SHOP</NavLink>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>SITE LOCATOR</li>
              </ul>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon} onClick={this.ToggleSearchbar}>
              <SearchIcon />
              </div>
              <Link to={process.env.PUBLIC_URL+"/signin"}>
              <UsersIcon />
              </Link>
              <div className={styles.icon} onClick={this.ToggleCart}>
              <BagIcon />
              </div>
            </div>
          </div>
          {this.state.showSearchbar ? <Search/> : null}
          </div>
        );
    }
}

export default Menu