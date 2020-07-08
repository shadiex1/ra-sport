import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AngelRightThin } from '../../../svg/svg';
import PanelContainer from "../panelContainer";
import * as styles from "./panel.module.scss";


// import Data from '../../../../../../../Services/Data';

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeChildId: null
    }
  }

  toggleActiveChild = id => {   
    if (this.state.activeChildId === id) {
      this.setState({ activeChildId: null });
    } else {
      this.setState({ activeChildId: id });
    }
  }

  componentDidUpdate() {
    const { category, activeCategoryId } = this.props;
    const { activeChildId } = this.state;
    if (activeCategoryId !== category.id && activeChildId){
      this.toggleActiveChild(null);
    }
  }

  render() {

    const {
      category,
      toggleActiveCategory,
      activeCategoryId,
      toggleSidebar,
    } = this.props;
    const { activeChildId } = this.state;
    const subCategories = category.children || [];

    return (
      <div
        className={[
          styles.Panel,
          activeCategoryId === category.id && styles.selected
        ].join(" ")}
      >
        <header className={styles.title}>
          {subCategories && subCategories.length > 0 ? (
            <button onClick={() => toggleActiveCategory(category.id)}>
              {category.name}
              <i
                className={[
                  styles.icon,
                  activeCategoryId === category.id && styles.open
                ].join(" ")}
              >
                {/* <AngelRightCircleThin /> */}
                <AngelRightThin/>
              </i>
            </button>
          ) : (
            // <Link
            //   to={Data.getItemUrl(category, "categories")}
            //   onClick={() => {
            //     toggleActiveCategory(null);
            //     toggleSidebar();
            //   }}
            // >
            <a>
                              {category.alias}

            </a>
            // </Link>
          )}
        </header>
        <main className={styles.body}>
          {subCategories && subCategories.length > 0 && (
            <React.Fragment>
              <PanelContainer
                category={{ ...category, alias: "Shop All", children: [] }}
                activeCategoryId={activeChildId}
                toggleActiveCategory={this.toggleActiveChild}
                toggleSidebar={toggleSidebar}
              />

              {subCategories.map((subCat) => {
                return (
                  <PanelContainer
                    category={subCat}
                    activeCategoryId={activeChildId}
                    toggleActiveCategory={this.toggleActiveChild}
                    toggleSidebar={toggleSidebar}
                    key={subCat.id}
                  />
                );
              })}
            </React.Fragment>
          )}
        </main>
      </div>
    );
  }
}
export default Panel;
