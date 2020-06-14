import React, { Component } from "react";
import styles from "./menu.module.scss";
import {ReactComponent as ListIcon } from "../../assets/icons/list.svg"
import {ReactComponent as BagIcon } from "../../assets/icons/bag.svg"
import {ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import {ReactComponent as UsersIcon } from "../../assets/icons/user.svg"
import logo from "../../assets/Rectangle3.png"
class Menu extends Component {
    render(){
        return (
          <div className={styles.menu}>
          <div className={styles.navbar}>
            <div className={styles.logo}>
              <ListIcon />
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.links}>
              <ul>
                <li>SHOP</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>SITE LOCATOR</li>
              </ul>
            </div>
            <div className={styles.icons}>
              <SearchIcon />
              <UsersIcon />
              <BagIcon />
            </div>
          </div>
          </div>
        );
    }
}

export default Menu