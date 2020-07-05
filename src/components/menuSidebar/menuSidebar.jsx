import React from "react";
import styles from "./menuSidebar.module.scss";
// import Backdrop from "../backdrop/backdrop";
// import Data from "../../../../Services/Data";
// import Accordion from "../../Menu/Sidebar/Accordion/Accordion";

// import { Link } from "react-router-dom";
import logo from "../../assets/ra-sport-logo.png";
import {CloseIcon} from "../svg/svg";
const menuSidebar = (props) => {
  let attachdstyles = [styles.sidebar, styles.Close];
  if (props.open) {
    attachdstyles = [styles.sidebar, styles.Open];
  }

  const { org, organizationName, categories, closed, open } = props;

  return (
    <React.Fragment>
      {/* <Backdrop show={open} clicked={closed} /> */}
      <div className={attachdstyles.join(" ")}>
        {/* <div className={styles.mobile}>
          <div className={styles.mobileHeader}>
            <p>Main Menu</p>
            <div onClick={props.closed}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.menu}>
            <Link to={Data.getProperUrl()} onClick={closed}>
              <img
                src={Data.getProperImageUrl(org.themes.logo_url)}
                alt={organizationName}
                title={organizationName}
              />
            </Link>
            <div className={styles.icons}>
              <div>
                <HeartIcon />
              </div>
              <div>
                <Link to={Data.getProperUrl("cart")} onClick={closed}>
                  <CartIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userContainer}>
              <UserIcon />
              <p>My account</p>
            </div>
            <AngelRightThin />
          </div>
        </div> */}
        <div className={styles.title}>
          <img
            src={logo}
          />
          <div onClick={props.closed}>
            <CloseIcon />
          </div>
        </div>
        {/* <Accordion categories={categories} /> */}
      </div>
    </React.Fragment>
  );
};

export default menuSidebar;
